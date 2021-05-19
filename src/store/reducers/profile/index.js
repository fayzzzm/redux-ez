import {
  CHANGE_SURNAME,
  CHANGE_NAME,
  TOGGLE_EDIT,
} from "../../../constants/profile";

const initialState = {
  name: "Mustafo",
  surname: "Faiz",
  editActive: false,
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
      break;
    case TOGGLE_EDIT:
      previousProfile.editActive = !previousProfile.editActive;
      break;
    default:
      break;
  }

  return previousProfile;
};

export default profileReducer;
