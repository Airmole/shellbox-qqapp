// pages/school/fakeschool.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {
      swiper: [
        'https://cdn.cardcat.cn/images/3cfefeb2ff670e87d0cf8d2518ee2585.png',
        'https://cdn.cardcat.cn/images/7c14d6bc3619d76225e46fc383b952bd.png'
      ],
      features: 'https://cdn.cardcat.cn/images/cc33c507d9d850b9a1c40a03a7e0cdde.png',
      image1: 'https://cdn.cardcat.cn/images/d8dbd87f6c21f80e0be38d5f8a1b6a5e.png',
      image2: 'https://cdn.cardcat.cn/images/6884ce9f7ad9cdeac7c5eeafba92ccfc.jpeg',
      tabbar: 'https://cdn.cardcat.cn/images/9b2e55a4556863925f04d2986a386e18.png'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.inital()
  },
  inital: function () {
    this.getData()
  },
  getData: function () {
    var _this = this
    wx.request({
      url: `${app.globalData.domain}/freedomer`,
      timeout: app.globalData.requestTimeout,
      method: 'GET',
      success: function(res){
        _this.setData({
          data: res.data
        })
      }
    })
  },
  scanIn: function () {
    this.fakeInOut('inschool')
  },
  scanOut: function () {
    this.fakeInOut('outschool')
  },

  fakeInOut:function(e) {
    const id = e
    if(id == 'inschool' || id == 'outschool'){
      this.scanTodaySchool(id);
      return
    }
  },
  scanTodaySchool: function(type){
    wx.scanCode({
      success: (res) => {
        if (res.errMsg !== 'scanCode:ok') {
          wx.showToast({ title: res.errMsg, icon: 'none'})
          return;
        }
        this.setData({ showFreedomFunc: false })

        wx.navigateTo({ url: `./todayschool?type=${type}` })
      }
    })
  },
  fakeToast: function (){
    wx.showLoading({
      title: '加载中...',
    })
    setTimeout(function() {
      wx.hideLoading()
      wx.showToast({
        title: '网络状态不佳',
        icon: 'none'
      })
    }, 3000)
  }
})