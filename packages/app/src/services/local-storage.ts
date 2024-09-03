export class LocalStorage {
	constructor(private key: string) {}

	get() {
		return localStorage.getItem(this.key);
	}

	set(value: string) {
		return localStorage.setItem(this.key, value);
	}
}
