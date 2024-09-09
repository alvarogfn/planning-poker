import { DeepPartial } from "@/helpers/deep-partial";

export type Service<T> = {
  findById: (id: string) => Promise<DeepPartial<T>>;
};
