import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const ForgotPasswordPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const history = useHistory();

  const onSubmitClicked = async () => {
    try {
      await axios.put(`/auth-api/forgot-password/${emailValue}`);
      setSuccess(true);
      setTimeout(() => {
        history.push("/login");
      }, 3000);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  return success ? (
    <div className="content-container">
      <h1>Success</h1>
      <p>Check your email for a reset link</p>
    </div>
  ) : (
    <div className="content-container">
      <h1>Forgot password</h1>
      <p>Enter your email and we'll send you a reset link</p>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        placeholder="someone@gmail.com"
      />
      <button disabled={!emailValue} onClick={onSubmitClicked}>
        Send reset link
      </button>
    </div>
  );
};
