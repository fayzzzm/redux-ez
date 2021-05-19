import { useSelector, useDispatch } from "react-redux";

import { CHANGE_NAME, CHANGE_SURNAME, TOGGLE_EDIT } from "../constants/profile";

export const Profile = () => {
  const { name, surname, editActive } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const getActionType = (name) => {
    switch (name) {
      case "name":
        return CHANGE_NAME;
      case "surname":
        return CHANGE_SURNAME;

      default:
        return "DUMMY";
    }
  };

  const createActionByFieldName = (name, payload) => {
    return {
      type: getActionType(name),
      payload,
    };
  };

  const handleInputChange = (event, type) => {
    const {
      target: { value },
    } = event;

    const action = createActionByFieldName(type, value);

    console.log(action);

    dispatch(action);
  };

  const handleButtonClick = () => dispatch({ type: TOGGLE_EDIT });

  return (
    <div className="profile-container">
      <header>
        <button
          className="profile-container__edit-button"
          onClick={handleButtonClick}
        >
          {editActive ? "close" : "open"}
        </button>
      </header>
      <section className="profile-container__title">
        Hello {name} {surname}
      </section>

      {editActive && (
        <section className="profile-container__edit edit-container">
          <div className="edit-container__name">
            <input
              type="text"
              defaultValue={name}
              onChange={(e) => handleInputChange(e, "name")}
            />
          </div>
          <div className="edit-container__surname">
            <input
              type="text"
              defaultValue={surname}
              onChange={(e) => handleInputChange(e, "surname")}
            />
          </div>
        </section>
      )}
    </div>
  );
};
