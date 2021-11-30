const fs = require("fs");
module.exports.config = {
    name: "nyadmin quẩy",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Quyền", 
    description: "no prefix",
    commandCategory: "Không cần dấu lệnh",
    usages: "Ny admin múa đẹp lắm",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("nyadmin quẩy")==0 || (event.body.indexOf("nyadmin quẩy")==0)) {
        var msg = {
                body: "Ny admin múa nè coi đẹp hong^^",
                attachment: fs.createReadStream(__dirname + `/noprefix/nyadminquay.mp4`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}