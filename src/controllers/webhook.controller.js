import twilio from "twilio";
import { sendMessage } from "../services/messageService.js";
import universityData from "../../templates_ffyb.json" with { type: "json" };

const {
  welcome,
  info_alumnos,
  carreras,
  info_carreras,
  plan_estudio,
  video_farm,
  que_hace_un,
} = universityData.content_template;

const {
  im_study_id,
  info_cbc_id,
  study_ffyb_id
} = welcome.weolcome_item_ids;

const {
  becas,
  cursada,
  idiomas_y_deportes,
  pasantias,
  regularidad,
  priority_inscription,
} = info_alumnos.info_alumnos_item_ids;

const {
  farmacia,
  bioquimica,
  lcta,
  tumn,
  tuoc,
  tugib
} = carreras.carreras_item_ids;

export const webhook = async (req, res) => {
  const { ProfileName, From, Body: message } = req.body;
  const twiml = new twilio.twiml.MessagingResponse();

  // Lógica para manejar diferentes mensajes
  switch (message) {
    case "Hola":
      await sendMessage(From, welcome._sid, { 1: ProfileName });
      break;

    case im_study_id:
      await sendMessage(From, info_alumnos._sid);
      break;

    // Resto de casos

    default:
      console.log("Mensaje no reconocido:", message);
      break;
  }

  console.log(req.body);

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
};
