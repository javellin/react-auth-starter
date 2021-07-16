import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useToken } from "../auth/useToken";
import { useQueryParams } from "../util/useQueryParams";

export const LoginPage = () => {
  const [token, setToken] = useToken();

  const [googleOauthUrl, setGoogleOauthUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const history = useHistory();

  const { token: oauthToken } = useQueryParams();

  useEffect(() => {
    if (oauthToken) {
      setToken(oauthToken);
      history.push("/");
    }
  }, [oauthToken, setToken, history]);

  useEffect(() => {
    const loadOauthUrl = async () => {
      try {
        const response = await axios.get("/auth/google/url");
        const { url } = response.data;

        setGoogleOauthUrl(url);
      } catch (e) {
        console.log(e);
      }
    };

    loadOauthUrl();
  }, []);

  const onLoginClicked = async () => {
    const response = await axios.post("/api/login", {
      email: emailValue,
      password: passwordValue,
    });

    const { token } = response.data;

    setToken(token);
    history.push("/");
  };

  return (
    <div className="content-container">
      <h1>Log in</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        placeholder="someone@gmail.com"
      />
      <input
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        type="password"
      />
      <hr></hr>
      <button disabled={!emailValue || !passwordValue} onClick={onLoginClicked}>
        Log in
      </button>
      <button onClick={() => history.push("/forgot-password")}>
        Forgot your password?
      </button>
      <button onClick={() => history.push("/signup")}>
        Don't have an account? Sign up
      </button>
      <button
        disabled={!googleOauthUrl}
        onClick={() => (window.location.href = googleOauthUrl)}
      >
        Log in with Google
      </button>
    </div>
  );
};
