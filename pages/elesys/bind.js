// pages/elesys/bind.js
// 获取应用实例
var app = getApp()
var domain = app.globalData.domain
Page({
  data: {
    array: ["选择宿舍楼斋", "3斋", "4斋", "5斋", "6斋", "7斋", "9斋", "10斋", "11斋", "12斋", "13斋", "14斋", "15斋", "16斋", "18斋", "19斋", "20斋", "21斋", "22斋", "25斋", "26斋", "27斋", "28斋", "29斋", "30斋", "31斋", "32斋", "33斋", "34斋", "35斋", "36斋"],
    zhaiArray: ["0", "3", "4", "5", "6", "7", "9", "10", "11", "12", "13", "14", "15", "16", "18", "19", "20", "21", "22", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"],
    index: 0,
    remind: '加载中',
    building_focus: false,
    room_focus: false,
    room: '',
    bgimg: 'https://img01.sogoucdn.com/app/a/100520146/f5ea5875d416b0431687655bf3309e6d',
    angle: 0
  },
  onLoad: function (){
  },
  onReady: function(){
    var _this = this;
    try {
      const elesysUserInfo = wx.getStorageSync('elesysUserInfo')
      app.globalData.elesysUserInfo = elesysUserInfo
      if(elesysUserInfo.building.length > 0) {
        wx.redirectTo({ url: `./index?building=${elesysUserInfo.building}&room=${elesysUserInfo.room}` })
      }
    } catch (error) {
      console.log('未绑定过寝室信息')
    }

    setTimeout(function(){ _this.setData({ remind: '' }) }, 1000);
    wx.onAccelerometerChange(function(res) {
      var angle = -(res.x*30).toFixed(1);
      if(angle > 14){ angle = 14 }
      else if(angle<-14) { angle = -14 }
      if(_this.data.angle !== angle){
        _this.setData({ angle: angle })
      }
    });
  },
  bind: function() {
    if (!this.vaildForm()) {
      return
    }
    var _this = this;
    _this.getData()
  },
  getData: function () {
    var _this = this
    wx.showLoading({ title: 'loading...' })
    var building = this.data.zhaiArray[this.data.index]
    var room = this.data.room
    wx.request({
      url: `${domain}/elesys/`,
      data: { building: building, room: room },
      timeout: app.globalData.requestTimeout,
      method: 'GET',
      success: function(res){
        wx.hideLoading()
        try {
          if (res.data.balance.length > 0) {
            const elesysUserInfo = {building: building, room: room }
            app.globalData.elesysUserInfo = elesysUserInfo
            wx.setStorage({ data: elesysUserInfo, key: 'elesysUserInfo' })
            wx.redirectTo({ url: `./index?building=${building}&room=${room}` })
          }
        } catch (error) {
          wx.showToast({ title: res.data.message, icon: 'none' })
        }
      }
    })
  },
  vaildForm: function () {
    var building = this.data.zhaiArray[this.data.index]
    var room = this.data.room
    if (building == 0) {
      wx.showToast({
        title: '宿舍楼斋有误', icon: 'none' })
      return
    }

    var pattern = new RegExp('[1-4][0-4][0-9]', 'g'); //判断用户输入的宿舍号是否大致合适
    var matchReg = pattern.exec(room);
    if (!matchReg) {
      wx.showToast({ title: '寝室号输入有误', icon: 'none' })
      return
    }
    return true
  },
  inputBlur: function(e){
    if(e.target.id == 'building'){
      this.setData({
        'building_focus': false
      });
    } else if(e.target.id == 'room'){
      this.setData({
        'room_focus': false
      });
    }
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  inputFocus: function (e) {
    var id = e.target.id,
      newData = {};
    newData[id + '_focus'] = true;
    this.setData(newData);
  },
  roomInput: function (e) {
    this.setData({
      'room': e.detail.value
    });
    if (e.detail.value.length >= 3) {
      wx.hideKeyboard();
    }
  },
});