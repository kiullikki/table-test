export enum ACTIONS_TYPES {
  INITIAL = "INITIAL",
}

function literalType<T extends ACTIONS_TYPES>(actionName: T): T {
  return actionName;
}

export const initial = () => ({
  type: literalType(ACTIONS_TYPES.INITIAL),
});


export const actionCreators = {
  initial,
};
