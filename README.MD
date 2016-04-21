http://www.wenzhixin.net.cn/2014/03/20/cordova_my_plugin


plugin.xml
有几个关键的字段需要解释下：

id: 插件的标识，即发布到 plugins.cordova.io 的 ID
name：插件的名称
description：描述信息
js-module：对应我们的 javascript 文件，src 属性指向 www/ExtraInfo.js
platform：支持的平台，这里仅仅用到了 android


01、 安装自定义插件
cordova plugin add ExtraInfo #目录名称，也可以是 git 的地址
