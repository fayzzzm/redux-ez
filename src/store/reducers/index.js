import { combineReducers } from "redux";

import profile from "./profile";
import todos from "./todos";
import user from "./user";

export const rootReducer = combineReducers({ profile, todos, user });
