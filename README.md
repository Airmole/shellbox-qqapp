# ShellBox

贝壳小盒子 QQ小程序(移植自微信小程序版，注释掉了QQ小程序不支持的组件和接口)

若QQ小程序版本滞后于微信小程序，可以去把微信小程序的代码包直接拿过来用。注释删除掉QQ小程序上不支持的部分代码就行了。具体见下文。

## 线上版本体验

[![wTSOvk9gnYzZjPC.png](https://i.loli.net/2019/10/14/wTSOvk9gnYzZjPC.png)](小程序体验码)

```
测试体验账号

学号：000000000

密码：test
```

## 微信小程序版

[https://github.com/Airmole/ShellBox](https://github.com/Airmole/ShellBox)


## 移植微信小程序要注意

大部分主题逻辑实现上与微信小程序可以直接使用，但是部分语法、小程序API、组件支持的差异要注意，需要注释或移除。目前已知的有以下几点：


- app.js（获取用户微信openID）


```
//getUserOpenId: function (callback) {
// 注释掉微信小程序的接口
//   var self = this
//   if (self.globalData.openid) {
//     callback(null, self.globalData.openid)
//   } else {
//     wx.login({
//       success: function(data) {
//         wx.request({
//           url: 'https://api.airmole.cn/code2id.php?',
//           data: {
//             code: data.code
//           },
//           success: function(res) {
//             console.log('拉取openid成功', res.data.openid)
//             self.globalData.openid = res.data.openid
//           },
//           fail: function(res) {
//             console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res)
//           }
//         })
//       },
//       fail: function(err) {
//         console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err)
//       }
//     })
//   }
//  },
```

-  app.json


>sitemapLocation 微信小程序的页面收录描述文件。去不去掉都行。嫌碍眼就去掉。

```
//  "sitemapLocation": "sitemap33.json"
```

- 入口首页必须支持分享

> QQ小程序的奇葩审核规定，入口首页不写支持分享的方法，审核不让你通过上线。最好支持分享的各个界面都适配下。把onShareAppMessage方法修改成如下：


```
onShareAppMessage: function(res) {
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    });
    //总之就是在分享的方法里面要有qq.showShareMenu这段代码。
}
```

- 课表相关页面goClassPlace方法

>小程序不支持map组件，不能导航


```
goClassPlace: function(ep) {
    //console.log(ep.target.dataset.place);
    //var placeArr = ["1教学楼", "2教学楼", "3教学楼", "4教学楼", "5教学楼", "6教学楼", "7教学楼", "8教学楼", "9教学楼", "10教学楼", "11教学楼", "12教学楼", "理工馆", "社科馆"];
    //var markerIdArr = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 5, 4];
    //var result = placeArr.indexOf(ep.target.dataset.place.slice(0, -3));
    // console.log(result);
    //wx.navigateTo({
    //  url: '/pages/schoolNav/schoolNav?markerId=' + markerIdArr[result],
    //})
    wx.showToast({
    icon: 'none',
    title: 'QQ小程序暂不支持导航',
    })
  },
```

- features/about.js页面的各种内容

> 这个不属于功能性代码问题，主要是把微信的东西直接一点都不改不合适。


- 去掉校园导航功能

>直接在功能列表去掉也好，保留入口图标但不开放进入也好。

-  pages/score/score.js

> canvas绘制的成绩单图底部的微信小程序码换成QQ小程序码。canvas绘制完成后发送到说说发布页面。

```
eventGetImage(event) {
    var that = this;
    console.log(event)
    wx.hideLoading()
    const {
      tempFilePath,
      errMsg
    } = event.detail
    if (errMsg === 'canvasdrawer:ok') {
      this.setData({
        shareImage: tempFilePath
      })
      wx.previewImage({
        urls: [tempFilePath],
      })
      that.eventSave();
      qq.openQzonePublish({
        text: '成绩单',
        media: [
          {
            type: 'photo',
            path: tempFilePath
          }
        ]
      })
    }
  },
```

- 去掉所有的客服相关按钮、图标、提示

>QQ小程序还不支持客服消息。像是about页面、error页面、feature页面的联系客服都去掉。



