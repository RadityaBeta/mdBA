/*
const {
        inrl,
        isAdmin,
        isBotAdmin,
        add_Schedule,
        getAntiLink,
        setAntiLink,
        removeAntiLink,
        GetWords,
        setAntiWord,
        removeWord,
        getAutomutes,
        dlt_Schedule,
        getAutoUnMutes,
        getListOfWord,
        getLang
} = require('../lib');
let lang = getLang()
const actions = ["null", "kick", "warn"];
inrl({
        pattern: 'amute',
        desc: lang.GROUP.AMUTE.DESC,
        react: "🙃",
        type: "manage",
        onlyGroup: true
}, async (message, match, {
        ADMIN_SUDO_ACCESS
}) => {
        let admin = await isAdmin(message);
        let BotAdmin = await isBotAdmin(message);
        if (!BotAdmin) return await message.reply(lang.GROUP.BOT_ADMIN)
        if (ADMIN_SUDO_ACCESS != "true" && !message.client.isCreator) return await message.reply(lang.BASE.NOT_AUTHR)
        if (!admin && !message.client.isCreator) return await message.reply(lang.BASE.NOT_AUTHR)
        if (!match.match(':')) return message.reply(lang.GROUP.AMUTE.NEED_TIME)
        let [hr, mn] = match.split(':');
        if (hr.length == 1) hr = '0' + hr;
        if (mn.length == 1) mn = '0' + mn;
        if (isNaN(hr) || isNaN(mn)) return message.reply(lang.GROUP.AMUTE.INVALID_FORMAT.format("amute 10:10"));
        await add_Schedule(message, `${hr}:${mn}`, 'mute')
        let ast = hr > 12 ? `${hr-12}:${mn}PM` : `${hr}:${mn}AM`;
        ast = lang.GROUP.AMUTE.SUCCESS.format(ast);
        return message.reply(ast)
});
inrl({
        pattern: 'aunmute',
        desc: lang.GROUP.AUTOUNMUTE.DESC,
        react: "😣",
        type: "manage",
        onlyGroup: true
}, async (message, match, {
        ADMIN_SUDO_ACCESS
}) => {
        let admin = await isAdmin(message);
        let BotAdmin = await isBotAdmin(message);
        if (!BotAdmin) return await message.reply(lang.GROUP.BOT_ADMIN)
        if (ADMIN_SUDO_ACCESS != "true" && !message.client.isCreator) return await message.reply(lang.BASE.NOT_AUTHR)
        if (!admin && !message.client.isCreator) return await message.reply(lang.BASE.NOT_AUTHR)
        if (!match.match(':')) return message.reply(lang.GROUP.AUTOUNMUTE.NEED_TIME)
        let [hr, mn] = match.split(':')
        if (hr.length == 1) hr = '0' + hr;
        if (mn.length == 1) mn = '0' + mn;
        if (isNaN(hr) || isNaN(mn)) return message.reply(lang.GROUP.AUTOUNMUTE.INVALID_FORMAT.format("aunmute 10:10"));
        await add_Schedule(message, `${hr}:${mn}`, 'unmute', message.client.user.number)
        let ast = hr > 12 ? `${hr-12}:${mn}PM` : `${hr}:${mn}AM`;
        ast = lang.GROUP.AUTOUNMUTE.SUCCESS.format(ast);
        return message.reply(ast)
})
inrl({
                                pattern: 'delmute',
                                desc: lang.GROUP.AMUTE.DESC_DEL,
                                react: "🤥",
                                type: "manage",
                                onlyGroup: true
                        }, async (message, match, {
                                ADMIN_SUDO_ACCESS
                        }) => {
                                let admin = await isAdmin(message);
                                if (ADMIN_SUDO_ACCESS != "true" && !message.client.isCreator) return await message.reply(lang.BASE.NOT_AUTHR)
                                if (!admin && !message.client.isCreator) return await message.reply(lang.BASE.NOT_AUTHR)
                                if (!match) return message.reply(lang.GROUP.AMUTE.INVALID_FORMAT.format("delmute 22:15 for 10:15 PM"))
                                if (!match.includes(':')) return await message.reply(lang.GROUP.AMUTE.INVALID_FORMAT.format("delmute 22:15 for 10:15 PM"))
                                let [hr, mn] = match.replaceAll(' ', '').split(':');
                                if (!hr || !mn) return await message.reply(lang.GROUP.AMUTE.INVALID_FORMAT.format("delmute 12:15 for 12:15 AM"));
                                if (hr.length < 2) hr = '0' + hr;
                                if (mn.length < 2) hr = '0' + mn;
                                if (isNaN(hr) || isNaN(mn)) return await message.reply(lang.GROUP.AMUTE.INVALID_FORMAT.format("need time in number format"));
                                let data = await getAutomutes(message.client.user.number);
                                if (data == "no data") return await message.reply(lang.GROUP.AMUTE.NOT_FOUND.format("delmute 22:15", "getmute"));
                                let avb = false
                                await data.map(async ({
                                        jid,
                                        time
                                }) => {
                                        if (!jid.match(message)) return;
                                        if (!time) return await message.reply('*Not Found*\n*amute* 22:22  for 10:22PM');
                                        if (time == `${hr}:${mn}`) {
                                                avb = true;
                                                await dlt_Schedule(message, `${hr}:${mn}`, 'mute');
                                                return await message.reply(lang.BASE.SUCCESS)
                                        }
                                });
                                if (!avb) return await message.reply(lang.GROUP.AMUTE.NO_DATA)
                        }); inrl({
                                pattern: 'delunmute',
                                desc: lang.GROUP.AUTOUNMUTE.DESC_DEL,
                                react: "🥱",
                                type: "manage",
                                onlyGroup: true
                        }, async (message, match, {
                                ADMIN_SUDO_ACCESS
                        }) => {
                                let admin = await isAdmin(message);
                                if (ADMIN_SUDO_ACCESS != "true" && !message.client.isCreator) return await message.reply(lang.BASE.NOT_AUTHR)
                                if (!admin && !message.client.isCreator) return await message.reply(lang.BASE.NOT_AUTHR)
                                if (!match) return message.reply(lang.GROUP.AUTOUNMUTE.NEED_TIME)
                                if (!match.includes(':')) return await message.reply(lang.GROUP.AUTOUNMUTE.INVALID_FORMAT.format("delunmute 10:15 for 10:15 AM"))
                                let [hr, mn] = match.replaceAll(' ', '').split(':');
                                if (!hr || !mn) return await message.reply(lang.GROUP.AUTOUNMUTE.INVALID_FORMAT.format("delunmute 10:15 for 10:15 AM"));
                                if (hr.length < 2) hr = '0' + hr;
                                if (mn.length < 2) hr = '0' + mn;
                                if (isNaN(hr) || isNaN(mn)) return await message.reply('*_need time in number format_*');
                                let data = await getAutoUnMutes(message.client.user.number);
                                if (data == "no data") return await message.reply(lang.GROUP.AUTOUNMUTE.NOT_FOUND.format("delunmute 10:15", "getmute"));
                                let avb = false
                                await data.map(async ({
                                        jid,
                                        time
                                }) => {
                                        if (!jid.match(message)) return;
                                        if (!time) return await message.reply(lang.GROUP.AUTOUNMUTE.NO_DATA);
                                        if (time == `${hr}:${mn}`) {
                                                avb = false
                                                await dlt_Schedule(message, `${hr}:${mn}`, 'unmute', message.client.user.number);
                                                return await message.reply(lang.BASE.SUCCESS)
                                        }
                                });
                                if (!avb) return await message.reply(lang.GROUP.AUTOUNMUTE.NO_DATA)
                        });inrl({
                                pattern: "getmute",
                                desc: lang.GROUP.AMUTE.DESC_GET,
                                react: "🤯",
                                type: "manage",
                                onlyGroup: true
                        }, async (message, match, {
                                ADMIN_SUDO_ACCESS
                        }) => {
                                let admin = await isAdmin(message);
                                if (ADMIN_SUDO_ACCESS != "true" && !message.client.isCreator) return await message.reply(lang.BASE.NOT_AUTHR)
                                if (!admin && !message.client.isCreator) return await message.reply(lang.BASE.NOT_AUTHR)
                                if (match.includes('all') && match) return await message.reply(lang.GROUP.AMUTE.NOT_FOUND.format("getmute all", "getmute"));
                                if (match == "all") {
                                        let T_X_T = lang.GROUP.AMUTE.LIST_ALL
                                        let data = await getAutomutes(message.client.user.number);
                                        if (!data || data == "no data") return await message.reply(lang.GROUP.AMUTE.NO_DATA);
                                        await data.map(({
                                                jid,
                                                time,
                                                action
                                        }) => {
                                                T_X_T += `time : ${time}\naction: ${action} \njid : ${jid}\n\n`
                                        });
                                        return await message.reply(T_X_T);
                                } else {
                                        let T_X_T = lang.GROUP.AMUTE.LIST_ALL;
                                        let data = await getAutomutes(message.client.user.number);
                                        if (!data || data == "no data") return await message.reply(lang.GROUP.AMUTE.NO_DATA);
                                        await data.map(({
                                                jid,
                                                time,
                                                action
                                        }) => {
                                                if (jid == message.jid) {
                                                        T_X_T += `time : ${time}\naction : ${action} \n\n`
                                                } else T_X_T = lang.GROUP.AMUTE.NO_DATA
                                        })
                                        return await message.reply(T_X_T.replace(lang.GROUP.AMUTE.NO_DATA, ""));
                                }
                        }); inrl({
                                pattern: "getunmute",
                                desc: lang.GROUP.AUTOUNMUTE.DESC_GET,
                                react: "🥵",
                                type: "manage",
                                onlyGroup: true
                        }, async (message, match, {
                                ADMIN_SUDO_ACCESS
                        }) => {
                                let admin = await isAdmin(message);
                                if (ADMIN_SUDO_ACCESS != "true" && !message.client.isCreator) return await message.reply(lang.BASE.NOT_AUTHR)
                                if (!admin && !message.client.isCreator) return await message.reply(lang.BASE.NOT_AUTHR)
                                if (match.includes('all') && match) return await message.reply(lang.GROUP.AUTOUNMUTE.NOT_FOUND.format("getu nmute all", "getunmute"));
                                if (match == "all") {
                                        let T_X_T = lang.GROUP.AUTOUNMUTE.LIST_ALL;
                                        let data = await getAutoUnMutes(message.client.user.number);
                                        if (!data || data == "no data") return await message.reply(lang.GROUP.AUTOUNMUTE.NO_DATA);
                                        await data.map(async ({
                                                jid,
                                                time,
                                                action
                                        }) => {
                                                T_X_T += `time : ${time}\naction: ${action} \njid : ${jid}\n\n`
                                        });
                                        return await message.reply(T_X_T);
                                } else {
                                        let T_X_T = lang.GROUP.AUTOUNMUTE.LIST_ALL;
                                        let data = await getAutoUnMutes(message.client.user.number);
                                        if (!data || data == "no data") return await message.reply(lang.GROUP.AUTOUNMUTE.NO_DATA);
                                        await data.map(({
                                                jid,
                                                time,
                                                action
                                        }) => {
                                                if (jid == message.jid) {
                                                        T_X_T += `time : ${time}\naction : ${action} \n\n`
                                                } else T_X_T = lang.GROUP.AUTOUNMUTE.NO_DATA
                                        })
                                        return await message.reply(T_X_T);
                                }
                        });
*/