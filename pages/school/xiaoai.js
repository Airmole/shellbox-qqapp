// pages/school/xiaoai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading:true,
    guideImages:[
      'https://cdn.cardcat.cn/images/c2b5b908c9a5e0f0b4ad575badf820f5.png',
      'https://cdn.cardcat.cn/images/a0358d8c9dea8650194a9dd7cd9ec5c3.png',
      'https://cdn.cardcat.cn/images/b38bd954da75b3b2e94c63f91ab435a9.png',
      'https://cdn.cardcat.cn/images/6aabce002eee794f8ff704badc0c3907.png',
      'https://cdn.cardcat.cn/images/162458ebb8c0dba651539198585a7586.png',
      'https://cdn.cardcat.cn/images/fd67e1ea1857296192cbf9a6223e2e6e.png',
      'https://cdn.cardcat.cn/images/885b5227179c2f941ff1709b36c34af6.png',
      'https://cdn.cardcat.cn/images/52095553b8ff5b95aaa923c3d8451edd.png',
      'https://cdn.cardcat.cn/images/f855b36e06509973e96ae34dc7acb3d1.png',
      'https://cdn.cardcat.cn/images/8cc9ec412f5420340f4661de14efb93d.png'
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
      imageUrl:'https://cdn.cardcat.cn/images/81371fe9bab7d05909d4f198d696b799.png'
    }
  }
})