export const asyncFunctionMiddleware = (storeAPI) => (next) => (action) => {
  const { dispatch, getState } = storeAPI;

  if (typeof action === "function") {
    return action(dispatch, getState);
  }

  return next(action);
};

export const loggerMiddleware = (storeAPI) => (next) => (action) => {
  const { getState } = storeAPI;

  const previousStore = getState();
  console.log("prev store:", previousStore);

  next(action);

  const newStore = getState();
  console.log("new store:", newStore);

  return;
};
