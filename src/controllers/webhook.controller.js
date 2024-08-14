import twilio from "twilio";

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, MESSAGING_SERVICE_SID } =
  process.env;

export const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export const webhook = async (req, res) => {
  const { ProfileName, From, Body } = req.body;
  const twiml = new twilio.twiml.MessagingResponse();

  if (Body === "Hola") {
    await client.messages.create({
      contentSid: "HX310cec6816b9031e8dbdbc20dc78e766",
      messagingServiceSid: MESSAGING_SERVICE_SID,
      to: From,
    });
  }

  console.log(req.body);

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
};
