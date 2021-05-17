import "./styles.css";

import { useDispatch, useSelector } from "react-redux";

const actionName = (name) => {
  return {
    type: "CHANGE_NAME",
    payload: name
  };
};

export default function App() {
  const { name, surname } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;

    const action = actionName(value);

    dispatch(action);
  };

  return (
    <div className="App">
      <h1>
        Hello {name} {surname}
      </h1>
      <h2>Start editing to see some magic happen!</h2>
      <input defaultValue="" onChange={handleChange} />
    </div>
  );
}
