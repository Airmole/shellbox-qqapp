
App({
  globalData: {
    apiURL: "https://api.airmole.cn/ShellBox",
    doubanApi: "https://airmole.cn/doubanapi/v2",
    nickName: '',
    hasLogin: false,
    openid: null,
    building: '',
    roomNo: '',
    uid: '',
    pwd: '',
    newpwd: '',
    netPassword: '',
  },
  util: require('./utils/util'),
  onLaunch: function () {
    // console.log('App Launch')
    var uid = wx.getStorageSync('uid');
    var pwd = wx.getStorageSync('newpwd');
    var newpwd = wx.getStorageSync('newpwd');

    this.appUpdate();
  },
  onShow: function () {
    // console.log('App Show')
  },
  onHide: function () {
    // console.log('App Hide')
  },
  // lazy loading openid
  appUpdate: function () {
    const updateManager = wx.getUpdateManager()

    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log(res.hasUpdate)
    })

    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '小盒子求更新',
        content: "小盒子有版本功能更新啦，建议各位小可爱重启应用体验新版本(●'◡'●)",
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })

    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
      wx.showToast({
        title: '嘤嘤嘤更新失败了。可能网络不好',
        duration: 1000
      });
    })

  },
  notSupport: function () {
    wx.showToast({
      icon: 'none',
      title: '嘤嘤嘤,QQ小程序暂不支持'
    });
    wx.navigateTo({
      url: '/pages/features/about',
    })
  }
})