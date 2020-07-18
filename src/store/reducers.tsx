import { combineReducers } from "redux";
import { IAppStore, TAppAction } from "./types";
import { ACTIONS_TYPES } from "./actions";

const INITIAL_STATE: IAppStore = {
  isLoading: false,
  isError: false,
};

export const appReducer = (
  state = INITIAL_STATE,
  action: TAppAction
): IAppStore => {
  switch (action.type) {
    case ACTIONS_TYPES.INITIAL: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  app: appReducer,
});
