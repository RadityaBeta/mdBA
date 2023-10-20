const {
    inrl,
    getLang
} = require('../lib/'), {
        BASE_URL
    } = require('../config'),
    axios = require('axios');
    const lang = getLang()
inrl({
    pattern: "$gpt",
    desc: lang.GPT.DESC,
    react : "🤝",
    type: "eva"
}, async (message, match) => {
    try {
            match = match || message.reply_message.text;
        if (!match) return await message.reply(lang.GPT.NEED_TEXT);
        let {
            data
        } = await axios(`${BASE_URL}api/chatgpt?text=${match}`);
        body = data.result;
        return await message.client.sendMessage(message.from, {
            text: body
        });
    } catch (e) {
        return await message.send('_provided API is not valid_');
    }
});