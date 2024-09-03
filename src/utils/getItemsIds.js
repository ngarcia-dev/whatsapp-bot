import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

export async function getItemsIds() {
  try {
    const templates = await client.content.v2.contentAndApprovals.list({
      limit: 20,
    });

    let idsObject = {};

    templates.forEach((template) => {
      const items = template.types["twilio/list-picker"]?.items;
      if (items) {
        items.forEach((item) => {
          if (item.id) {
            idsObject[item.id] = item.id;
          }
        });
      }
    });

    return idsObject;
  } catch (error) {
    console.error("Error al obtener los templates de WhatsApp:", error);
  }
}
