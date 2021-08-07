// pages/school/fakeschool.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {
      swiper: [
        'https://img04.sogoucdn.com/app/a/100520146/fe73d089528282c1e1c71baf883cccfb?p=1',
        'https://img04.sogoucdn.com/app/a/100520146/fac75b7c1e02f34419e8df3a6c36c165?p=1'
      ],
      features: 'https://img03.sogoucdn.com/app/a/100520146/1a6177986913ce30ca13a14e14343379?p=1',
      image1: 'https://img01.sogoucdn.com/app/a/100520146/3094e341e0ae57b9231866a05117cf0f?p=1',
      image2: 'https://s3.bmp.ovh/imgs/2021/08/7ad9cdeac7c5eeaf.jpeg?p=1',
      tabbar: 'https://img01.sogoucdn.com/app/a/100520146/7eacd4c4353648152c1517c325ba06de?p=1'
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