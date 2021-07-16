import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useToken } from "../auth/useToken";
import { EmailVerificationSuccess } from "./EmailVerificationSuccess";
import { EmailVerificationError } from "./EmailVerificationError";

export const EmailVerificationLandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const { verificationString } = useParams();
  const [, setToken] = useToken(0);

  useEffect(() => {
    const loadVerification = async () => {
      try {
        const response = await axios.put("/api/verify-email", {
          verificationString,
        });
        const { token } = response.data;
        setToken(token);
        setIsSuccess(true);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsSuccess(false);
      }
    };

    loadVerification();
  }, [setToken, verificationString]);

  if (isLoading) return <p>Loading ...</p>;
  if (!isSuccess) return <EmailVerificationError />;
  return <EmailVerificationSuccess />;
};
