module.exports.config = {
  name: "đít",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Quyền",
  description: "Kiểm tra thông tin nhs chat.",
  commandCategory: "Hình Ảnh",
  usages: "anal",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  var link = [
    "https://imgur.com/UTdvXNg.jpg",
    "https://imgur.com/XBff2Zx.jpg",
    "https://imgur.com/tSjOfN3.jpg",
    "https://imgur.com/bq0SjiL.jpg",
    "https://imgur.com/mcvV59m.jpg",
    "https://imgur.com/dEGpTYi.jpg",
    "https://imgur.com/nbu5Nem.jpg",
    "https://imgur.com/WK29vof.jpg",
    "https://imgur.com/4wmvdng.jpg",
    "https://imgur.com/ztTkEpv.jpg",
    "https://imgur.com/HYarTDZ.jpg",
    "https://imgur.com/firXGtu.jpg",
    "https://imgur.com/Fct23Wg.jpg",
    "https://imgur.com/fZNgRHb.jpg",
    "https://imgur.com/uc9ZpM3.jpg",
    "https://imgur.com/a90jS6O.jpg",
    "https://imgur.com/reeLEIE.jpg",
    "https://imgur.com/vaLCyM4.jpg",
    "https://imgur.com/rUD8BYh.jpg",
    "https://imgur.com/Yr0kkpn.jpg",
    "https://imgur.com/R4nQZVj.jpg",
    "https://imgur.com/UiDidap.jpg",
    "https://imgur.com/i7SQSxK.jpg",
    "https://imgur.com/mcnXGCa.jpg",
    "https://imgur.com/undefined.jpg",
    "https://imgur.com/LpmUKAR.jpg",
    "https://imgur.com/d6VMJMK.jpg",
    "https://imgur.com/gAyhv1s.jpg",
    "https://imgur.com/gXVgFZq.jpg",
  ];
  var callback = () => api.sendMessage({ body: `Ảnh đít \nSố Ảnh hiện có: ${link.length}`, attachment: fs.createReadStream(__dirname + "/cache/5.jpg") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));
  return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/5.jpg")).on("close", () => callback());
};
