// pages/school/web.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    wan: [
      [{
        title: '学院官网',
        background: 'https://img02.sogoucdn.com/app/a/100520146/81f3fb9f41910f8cddf57d062f6080f3',
        url: ['http://tj.ustb.edu.cn']
      },
      {
        title: '教务系统',
        background: 'https://img01.sogoucdn.com/app/a/100520146/c09d27f131e412a8c011ea3caba83f5f',
        url: ['http://61.181.145.1:89/jsxsd', 'http://117.131.241.67:89/jsxsd']
      }],
      [{
        title: '财务(学费查询)',
        background: 'https://img01.sogoucdn.com/app/a/100520146/8c5a05299eabb40b6868a1e387c8e5c9',
        url: ['http://221.238.213.131:8809']
      },
      {
        title: '网上大厅',
        background: 'https://img01.sogoucdn.com/app/a/100520146/0313cd801c7d0742aee4739aba46b646',
        url: ['http://ehall.bkty.top']
      }]
    ],
    lan: [
      [{
        title: '学院官网',
        background: 'https://img02.sogoucdn.com/app/a/100520146/81f3fb9f41910f8cddf57d062f6080f3',
        url: ['http://10.1.254.70']
      },
      {
        title: '冰炫导航',
        background: 'https://img04.sogoucdn.com/app/a/100520146/fa2f1c4a940a9db62d2cd2ea0091c043',
        url: ['http://10.1.254.10']
      }],
      [{
        title: '冰炫音乐',
        background: 'https://img01.sogoucdn.com/app/a/100520146/788ad7955c83d9171539e627d2e1dda3',
        url: ['http://10.1.254.9/music']
      },
      {
        title: '冰炫下载',
        background: 'https://img01.sogoucdn.com/app/a/100520146/814aa1ae5e5c6ea462ae302e3f9825ff',
        url: ['http://10.1.254.9']
      }],
      [{
        title: '入党学习',
        background: 'https://img02.sogoucdn.com/app/a/100520146/dff485ca1bfec12d32b66b04edb3e836',
        url: ['http://10.1.254.27']
      }, {
        title: '校园网计费登录',
        background: 'https://img03.sogoucdn.com/app/a/100520146/3c19417433cf0a1fc1bab3ac51db5ec3',
        url: ['http://172.16.1.3']
      }],
      [{
        title: '冰炫(贝壳)云盘',
        background: 'https://img04.sogoucdn.com/app/a/100520146/5d7dd9f9b67f90c099c31ad62099c9d7',
        url: ['http://10.1.254.11']
      },
      {
        title: '网费查询',
        background: 'https://img01.sogoucdn.com/app/a/100520146/2924f6beacbee1b83fc4c6a8518b0b3a',
        url: ['http://10.1.254.112/Self']
      }],
      [{
        title: '教务系统',
        background: 'https://img01.sogoucdn.com/app/a/100520146/c09d27f131e412a8c011ea3caba83f5f',
        url: ['http://10.1.254.87/jsxsd']
      },
      {
        title: '图书检索',
        background: 'https://img02.sogoucdn.com/app/a/100520146/554d344b8054e66b0ec7ba227fc8940c',
        url: ['http://10.1.254.101:82']
      }],
      [{
        title: '图书馆数字资源',
        background: 'https://img01.sogoucdn.com/app/a/100520146/17e52e88b737d000a55826a7bf1f1588',
        url: ['http://10.1.254.107']
      },
      {
        title: '图书馆',
        background: 'https://img01.sogoucdn.com/app/a/100520146/d41abb2f1c57c37c2e49d1401c0d75c1',
        url: ['http://10.1.254.101']
      }],
      [{
        title: 'Git.USTB',
        background: 'https://img01.sogoucdn.com/app/a/100520146/f6c4e6a731891f6f50df1dd0cebf78ad',
        url: ['http://10.1.254.6']
      },
      {
        title: '财务(学费查询)',
        background: 'https://img01.sogoucdn.com/app/a/100520146/8c5a05299eabb40b6868a1e387c8e5c9',
        url: ['http://10.2.254.80:8809']
      }],
      [{
        title: '财管系统',
        background: 'https://img01.sogoucdn.com/app/a/100520146/8c5a05299eabb40b6868a1e387c8e5c9',
        url: ['http://10.2.254.80']
      },
      {
        title: '资产与实验室管理',
        background: 'https://img02.sogoucdn.com/app/a/100520146/dda1f493f68c5b649c870ae95f2d44dd',
        url: ['http://10.1.254.170']
      }]
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.inital();
  },
  inital: function () {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
  copyUrl(e) {
    const url = e.currentTarget.dataset.url

    wx.setClipboardData({
      data: url,
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
            wx.showToast({
              title: '复制成功,粘贴到浏览器访问',
              icon: 'none'
            })
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    setTimeout(function () {
      that.setData({
        isLoading: false
      });
    }, 400);
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
      title: '“贝壳小盒子” - 校园站点',
      path: 'pages/school/web'
    }
  }
})