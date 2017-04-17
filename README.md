# tencent-nlp
腾讯文智api模块
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
    let nlp = tencent_nlp.cut("我喜欢你啊，真的十分喜欢你啊！");
    let seg = tencent_nlp.seg("我喜欢你啊，真的十分喜欢你啊！");
    console.log(nlp);
    console.log(seg);
```
