export interface Service<T> {
	findById(id: string): Promise<DeepPartial<T>>;
}
