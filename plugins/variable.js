const {
    inrl,
    UpdateVariable,
    getLang
} = require('../lib');
let lang = getLang()

inrl({
    pattern: 'getvar ?(.*)',
    desc: lang.VARS.GET_DESC,
    sucReact: "😑",
    category: ["all,system"],
    type: "database",
    fromMe: true
}, async (message, match, data) => {
    let {
        ALLWAYS_ONLINE,
        REACT,
        WARNCOUND,
        ALIVE_DATA,
        AUTO_BIO,
        READ_CHAT,
        BOT_INFO,
        BGMBOT,
        WORKTYPE,
        PM_BLOCK,
        PREFIX,
        WELCOME_MSG,
        EXIT_MSG,
        CALL_BLOCK,
        STATUS_VIEW,
        LANG,
        PROFILE_STATUS,
        BLOCK_CHAT,
        AUTO_CHAT_PM,
        AUTO_CHAT_GRP,
        BOT_PRESENCE,
        AUDIO_DATA,
        STICKER_DATA,
        WA_GRP,
        SUDO,
        PMB_MSG,
        PMBC_MSG,
        AUTOMUTE_MSG,
        AUTOUNMUTE_MSG
    } = data;
    value = match.toUpperCase().trim();
    if (!match) {
        let content = `
ALLWAYS_ONLINE: ${ALLWAYS_ONLINE}
REACT: ${REACT}
WARNCOUND: ${WARNCOUND}
AUTO_BIO: ${AUTO_BIO}
READ_CHAT: ${READ_CHAT}
BGMBOT: ${BGMBOT}
WORKTYPE: ${WORKTYPE}
PMB_MSG: ${PMB_MSG}
PMBC_MSG: ${PMBC_MSG}
AUTOMUTE_MSG: ${AUTOMUTE_MSG}
AUTOUNMUTE_MSG: ${AUTOUNMUTE_MSG}
PM_BLOCK: ${PM_BLOCK} 
PREFIX: ${PREFIX}
CALL_BLOCK: ${CALL_BLOCK}
STATUS_VIEW: ${STATUS_VIEW}
LANG: ${LANG}
WA_GRP : ${WA_GRP}
BOT_INFO: ${BOT_INFO}
PROFILE_STATUS: ${PROFILE_STATUS}
BLOCK_CHAT: ${BLOCK_CHAT}
AUTO_CHAT_PM: ${AUTO_CHAT_PM}
AUTO_CHAT_GRP: ${AUTO_CHAT_GRP}
BOT_PRESENCE: ${BOT_PRESENCE}
AUDIO_DATA: ${AUDIO_DATA}
SUDO: ${SUDO}`
        return await message.reply(content);
    } else if (value == "REACT") {
        return await message.reply(`REACT : ${REACT}`);
    } else if (value == "WARNCOUND") {
        return await message.reply(`WARNCOUND : ${WARNCOUND}`);
    } else if (value == "ALIVE_DATA") {
        return await message.reply(`ALIVE_DATA : ${ALIVE_DATA}`);
    } else if (value == "ALLWAYS_ONLINE") {
        return await message.reply(`ALLWAYS_ONLINE : ${ALLWAYS_ONLINE}`);
    } else if (value == "AUTO_BIO") {
        return await message.reply(`AUTO_BIO : ${AUTO_BIO}`);
    } else if (value == "READ_CHAT") {
        return await message.reply(`READ_CHAT : ${READ_CHAT}`);
    } else if (value == "BGMBOT") {
        return await message.reply(`BGMBOT : ${BGMBOT}`);
    } else if (value == "WORKTYPE") {
        return await message.reply(`WORKTYPE : ${WORKTYPE}`);
    } else if (value == "PM_BLOCK") {
        return await message.reply(`PM_BLOCK : ${PM_BLOCK}`);
    } else if (value == "PREFIX") {
        return await message.reply(`PREFIX : ${PREFIX}`);
    } else if (value == "WA_GRP") {
        return await message.reply(`WA_GRP : ${WA_GRP}`);
    } else if (value == "WELCOME_MSG") {
        return await message.reply(`WELCOME_MSG : ${WELCOME_MSG}`);
    } else if (value == "EXIT_MSG") {
        return await message.reply(`EXIT_MSG : ${EXIT_MSG}`);
    } else if (value == "CALL_BLOCK") {
        return await message.reply(`CALL_BLOCK : ${CALL_BLOCK}`);
    } else if (value == "STATUS_VIEW") {
        return await message.reply(`STATUS_VIEW : ${STATUS_VIEW}`);
    } else if (value == "LANG") {
        return await message.reply(`LANG : ${LANG}`);
    } else if (value == "PROFILE_STATUS") {
        return await message.reply(`PROFILE_STATUS : ${PROFILE_STATUS}`);
    } else if (value == "BLOCK_CHAT") {
        return message.reply(`BLOCK_CHAT : ${BLOCK_CHAT}`);
    } else if (value == "AUTO_CHAT_PM") {
        return await message.reply(`AUTO_CHAT_PM : ${AUTO_CHAT_PM}`);
    } else if (value == "AUTO_CHAT_GRP") {
        return await message.reply(`AUTO_CHAT_GRP : ${AUTO_CHAT_GRP}`);
    } else if (value == "BOT_PRESENCE") {
        return await message.reply(`BOT_PRESENCE : ${BOT_PRESENCE}`);
    } else if (value == "AUDIO_DATA") {
        return await message.reply(`AUDIO_DATA : ${AUDIO_DATA}`);
    } else if (value == "STICKER_DATA") {
        return await message.reply(`STICKER_DATA : ${STICKER_DATA}`);
    } else if (value == "PMB_MSG") {
        return await message.reply(`PMB_MSG : ${PMB_MSG}`);
    } else if (value == "PMBC_MSG") {
        return await message.reply(`PMBC_MSG : ${PMBC_MSG}`);
    } else if (value == "AUTOMUTE_MSG") {
        return message.reply(`AUTOMUTE_MSG : ${AUTOMUTE_MSG}`);
    } else if (value == "AUTOUNMUTE_MSG") {
        return await message.reply(`AUTOUNMUTE_MSG : ${AUTOUNMUTE_MSG}`);
    } else if (value == "SUDO") {
        return await message.reply(`SUDO : ${SUDO}`);
    } else if (value == "BOT_INFO") {
        return await message.reply(`BOT_INFO : ${BOT_INFO}`);
    } else return await message.reply(lang.VARS.ERROR.format(".getvar"));
})
inrl({
    pattern: 'prefix ?(.*)',
    desc: lang.VARS.PREFIX.DESC,
    react: "🧤",
    type: "settings",
    fromMe: true,
    DismissPrefix: true,
}, async (message, match, data) => {
    if (!match) return await message.send(lang.VARS.PREFIX.METHODE.format("prefix get", "prefix 🐱‍👓"));
    if (match && match == "get") {
        return await message.send(data.PREFIX);
    } else if (match) {
        await UpdateVariable("PREFIX", match, message.client.user.number);
        return await message.send(lang.BASE.SUCCESS);
    }
});
inrl({
    pattern: 'adata ?(.*)',
    desc: lang.VARS.A_DATA.DESC,
    react: "⛑️",
    type: "settings",
    fromMe: true
}, async (message, match, data) => {
    if (!match) return await message.send(lang.VARS.A_DATA.METHODE.format("audio_data get","audio_data inrl;md;https://example.jpeg_"));
    if (match && match == "get") {
        return await message.send(data.AUDIO_DATA);
    } else if (match) {
        if (!match.match(/[;|,]/)) return await message.send(ang.VARS.A_DATA.METHODE.format("audio_data get","audio_data inrl;md;https://example.jpeg_"));
        if (!match.split(/[;|,]/).length == 3) return await message.send(ang.VARS.A_DATA.METHODE.format("audio_data get","audio_data inrl;md;https://example.jpeg_"));
        await UpdateVariable("AUDIO_DATA", match, message.client.user.number);
        return await message.send(lang.BASE.SUCCESS);
    }
});
inrl({
    pattern: 'sdata ?(.*)',
    desc: lang.VARS.S_DATA.DESC,
    react: "⛑️",
    type: "settings",
    fromMe: true
}, async (message, match, data) => {
    if (!match) return await message.send(lang.VARS.S_DATA.METHODE.formate("sdata get","sdata _inrl;md_"));
    if (match && match == "get") {
        return await message.send(data.STICKER_DATA);
    } else if (match) {
        if (!match.match(/[;|,]/)) return await message.send('_sticker_data inrl;md_');
        if (!match.split(/[;|,]/).length == 2) return await message.send('_sticker_data inrl;md_');
        await UpdateVariable("STICKER_DATA", match, message.client.user.number);
        return await message.send(lang.BASE.SUCCESS);
    }
});

inrl({
    pattern: 'bio ?(.*)',
    desc: lang.VARS.BIO.DESC,
    react: "🤪",
    type: "settings",
    fromMe: true
}, async (message, match, data) => {
    if (!match) return await message.send(lang.VARS.BIO.METHODE.format("bio get","bio"));
    if (match && match == "get") {
        return await message.send(data.AUTO_BIO);
    } else if (match) {
        await UpdateVariable("AUTO_BIO", match, message.client.user.number);
        return await message.send(lang.BASE.SUCCESS);
    }
});
inrl({
    pattern: 'lang ?(.*)',
    desc: lang.VARS.LANG.DESC,
    react: "🤪",
    type: "settings",
    fromMe: true
}, async (message, match, data) => {
    if (!match) return await message.send(lang.VARS.LANG.METHODE.format("lang list\nlang get","lang ml"));
    if (match && match == "get") {
        return await message.send(data.LANG);
    } else if (match == "list"){
       let list = `*_list of languages_*\n\n1 _en_\n2 _ml_\n3 _id_\n4 _zu_\n5 _hi_\n6 _si_`;
        return await message.send(list);
    } else if (match) {
        await UpdateVariable("LANG", match, message.client.user.number);
        return await message.send(lang.BASE.SUCCESS);
    }
});
inrl({
    pattern: 'antibot ?(.*)',
    desc: lang.VARS.ANTIBOT.DESC,
    react: "🥸",
    type: "settings",
    fromMe: true
}, async (message, match, {BLOCK_CHAT}) => {
    let jid = message.jid;
if(BLOCK_CHAT.includes(jid)){
    BLOCK_CHAT = BLOCK_CHAT.replace(jid,"")
    await UpdateVariable("BLOCK_CHAT", BLOCK_CHAT, message.client.user.number);
    return await message.send(lang.BASE.SUCCESS);
} else {
    BLOCK_CHAT = BLOCK_CHAT+jid;
    await UpdateVariable("BLOCK_CHAT", BLOCK_CHAT, message.client.user.number);
    return await message.send(lang.BASE.SUCCESS);
}
});

inrl({
    pattern: 'ban ?(.*)',
    desc: lang.VARS.ANTIBOT.DESC,
    react: "🥸",
    type: "settings",
    fromMe: true
}, async (message, match, {BLOCK_CHAT}) => {
    let jid = message.reply_message.sender || message.client.mention.jid[0];
    if(!jid) return await message.send(lang.BASE.NEED.format('user or mention someone'));
    if(!BLOCK_CHAT.includes(jid)) return await message.send("*_user already in the banned list_*");
    BLOCK_CHAT = BLOCK_CHAT+jid;
    await UpdateVariable("BLOCK_CHAT", BLOCK_CHAT, message.client.user.number);
    return await message.send(lang.BASE.SUCCESS);
});

inrl({
    pattern: 'unban ?(.*)',
    desc: lang.VARS.ANTIBOT.DESC,
    react: "🥸",
    type: "settings",
    fromMe: true
}, async (message, match, {BLOCK_CHAT}) => {
    let jid = message.reply_message.sender || message.client.mention.jid[0];
    if(!jid) return await message.send(lang.BASE.NEED.format('user or mention someone'));
    if(!BLOCK_CHAT.includes(jid)) return await message.send("*_user not exist in the banned list_*")
    BLOCK_CHAT = BLOCK_CHAT.replace(jid,"")
    await UpdateVariable("BLOCK_CHAT", BLOCK_CHAT, message.client.user.number);
    return await message.send(lang.BASE.SUCCESS);
});

inrl({
    pattern: 'binfo ?(.*)',
    desc: lang.VARS.B_INFO.DESC,
    react: "✳️",
    type: "settings",
    fromMe: true
}, async (message, match, data) => {
    if (!match) return await message.send(lang.VARS.B_INFO.METHODE.format("binfo get","binfo"));
    if (match && match == "get") {
        return await message.send(data.BOT_INFO);
    } else if (match) {
        if (!match.match(/[;|,]/)) return await message.send(lang.VARS.B_INFO.METHODE.format("binfo get","binfo"));
        if (match.split(/[;|,]/).length != 3) return await message.send(lang.VARS.B_INFO.METHODE.format("binfo get","binfo"));
        await UpdateVariable("BOT_INFO", match, message.client.user.number);
        return await message.send(lang.BASE.SUCCESS);
    }
});
inrl({
    pattern: 'sudo ?(.*)',
    desc: lang.VARS.SUDO.DESC,
    react: "🤯",
    type: "settings",
    fromMe: true
}, async (message, match, data) => {
    let sudo = (message.quoted.number || message.client.mention.jid.join(',') || match).replace(/[^0-9]/g, '');
    if(!sudo && match!="get" && match != "remove") return await message.send("*Example*\n*sudo get*\n*sudo remove*\n*sudo mention/reply/message*");
    if (match && match == "get") {
        return await message.send(`${data.SUDO?data.SUDO:'no data'}`);
    } else if (match.includes("remove")) {
        const jid = (message.quoted.number || message.client.mention.jid.join(',') || match).replace(/[^0-9]/g, '');
        if (!data.SUDO.includes(jid)) return message.send(lang.VARS.SUDO.NOT_EXIST);
        let value = data.SUDO.includes(',' + jid) ? data.SUDO.replaceAll(',' + jid, "") : data.SUDO.includes(jid + ',') ? data.SUDO.replaceAll(jid + ',', "") : data.SUDO.replaceAll(jid, "");
        await UpdateVariable("SUDO", value, message.client.user.number);
        return await message.send(lang.BASE.SUCCESS);
    } else if (sudo) {
        sudo = (data.SUDO + ',' + sudo).replace(/[^0-9,]/g, '');
        await UpdateVariable("SUDO", sudo, message.client.user.number);
        return await message.send(lang.BASE.SUCCESS);
    } else {
        return await message.send(lang.VARS.SUDO.METHODE.format("sudo","sudo","sudo"));
    }
});
