import { sendEmail } from "../util/sendEmail";

export const testEmailRoute = {
  path: "/auth-api/test-email",
  method: "post",
  handler: async (req, res) => {
    try {
      await sendEmail({
        to: "yanrochalves+test1@gmail.com",
        from: "yanrochalves@gmail.com",
        subject: "Does this work",
        text: "If you are reading this, it works!",
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(e);
      res.sendStatus(500);
    }
  },
};
