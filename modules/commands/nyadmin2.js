module.exports.config = {
  name: "nyadmin2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Quyền",
  description: "Hàng đặt riêng của bạn chủ bot,nếu thích thì cứ xài ^^",
  commandCategory: "random-video",
  usages: "Quyền",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://www.facebook.com/stories/108593491544329/UzpfSVNDOjE3ODg1NjI1NDEzNTEzMzM=/?bucket_count=9&source=story_tray",
 
     ];
     var callback = () => api.sendMessage({body:`Ny admin bot ❤️`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
   };
