module.exports.config = {
  name: "nyadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Quyền",
  description: "Hàng đặt riêng của bạn chủ bot,nếu thích thì cứ xài ^^",
  commandCategory: "random-img",
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
"https://i.postimg.cc/0yKdSVZ4/234836199-108587071544971-2361156991329041679-n.jpg",
"https://i.postimg.cc/CM6q4jZp/234992410-108587308211614-2798933116323674503-n.jpg",
"https://i.postimg.cc/fLRVcLDb/236384388-108585898211755-6104007636655076286-n.jpg",
"https://i.postimg.cc/hv7PsQwK/238387513-108595824877429-1643727845467906052-n.jpg",
"https://i.postimg.cc/rpF4Jg9c/238757294-108595891544089-7198506541197070349-n.jpg",
"https://i.postimg.cc/rmkv30K8/240114332-111366011267077-2006359645447800549-n.jpg",
"https://i.postimg.cc/9QvM4pNJ/240780417-110454048024940-3819881527131790535-n.jpg",
"https://i.postimg.cc/287ML8cJ/242676465-118686000535078-3864008986921534573-n.jpg",
"https://i.postimg.cc/QtLZkYpn/243956421-119730510430627-3131650778995183492-n.jpg",
"https://i.postimg.cc/TYkhxmMY/245391995-122137310189947-6915349561063144939-n.jpg", 
     ];
     var callback = () => api.sendMessage({body:`Ny admin bot ❤️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
