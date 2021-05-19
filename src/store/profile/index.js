import { CHANGE_SURNAME, CHANGE_NAME } from "../../constants/profile";

const initialState = {
  name: "Mustafo",
  surname: "Faiz",
};

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;

  const previousProfile = { ...state };

  switch (type) {
    case CHANGE_NAME:
      previousProfile.name = payload;
      break;

    case CHANGE_SURNAME:
      previousProfile.surname = payload;
    default:
      break;
  }

  return previousProfile;
};

export default profileReducer;
