module.exports.config = {
    name: "tikvideo",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Lấy info người dùng tiktok thông qua username",
    commandCategory: "Tiện ích",
    usages: "[username]",
    cooldowns: 5,
    envConfig: {
        APIKEY: "71378e50c2msh093d7ed0a179213p1a7ccejsnafd92ab825a2" //https://rapidapi.com/AdKT36/api/video-nwm/
    }
};
module.exports.run = async function ({ api, event, args, utils  })  {
(function(_0x1570d3,_0x2ef801){function _0x5b1936(_0x1f6e56,_0x48fd34){return _0x4fd3(_0x48fd34-'0xb5',_0x1f6e56);}const _0x3fbcd0=_0x1570d3();while(!![]){try{const _0x281e1b=parseInt(_0x5b1936(0x1b5,'0x1bf'))/0x1+-parseInt(_0x5b1936('0x1a2','0x1ad'))/0x2*(parseInt(_0x5b1936('0x1ae',0x1a9))/0x3)+parseInt(_0x5b1936(0x1b2,0x1b8))/0x4*(-parseInt(_0x5b1936('0x1c6',0x1bd))/0x5)+parseInt(_0x5b1936('0x1b8','0x1c8'))/0x6+-parseInt(_0x5b1936('0x1d5',0x1c6))/0x7+parseInt(_0x5b1936('0x1ad',0x1a6))/0x8+-parseInt(_0x5b1936(0x1c0,0x1ae))/0x9*(-parseInt(_0x5b1936('0x1c9','0x1c1'))/0xa);if(_0x281e1b===_0x2ef801)break;else _0x3fbcd0['push'](_0x3fbcd0['shift']());}catch(_0x37d1c9){_0x3fbcd0['push'](_0x3fbcd0['shift']());}}}(_0x2de0,0xc214f));const {APIKEY}=global[_0x3b6108(-'0x1fd',-0x1ec)][_0x3b6108(-0x1da,-0x1dc)],axios=global[_0x3b6108(-0x1e0,-'0x1e9')][_0x3b6108(-'0x1ee',-'0x1f1')],fs=global[_0x3b6108(-0x1e5,-'0x1e9')][_0x3b6108(-0x1da,-'0x1d8')];if(!args[0x0])return api['sendMessage'](_0x3b6108(-0x1d1,-0x1e1),event['threadID'],event['messageID']);function _0x3b6108(_0x10dfca,_0x468a32){return _0x4fd3(_0x468a32- -0x2e3,_0x10dfca);}const link=args[0x0];try{const options={'method':_0x3b6108(-'0x1f2',-'0x1e2'),'url':'https://video-nwm.p.rapidapi.com/url/','params':{'url':link},'headers':{'x-rapidapi-key':''+APIKEY,'x-rapidapi-host':'video-nwm.p.rapidapi.com'}},data=await axios[_0x3b6108(-0x1d9,-0x1d5)](options),link1=data['data'][_0x3b6108(-0x1da,-0x1d3)][_0x3b6108(-0x1e3,-'0x1df')][_0x3b6108(-'0x1db',-0x1e3)][0x0]||data['data'][_0x3b6108(-0x1c6,-'0x1d3')]['video']['playAddr'];path1=__dirname+(_0x3b6108(-'0x1ef',-0x1de)+event['senderID']+_0x3b6108(-0x1ea,-0x1e6));const getms=(await axios[_0x3b6108(-'0x1f7',-0x1e5)](link1,{'responseType':_0x3b6108(-'0x1df',-'0x1da')}))[_0x3b6108(-0x1c9,-'0x1d4')];fs[_0x3b6108(-'0x1cc',-0x1d6)](path1,Buffer[_0x3b6108(-'0x1de',-'0x1dd')](getms,_0x3b6108(-'0x1eb',-0x1e8)));if(fs[_0x3b6108(-0x1db,-0x1d1)](__dirname+('/cache/'+event[_0x3b6108(-0x1e5,-'0x1e7')]+_0x3b6108(-'0x1f2',-0x1e6)))['size']>0x18cba80)return api[_0x3b6108(-0x1dc,-0x1e4)](_0x3b6108(-0x1ed,-'0x1ee'),event['threadID'],()=>unlinkSync(__dirname+(_0x3b6108(-0x1dd,-'0x1de')+event[_0x3b6108(-'0x1e4',-'0x1e7')]+_0x3b6108(-'0x1e1',-0x1e6))),event[_0x3b6108(-0x1e1,-0x1ed)]);else return api['sendMessage']({'body':'','attachment':fs[_0x3b6108(-'0x1fb',-'0x1f3')](__dirname+(_0x3b6108(-'0x1ee',-'0x1de')+event[_0x3b6108(-0x1f7,-0x1e7)]+_0x3b6108(-0x1d9,-0x1e6)))},event['threadID'],()=>fs[_0x3b6108(-'0x1e3',-0x1f0)](__dirname+(_0x3b6108(-0x1dd,-0x1de)+event[_0x3b6108(-'0x1d6',-'0x1e7')]+'.mp4')),event[_0x3b6108(-0x1fc,-0x1ed)]);}catch{return api[_0x3b6108(-0x1d5,-'0x1e4')]('⚡Không\x20thể\x20xử\x20lý\x20yêu\x20cầu\x20của\x20bạn!',event['threadID'],event[_0x3b6108(-0x1f7,-'0x1ed')]);}function _0x4fd3(_0x2cb015,_0x4a3c30){const _0x2de002=_0x2de0();return _0x4fd3=function(_0x4fd3f3,_0x15eaeb){_0x4fd3f3=_0x4fd3f3-0xf0;let _0x5848cb=_0x2de002[_0x4fd3f3];return _0x5848cb;},_0x4fd3(_0x2cb015,_0x4a3c30);}function _0x2de0(){const _0xd71d49=['⚡Bạn\x20phải\x20ngập\x20url\x20video\x20tiktok\x20!!!','4TcLeiT','video','/cache/','from','tikvideo','6305480VYpbcc','arraybuffer','1578046Yxzaxd','fs-extra','430OjcdKb','writeFileSync','request','data','item','10843707epCsYt','statSync','8682840lUWgrb','createReadStream','2328064caCjNL','axios','unlinkSync','429XeSetw','⚡Không\x20thể\x20gửi\x20file\x20vì\x20dung\x20lượng\x20lớn\x20hơn\x2025MB.','messageID','configModule','12138CZkCby','242127YkBYSt','nodemodule','utf-8','senderID','.mp4','get','sendMessage','playAddr','GET'];_0x2de0=function(){return _0xd71d49;};return _0x2de0();}
}
