import { createStore } from "redux";

const initialState = {
  name: "Mustafo",
  surname: "Faiz"
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_NAME":
      return { ...state, name: payload };

    default:
      return state;
  }
};

export const store = createStore(reducer, initialState);
