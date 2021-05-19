import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { asyncFunctionMiddleware, loggerMiddleware } from "./middlewares";
import { rootReducer } from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = applyMiddleware(sagaMiddleware, loggerMiddleware);

export const store = createStore(rootReducer, middlewareEnhancer);

sagaMiddleware.run(rootSaga);
