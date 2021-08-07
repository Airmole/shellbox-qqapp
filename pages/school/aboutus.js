// pages/school/aboutus.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    width: '100%',
    height: '',
    version: '3.2.1',
    QGroupModal: false,
    showFreedomFunc: false,
    weappCodeImage: 'https://img01.sogoucdn.com/app/a/100520146/960d5c25b407197b2f44fdb438b962f8',
    coder: [{
      avatar: 'https://img03.sogoucdn.com/app/a/100520146/f297a18ca339f4431dc2d9b3cd84a7dd',
      nickName: 'Airmole',
      weibo: 'pages/profile/profile?objectUid=2423156830&nickname=Airmole'
    }, {
      avatar: 'https://img03.sogoucdn.com/app/a/100520146/83b8baba7efa7c7976b73404105522eb',
      nickName: '很奔放',
      weibo: ''
    }, {
      avatar: 'https://img03.sogoucdn.com/app/a/100520146/2517981aa0eaa853f3b967313f300f9f',
      nickName: '秃头程序媛',
      weibo: ''
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    that.setData({
      width: wx.getSystemInfoSync().windowWidth * 0.9 + 'px',
      height: wx.getSystemInfoSync().windowWidth * 0.9 * 0.5625 + 'px'
    })
    wx.pageScrollTo({
      scrollTop: 1600,
      duration: 4000,
    })

    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })

    setTimeout(function () {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300,
      })
    }, 4000);
  },
  copyID: function () {
    wx.setClipboardData({
      data: '1109608669'
    })
    wx.showToast({
      title: '已复制到粘贴版',
      icon: 'none',
      duration: 1000
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    return {
      title: '关于 - 【贝壳小盒子】 ',
      path: 'pages/school/aboutus',
    }
  },
  showAppCode: function () {
    var weappCode = this.data.weappCodeImage;
    wx.previewImage({
      current: weappCode, // 当前显示图片的http链接
      urls: [weappCode] // 需要预览的图片http链接列表
    })
  },
  goOtherApps: function (e) {
    var appid = e.currentTarget.dataset.appid;
    wx.navigateToMiniProgram({ appId: appid })
  },
  checkUpdate: function () {
    app.appUpdate('userclick');
  },
  showQQGroupCode: function () {
    this.setData({ QGroupModal: true })
  },
  hideQQGroupCode: function () {
    this.setData({ QGroupModal: false })
  },
  canBeFree: function (e) {
    const hasEdusysStorage = app.globalData.hasEdusysStorage
    if (!hasEdusysStorage) {
      return
    }
    
    if (this.data.showFreedomFunc) {
      this.setData({ showFreedomFunc: false })
      return
    }
    
    this.isFreedomer(app.globalData.edusysUserInfo.uid)
  },
  isFreedomer: function (uid = 0) {
    var _this = this
    wx.request({
      url: `${app.globalData.domain}/freedomer/${uid}`,
      timeout: app.globalData.requestTimeout,
      method: 'GET',
      success: function(res){
        try {
          if (res.data.code == 200 && res.data.message == 'success') {
            wx.navigateTo({ url: './fakeschool' })
          }
        } catch (error) {
          _this.setData({ showFreedomFunc: false })
        }
      }
    })
  }
})