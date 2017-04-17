"use strict"
const tencent_nlp = require("./app.js");
tencent_nlp.configure({
    "SecretId":"",
    "SecretKey":"",
    "Region":"gz"
});
tencent_nlp.cut("我喜欢你啊，真的十分喜欢你啊！",function(err,data){
    if(err){
        
    }
    console.log(data);
});
tencent_nlp.seg("我喜欢你啊，真的十分喜欢你啊！",function(err,data){
    if(err){
    }
    console.log(data);

});
