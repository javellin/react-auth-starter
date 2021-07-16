import { useHistory } from "react-router";

export const EmailVerificationError = () => {
  const history = useHistory();

  return (
    <div className="content-container">
      <h1>Uh oh...</h1>
      <p>Something went wrong while trying to verify your email.</p>
      <button onClick={() => history.push("/signup")}>Baxk to sign up</button>
    </div>
  );
};
