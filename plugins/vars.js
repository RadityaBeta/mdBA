const {
        inrl
} = require('../lib');
const Config = require('../config');
inrl({
        pattern: 'getvar ?(.*)',
        fromMe: true,
        desc: 'show all config var',
        type: 'settings'
}, async (message, match) => {
        let msg = "*_all config vars_*\n\n";
        for (const key in Config) {
                if (key != 'DATABASE' && key != 'BASE_URL' && key != 'HEROKU' && key != 'SESSION_ID') {
                        msg += `_*${key}* : ${Config[key]}_\n`;
                }
        }
        return await message.send(msg);
});
