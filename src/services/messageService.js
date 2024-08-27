import twilio from "twilio";

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, MESSAGING_SERVICE_SID } = process.env;

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export const sendMessage = async (to, contentSid, contentVariables = null) => {
  const options = {
    contentSid,
    messagingServiceSid: MESSAGING_SERVICE_SID,
    to
  }

  contentVariables ? options.contentVariables = JSON.stringify(contentVariables) : null;

  await client.messages.create(options);
}