import { createStore, applyMiddleware } from "redux";

import { asyncFunctionMiddleware, loggerMiddleware } from "./middleware";
import { rootReducer } from "./reducer";

const middlewareEnhancer = applyMiddleware(
  asyncFunctionMiddleware,
  loggerMiddleware
);

export const store = createStore(rootReducer, middlewareEnhancer);
