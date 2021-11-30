module.exports.config = {
    name: "yaytext",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SEN",//đổi cl
    description: "yaytext",
    commandCategory: "game",
    usages: "yaytext <nội dung>",
    cooldowns: 5
};

module.exports.run = async ({ event, api, args }) => {
   var text = args.join("").toLowerCase();
       text = text.toLowerCase();
         text = text.replace(/\./g, ``)
  .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|a/g, `𝐀`)
  .replace(/b/g, `𝐁`)
  .replace(/c/g, `𝘾`)
  .replace(/d|đ/g, `𝘿`)
  .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|e/g, `𝙀`)
  .replace(/f/g, `𝙁`)
  .replace(/g/g, `𝙂`)
  .replace(/h/g, `𝙃`)
  .replace(/i/g, `𝙄`)
  .replace(/ì|í|ị|ỉ|ĩ|i/g, `𝙅`)
  .replace(/k/g, `𝙆`)
  .replace(/l/g, `𝙇`)
  .replace(/m/g, `𝙈`)
  .replace(/n/g, `𝙉`)
  .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|o/g, `𝙊`)
  .replace(/p/g, `𝙋`)
  .replace(/q/g, `𝙌`)
  .replace(/r/g, `𝙍`)
  .replace(/s/g, `𝙎`)
  .replace(/t/g, `𝙏`)
  .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|u/g, `𝙐`)
  .replace(/v/g, `𝙑`)
  .replace(/x/g, `𝙓` )
  .replace(/ỳ|ý|ỵ|ỷ|ỹ|y/g, `𝙔`)
  .replace(/w/g, `𝙒`)
  .replace(/z/g, `𝙕`)
  .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
  var arr = text.replace("\n", "").split("\n").filter(item => item.length != 0);
  var num = (arr.length/6)-1;
  var main = arr.slice(0,6);
  var extra = arr.splice(6);
  var msg = "";
  var mainlength = main.length;
  for(let i = 0; i < mainlength; i++) {
    var txt = main[i];
    for(let o = 0; o < num; o++) {
      txt += extra[i+(o*6)];
    }
    msg += txt+"\n";
  }
  return api.sendMessage(msg+"", event.threadID, event.messageID);
}