# @webpart/server-session

用于开发阶段的本地 web 服务器的会话部分。

该插件给 `@webpart/server` 使用。

## 安装
``` bash
npm install --save-dev @webpart/server-session
```

## 示例
``` javascript
const session = require('@webpart/server-session');

//非必选。
let file = './output/session.json';

//非必选。
let server = {
    host: 'localhost',
    port: 3001,
};

session.start(app, file, server);


session.test();



```