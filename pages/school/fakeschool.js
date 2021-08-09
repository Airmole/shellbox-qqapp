// pages/school/fakeschool.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {
      swiper: [
        'https://i.loli.net/2021/08/08/OXpCYdShjFJD8T1.png',
        'https://i.loli.net/2021/08/08/GamBJjIhu3DySZV.png'
      ],
      features: 'https://i.loli.net/2021/08/08/OasSKyY25QcATCL.png',
      image1: 'https://i.loli.net/2021/08/08/mGwya2F7rBVcRvS.png',
      image2: 'https://i.loli.net/2021/08/08/uZ9nAi5SgtdGqxD.jpg',
      tabbar: 'https://i.loli.net/2021/08/08/yQSrLHA3YNiJgZl.png'
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