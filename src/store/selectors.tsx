import { IStore } from "./types";

export const select = (store: IStore): boolean => store.app.isLoading;
