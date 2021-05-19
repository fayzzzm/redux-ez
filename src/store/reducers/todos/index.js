import { ADD_TODO } from "../../../constants/todo";

const initialState = {
  list: [],
};

const todos = (state = initialState, action) => {
  const { type, payload } = action;

  const previousStore = { ...state };

  switch (type) {
    case ADD_TODO:
      previousStore.list.push(payload);
      break;
    default:
      break;
  }

  return previousStore;
};

export default todos;
