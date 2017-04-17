"use strict";
const Capi = require("qcloudapi-sdk");
let capi = false;
let config = {};
let nlp = {};
nlp.configure = (settings) => {
    //settings is a object
    capi = new Capi({
        SecretId: settings.SecretId,
        SecretKey: settings.SecretKey,
        serviceType: "wenzhi"
    })
    config = settings;
}
nlp.cut = (text) => {
    capi.request({
        Region: 'gz',
        Action: 'LexicalAnalysis',
        Code : 2097152,
        Text : text
    }, function(error, data) {
        if(error){
            console.log("[tencent-nlp]Catch a error:");
            console.log(error);
        }
        data = JSON.parse(data);
        if(data.code !== 0){
            return false;
        }
        console.log(data);
        return data;
    })
}
nlp.seg = (text) => {
    //分词返回口，返回结构:["我","爱","你"]
    capi.request({
        Region: setting.Region,
        Action: 'LexicalAnalysis',
        Code : 2097152,
        Text : text
    }, function(error, data) {
        if(error){
            console.log("[tencent-nlp]Catch a error:");
            console.log(error);
        }
        data = JSON.parse(data);
        if(data.code !== 0){
            return false;
        }
        let seg = [];
        let length = data.tokens.length;
        for(let i = 0;i < length; i++){
            seg[i] = data.tokens[i].word;
        }
        if(seg.length == 0){
            return false;
        }else{
            return seg;
        }
    })
}

module.exports = nlp;