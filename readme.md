## WHATSAPP-BOT

#### Para ejecutar el proyecto se necesita tener instalado nodejs en el sistema.

#### Luego se puede instalar las dependencias del proyecto con el siguiente comando:

> npm install

#### Una vez instaladas las dependencias, se puede ejecutar el proyecto con el siguiente comando:

> npm start

#### Para crear mas flujo de mensajes antes se debe crear un template desde la consola de twilio, una vez creado este brindara un contentSid que vendria a ser un identificador al que haremos referencia en el codigo para responder con este template segun el flujo de mensajeria ademas por cada opción que se agregue en template nos brindara un item_id que es el identificador de cada opcion para cuando queramos responder con otro template sepamos que el item_id es el que queremos usar para responder con el template.

```json
{
  "content_template": {
    "name_content": {
      "_sid": "XXXXXXXXXXXXXXX",
      "name_content_item_ids":{
        "item_id": "XXXXXXXXXXXXXXX",
        "item_id": "XXXXXXXXXXXXXXX"
        ...
      }
    }
    ...
  }
}
```

#### Una vez creado el template se debe agregar los identificadores en el archivo templates_ffyb.json

```javascript
switch (message) {
  case message_id:
    await sendMessage(From, name_content._sid);
    break;
}
```

#### Por ultimo se debe agregar este codigo en el archivo webhook.js ubicado en ./controllers/ dentro de la funcion webhook, el codigo se lee asi: si el mensaje recibido es igual al message_id se envia un mensaje con el template que se agrego en templates_ffyb.json en este caso name_content.\_sid
