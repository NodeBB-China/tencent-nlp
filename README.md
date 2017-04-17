# tencent-nlp
腾讯文智api模块
> 目前采用回调模式，会在近期加入返回值模式。
# 安装
```
    npm i tencent-nlp --save
```
# 使用
```
    const tencent_nlp = require("./app.js");
    tencent_nlp.configure({
        "SecretId":"",
        "SecretKey":"",
        "Region":""
    });
    tencent_nlp.cut("我喜欢你啊，真的十分喜欢你啊！",function(err,data){
    if(err){
        
    }
        console.log(data);
    });
    encent_nlp.seg("我喜欢你啊，真的十分喜欢你啊！",function(err,data){
    if(err){
    }
        console.log(data);

    });
```
