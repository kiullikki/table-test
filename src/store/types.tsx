import { actionCreators } from "./actions";

export interface IAppStore {
  isLoading: boolean;
  isError: boolean;
}

export interface IStore {
  app: IAppStore;
}

type InferTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type TAppAction = ReturnType<InferTypes<typeof actionCreators>>;
