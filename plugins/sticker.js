const {
  inrl,
  getLang
} = require('../lib');
let lang = getLang()

const fs = require("fs");
const path = require("path");

inrl(
  {
    pattern: "sticker",
    desc: lang.STICKER.DESC,
    react: "🔁",
    type : 'converter',
    usage : "to convert short video or image to sticker fromate, ex:- sticker[repleyed_msg]"
  },
  async (message, match, data) => {
  let {STICKER_DATA} = data;
    if (!/image|video|webp/.test(message.client.mime)) return await message.send(
      lang.STICKER.ERROR
        );
    try {
     if (message.quoted.mime) {
      await message.send(lang.BASE.WAIT)
        let download = await message.quoted.download();
        message.client.sendFile(message.from, download, "", message, {
          asSticker: true,
          author: STICKER_DATA.split(/[|;,]/)[0],
          packname: STICKER_DATA.split(/[|;,]/)[1],
          categories: ["😄", "😊"],
        });
      } else if (/image|video|webp/.test(message.client.mime)) {
        await message.send(lang.BASE.WAIT)
        let download = await message.client.downloadMediaMessage(message);
        message.client.sendFile(message.from, download, "", message, {
          asSticker: true,
          author: STICKER_DATA.split(/[|;,]/)[0],
          packname: STICKER_DATA.split(/[|;,]/)[1],
          categories: ["😄", "😊"],
        });
      } else {
        return await message.send(
          lang.STICKER.ERROR
        );
      }
    } catch (error) {
      return await message.send(
        error
      );
    }
  }
);
