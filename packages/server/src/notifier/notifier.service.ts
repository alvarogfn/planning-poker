import {Injectable, LoggerService} from "@nestjs/common";

type SubscriptionCallback = (payload: unknown) => Promise<void> | void;

@Injectable()
export class NotifierService {
  constructor(
      private readonly logger: LoggerService
  ) {
  }

  public subscribe(event: string, callback: SubscriptionCallback) {
    const current = this.subscriptions.get(event);
    this.subscriptions.set(event, [...current, callback]);
  }

  public unsubscribe(event: string, callback: SubscriptionCallback) {
    const current = this.subscriptions.get(event);
    this.subscriptions.set(
        event,
        current.filter((cb) => cb !== callback),
    );
  }

  public async publish(event: string, payload: unknown) {
    const callbacks = this.subscriptions.get(event);

    for (const callback of callbacks) {
      try {
        await callback(payload)
      } catch (error) {
        this.logger.warn(`Error in callback for event ${event}`, error);
      }
    }
  }

  private readonly subscriptions = new Map<string, SubscriptionCallback[]>();
}
