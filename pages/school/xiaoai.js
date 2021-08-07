// pages/school/xiaoai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading:true,
    guideImages:[
      'https://img02.sogoucdn.com/app/a/100520146/56e707d84210b570c9c85284a23cc2e9',
      'https://img01.sogoucdn.com/app/a/100520146/7da60cd40ccc667397e354bad920a4d9',
      'https://img01.sogoucdn.com/app/a/100520146/8fea63662eb74fd47b23944cf7e6e403',
      'https://img04.sogoucdn.com/app/a/100520146/c11497307452e5cf745a95d5aa8a8569',
      'https://img04.sogoucdn.com/app/a/100520146/cbab30ebb9aedc6c5e4f2d9c21bc159b',
      'https://img04.sogoucdn.com/app/a/100520146/1af3b62758094f013451ea44a8b58c06',
      'https://img04.sogoucdn.com/app/a/100520146/5459cdd343eea60f66377d3669be326b',
      'https://img02.sogoucdn.com/app/a/100520146/e0841c1a7fc45d63b2ec45bd661fc4e3',
      'https://img03.sogoucdn.com/app/a/100520146/e0841c1a7fc45d63b2ec45bd661fc4e3',
      'https://img01.sogoucdn.com/app/a/100520146/f77d1f179846521a726848f72dfc43b2'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },

  fullScreenPreview(){
    const allImages = this.data.guideImages
    wx.showToast({
      title: '左右滑动切换上/下一步',
      icon:'none'
    })
    wx.previewImage({
      urls: allImages,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    setTimeout(function() {
      that.setData({
        isLoading: false
      });
    }, 800);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '“贝壳小盒子” - 小爱课程表使用指南',
      path: 'pages/school/xiaoai',
      imageUrl:'https://upload-images.jianshu.io/upload_images/4697920-54d96e5c39485080.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'
    }
  }
})