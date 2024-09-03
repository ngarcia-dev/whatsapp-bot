import twilio from "twilio";
import { sendMessage } from "../services/message.js";
import { getItemsIds } from "../utils/getItemsIds.js";

const templates = await getItemsIds();

export const webhook = async (req, res) => {
  const { ProfileName, From, Body: message } = req.body;
  const twiml = new twilio.twiml.MessagingResponse();

  try {
    const contentSid = templates[message];

    if (!contentSid)
      await sendMessage(From, process.env.TEMPLATE_MESSAGE_INIT, {
        1: ProfileName,
      });

    if (contentSid) await sendMessage(From, contentSid);

    console.log(req.body);

    res.writeHead(200, { "Content-Type": "text/xml" });
    res.end(twiml.toString());
  } catch (error) {
    console.error("Error al procesar el mensaje:", error);
    res.status(500).send("Error en el servidor.");
  }
};
