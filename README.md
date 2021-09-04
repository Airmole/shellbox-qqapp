# ShellBox

贝壳小盒子 QQ小程序(移植自微信小程序版，注释删除QQ小程序不支持的组件和接口)

若QQ小程序版本滞后于微信小程序，可以去把微信小程序的代码包直接拿过来用。注释删除掉QQ小程序上不支持的部分代码就行了。具体见下文。

## 线上版本体验

[![wTSOvk9gnYzZjPC.png](https://img03.sogoucdn.com/app/a/100520146/e945b3fabf51c61e459f8912ab0fc2b6)](小程序码)


## 页面路径说明

```
"pages": [
    "pages/index/index",             // 首页
    "pages/index/login",             // 登录
    "pages/index/feature",           // 功能列表
    "pages/books/search",            // 图书检索
    "pages/books/index",             // 图书检索结果列表
    "pages/books/detail",            // 图书信息详情 
    "pages/books/shelf",             // 图书书架
    "pages/books/bind",              // 图书OPAC借阅系统账号绑定
    "pages/books/hot/index",         // 热门图书排行
    "pages/books/overdue/index",     // 图书超期欠款
    "pages/books/recommend/index",   // 图书荐购（隐藏，待完成）
    "pages/books/my",                // 我的图书馆
    "pages/books/portrait",          // 毕业生画像(已下线)
    "pages/course/my",               // 我的个人课表
    "pages/course/search",           // 班级、教师课表搜索
    "pages/course/content",          // 班级教师课表详情
    "pages/course/stulist/index",    // 教师课堂学生花名册列表
    "pages/course/stulist/content",  // 教师课堂学生花名册详情
    "pages/elesys/bind",             // 电费查询寝室绑定(入口隐藏，开学可用后上线)
    "pages/elesys/index",            // 电费信息展示(入口隐藏，开学可用后上线)
    "pages/netsys/bind",             // 校园网账号绑定
    "pages/netsys/index",            // 网费查询结果界面
    "pages/netsys/list",             // 网费查询明细
    "pages/traffic/navi",             // 校园导航
    "pages/traffic/bus",              // 校园出行
    "pages/score/score",             // 成绩查询
    "pages/school/calendar",         // 校历
    "pages/school/tel",              // 校园通讯录
    "pages/school/cert",             // 考证助手
    "pages/school/web",              // 校园站点
    "pages/school/aboutus",          // 关于
    "pages/school/xiaoai"            // 小爱课程表
    "pages/school/lost/edit",        // 失物招领发表编辑
    "pages/school/lost/index",       // 失物招领列表页面
    "pages/school/lost/detail"       // 失物招领内容展示
    "pages/school/run/index"         // 运动计步排行榜
    "pages/school/finance/bind"       // 缴费平台账号绑定
    "pages/school/finance/index"      // 缴费查询界面
  ],
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

- 客服消息相关

>客服消息直接改为+Q群方式


- 跳转到别的小程序

>QQ小程序生态支持和数量远不及微信小程序，四六级查询、车来了实时公交，QQ小程序都应该去掉

- 页面滚动

>QQ小程序页面滚动只支持设置滚动像素数，因此需要获取QML节点位置像素数

- 小程序版本判断

>QQ小程序API接口不支持判断获取小程序版本号和正式、测试版本类型

