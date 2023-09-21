const dotenv = require("dotenv");

dotenv.config();

// const accountSid = "AC9d561e820224b8cf14a7ca5deafe7a18";
// const authToken = "d8bcc0f476a760d27da5f823a31e8fd3";
// const serviceSid = "VA67bdc74a8de7a348b639e5a056f08192";

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Send OTP

// @param {*} req
// @param {*} res
// @param {*} next

const sendOTP = async (req, res, next) => {
  const { countryCode, contact } = req.body;

  try {
    const otpResponse = await client.verify
      .services(process.env.TWILIO_SERVICE_SID)
      .verifications.create({
        to: `+${countryCode}${contact}`,
        channel: "sms",
      });
    res
      .status(200)
      .send(`OTP send successfully!: ${JSON.stringify(otpResponse)}`);
  } catch (error) {
    res
      .status(error?.status || 400)
      .send(error?.message || "Something went wrong!");
  }
};

// Verify OTP

// @param {*} req
// @param {*} res
// @param {*} next

const verifyOTP = async (req, res, next) => {
  const { countryCode, contact, otp } = req.body;

  try {
    const verifiedResponse = await client.verify
      .services(process.env.TWILIO_SERVICE_SID)
      .verificationChecks.create({
        to: `+${countryCode}${contact}`,
        code: otp,
      });
    res
      .status(200)
      .send(`OTP verified successfully!: ${JSON.stringify(verifiedResponse)}`);
  } catch (error) {
    res
      .status(error?.status || 400)
      .send(error?.message || "Something went wrong!");
  }
};

module.exports = { sendOTP, verifyOTP };
