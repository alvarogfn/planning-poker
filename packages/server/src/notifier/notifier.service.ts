import { Injectable } from "@nestjs/common";

type SubscriptionCallback = (payload: unknown) => void | Promise<void>;

@Injectable()
export class NotifierService {
	private subscriptions = new Map<string, SubscriptionCallback[]>();

	public subscribe(event: string, callback: SubscriptionCallback) {
		const current = this.subscriptions.get(event) || [];
		this.subscriptions.set(event, [...current, callback]);
	}

	public unsubscribe(event: string, callback: SubscriptionCallback) {
		const current = this.subscriptions.get(event) || [];
		this.subscriptions.set(
			event,
			current.filter((cb) => cb !== callback),
		);
	}

	public publish(event: string, payload: unknown) {
		const callbacks = this.subscriptions.get(event) || [];

		for (const callback of callbacks) {
			callback(payload);
		}
	}
}
