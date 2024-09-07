export type Service<T> = {
	findById: (id: string) => Promise<DeepPartial<T>>;
}
