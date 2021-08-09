// pages/school/xiaoai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading:true,
    guideImages:[
      'https://i.loli.net/2021/08/08/gXxOEnia1rUW2DB.png',
      'https://i.loli.net/2021/08/08/uyzMNtKke6QglJa.png',
      'https://i.loli.net/2021/08/08/tTLlOgvwo3rWAqs.png',
      'https://i.loli.net/2021/08/08/Q2TzPrIZvyD8dMW.png',
      'https://i.loli.net/2021/08/08/GTxO3n1sriJ2Khu.png',
      'https://i.loli.net/2021/08/08/9vb7IH5N2QPoDOs.png',
      'https://i.loli.net/2021/08/08/gSv2LD59YylurIa.png',
      'https://i.loli.net/2021/08/08/O4Xs3qZBC6HGwlv.png',
      'https://i.loli.net/2021/08/08/sXNcURIWQlDjJ68.png',
      'https://i.loli.net/2021/08/08/8nNIZhABgaoQuW5.png'
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
      imageUrl:'https://i.loli.net/2021/08/09/tpcyhIXmFGY9MWn.png'
    }
  }
})