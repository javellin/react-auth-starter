import { useState } from "react";

export const useToken = () => {
  const [token, setTokenInternal] = useState(() => {
    return localStorage.getItem("frz-store-auth-token");
  });

  const setToken = (newToken) => {
    localStorage.setItem("frz-store-auth-token", newToken);
    setTokenInternal(newToken);
  };

  return [token, setToken];
};
