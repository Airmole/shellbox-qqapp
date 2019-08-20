var app = getApp();
Page({
  data: {
    ErrorTips: "好像出了点小问题"
  },
  onLoad: function(eri) {
    console.log(eri)
    var that = this;
    if (eri.ErrorTips) {
      that.setData({
        ErrorTips: eri.ErrorTips,
      })
    }

  },
  goBack: function() {
    wx.navigateBack({
      delta: 2
    })
  },
  notSupport:function(){
    console.log("ddd");
    app.notSupport();
  }
})