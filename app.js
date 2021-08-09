//app.js
App({
  globalData: {
    domain: 'https://shellbox.airmole.cn/api',
    _amap_key: '66a87160f8db2a9a76431c954b4f52a5', // 高德导航API秘钥
    requestTimeout: 10000, // 网络请求最长时间10s
    openid: '',
    userInfo: {},
    edusysUserInfo: {},
    netsysUserInfo: '',
    elesysUserInfo: '',
    hasEdusysStorage: false
  },
  onLaunch: function () {
    let launchInfo = wx.getLaunchOptionsSync()

    this.globalData.domain = 'https://shellbox.airmole.cn/api'
    // this.globalData.domain = 'https://dev.shellbox.airmole.cn/api'
    // this.globalData.domain = 'http://shellbox.cn/api'

    this.getUserOpenId()
    this.appUpdate()
    this.checkHasEdusysStorage()
    this.getStorageEdusysUserInfo()
    this.getUserInfoFromStorage()
    this.getSystemStatusBarInfo()
  },
  checkHasEdusysStorage: function () {
    const edusysStorage = wx.getStorageSync('edusysUserInfo')
    var self = this
    try {
      if (edusysStorage.uid.length > 0) {
        self.globalData.hasEdusysStorage = true
        self.globalData.edusysUserInfo = self.autoLoginCookie(edusysStorage)
      } else {
        self.globalData.hasEdusysStorage = false
      }
    } catch (error) {
      self.globalData.hasEdusysStorage = false
    }
  },
  autoLoginCookie: function (edusysInfo) {
    var self = this
    const uid = edusysInfo.uid
    const pwd = edusysInfo.password
    const cookie = edusysInfo.cookie ? edusysInfo.cookie : ''
    const weuserInfo =  wx.getStorageSync('userInfo')
    wx.request({
      // url: `https://dev.shellbox.airmole.cn/api/edu/profile`,
      url: `${self.globalData.domain}/edu/profile`,
      data:{
        uid: uid,
        pwd: pwd,
        cookie: cookie,
        userFrom: 'qq',
        openid: self.globalData.openid,
        nickname: weuserInfo.nickName,
        avatar: weuserInfo.avatarUrl,
        gender: weuserInfo.gender,
        country: weuserInfo.country,
        province: weuserInfo.province,
        city: weuserInfo.city,
        language: weuserInfo.language
      },
      timeout: self.globalData.requestTimeout,
      method: 'POST',
      success: function(res){
        // console.log('eduSysProfile：', res.data)
        try {
          if (res.data.name.length > 1) {
            res.data.password = pwd
            wx.setStorage({ data: res.data, key: 'edusysUserInfo' })
            self.globalData.edusysUserInfo = res.data
          }
        } catch (error) {
          console.log('后台自动静默激活教务cookie失败', error)
        }
      },
      fail: function(error){
        console.log('后台自动静默激活教务cookie失败', error)
      }
    })
  },
  getUserInfoFromStorage: function () {
    var self = this;
    self.globalData.userInfo = wx.getStorageSync('userInfo');
  },
  getStorageEdusysUserInfo: function () {
    var self = this;
    self.globalData.edusysUserInfo = wx.getStorageSync('edusysUserInfo');
  },
  getSystemStatusBarInfo: function () {
    // 获取系统状态栏信息
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
  },
  getUserOpenId: function (callback) {
    var self = this
    var storageOpenid = wx.getStorageSync('openid')
    if (storageOpenid.openid) {
      self.globalData.openid = storageOpenid.openid
      return
    }
    if (self.globalData.openid) {
      callback(null, self.globalData.openid)
    } else {
      wx.login({
        success: function (data) {
          wx.request({
            url: self.globalData.domain + `/qq/openid?jscode=${data.code}`,
            success: function (res) {
              console.log('拉取openid成功', res.data)
              wx.setStorage({ data: res.data, key: 'openid' })
              self.globalData.openid = res.data.openid
            },
            fail: function (res) {
              console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res)
            }
          })
        },
        fail: function (err) {
          console.log('login 接口调用失败，将无法正常使用开放接口等服务', err)
        }
      })
    }
  },
  appUpdate: function (where) {
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      // console.log(res)
      if (where == 'userclick') {
        wx.showToast({
          title: '已是最新版',
          icon: 'none'
        })
      }
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
  }
})