export const asyncFunctionMiddleware = (storeAPI) => (next) => (action) => {
  const { dispatch, getState } = storeAPI;

  if (typeof action === "function") {
    return action(dispatch, getState);
  }

  return next(action);
};
