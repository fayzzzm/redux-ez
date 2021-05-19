import { combineReducers } from "redux";

import profile from "./profile";
import todos from "./todos";

export const rootReducer = combineReducers({ profile, todos });
