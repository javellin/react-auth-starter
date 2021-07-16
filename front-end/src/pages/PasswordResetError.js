import { useHistory } from "react-router";

export const PasswordResetError = () => {
  const history = useHistory();

  return (
    <div className="content-container">
      <h1>Uh oh...</h1>
      <p>Something went wrong while trying to reset your password.</p>
      <button onClick={() => history.push("/login")}>Back to log in</button>
    </div>
  );
};
