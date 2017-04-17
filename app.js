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
nlp.cut = (text,callback) => {
    let req;
    capi.request({
        Region: config.Region,
        Action: 'LexicalAnalysis',
        code : 2097152,
        text : text
    }, function(error, data) {
        if(error){
            console.log("[tencent-nlp]Catch a error:");
            console.log(error);
        }
        //data = JSON.parse(data);
        if(data.code !== 0){
            return false;
        }
        //console.log(data);
	callback(null,data);
    })
	//console.log(`req is ${req}`);
}
nlp.seg = (text,callback) => {
    //分词返回口，返回结构:["我","爱","你"]
    let req;
    capi.request({
        Region: config.Region,
        Action: 'LexicalAnalysis',
        code : 2097152,
        text : text
    }, function(error, data) {
	//console.log(data);
        if(error){
            console.log("[tencent-nlp]Catch a error:");
            console.log(error);
        }
        //data = JSON.parse(data);
        if(data.code !== 0){
            return false;
        }
        let seg = [];
        let length = data.tokens.length;
        for(let i = 0;i < length; i++){
            seg[i] = data.tokens[i].word;
        }
        //console.log(`seg is ${seg}`);
        if(seg.length == 0){
            callback(null,false);
        }else{
            callback(null,seg);
        }        
    })
}

module.exports = nlp;
