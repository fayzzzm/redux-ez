import { USER_REQUEST, USER_ADD, USER_ERROR } from "../../../constants/user";

const initialState = {
  loading: false,
  error: false,
  data: {},
};

const userReducer = (state = initialState, action) => {
  const { type } = action;

  const previousState = { ...state };

  switch (type) {
    case USER_REQUEST:
      previousState.loading = true;
      break;
    case USER_ADD:
      previousState.data = action.payload;
      previousState.loading = false;
      break;
    case USER_ERROR:
      previousState.loading = false;
      previousState.error = true;
      break;
    default:
      break;
  }

  return previousState;
};

export default userReducer;
