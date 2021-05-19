import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export const User = () => {
  const { loading, error, data } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "USER_FETCH_REQUESTED" });
  }, []);

  if (error) {
    console.log(error);
  }

  return (
    <div className="user-container">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="user-container__visualization">
          {JSON.stringify(data)}
        </div>
      )}
    </div>
  );
};
