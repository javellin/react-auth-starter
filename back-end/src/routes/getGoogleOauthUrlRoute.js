import { getGoogleOauthUrl } from "../util/getGoogleOauthUrl";

export const getGoogleOauthUrlRoute = {
  path: "/auth-api/google/url",
  method: "get",
  handler: (req, res) => {
    const url = getGoogleOauthUrl();

    res.status(200).json({ url });
  },
};
