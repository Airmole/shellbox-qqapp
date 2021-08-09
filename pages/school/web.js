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
        background: 'https://cdn.cardcat.cn/images/2638a3f19ebd21e43a45bf996e3a6a13.png',
        url: ['http://tj.ustb.edu.cn']
      },
      {
        title: '教务系统',
        background: 'https://cdn.cardcat.cn/images/4eefaeaa3e75c40afab3d42073cd91a3.png',
        url: ['http://61.181.145.1:89/jsxsd', 'http://117.131.241.67:89/jsxsd']
      }],
      [{
        title: '财务(学费查询)',
        background: 'https://cdn.cardcat.cn/images/141add2df181ab58a0dcb9cf4acf4dbd.png',
        url: ['http://221.238.213.131:8809']
      },
      {
        title: '网上大厅',
        background: 'https://cdn.cardcat.cn/images/95bbfdc48594976c7a275155993dd2aa.png',
        url: ['http://ehall.bkty.top']
      }]
    ],
    lan: [
      [{
        title: '学院官网',
        background: 'https://cdn.cardcat.cn/images/2638a3f19ebd21e43a45bf996e3a6a13.png',
        url: ['http://10.1.254.70']
      },
      {
        title: '冰炫导航',
        background: 'https://cdn.cardcat.cn/images/e684af2e6ed97685dce7fec4109aec65.png',
        url: ['http://10.1.254.10']
      }],
      [{
        title: '冰炫音乐',
        background: 'https://cdn.cardcat.cn/images/ffd38bbd24ff49f2937e0321fdbf7e4e.png',
        url: ['http://10.1.254.9/music']
      },
      {
        title: '冰炫下载',
        background: 'https://cdn.cardcat.cn/images/233c6a994bbfd351aa991d636fe5bfea.png',
        url: ['http://10.1.254.9']
      }],
      [{
        title: '入党学习',
        background: 'https://cdn.cardcat.cn/images/813ac13c4783e8dfc9d039d23d0213ee.png',
        url: ['http://10.1.254.27']
      }, {
        title: '校园网计费登录',
        background: 'https://cdn.cardcat.cn/images/2087165cd4c802f222569e8f6573ebd8.png',
        url: ['http://172.16.1.3']
      }],
      [{
        title: '冰炫(贝壳)云盘',
        background: 'https://cdn.cardcat.cn/images/98ba786a4287a8feb9619ff38154442b.png',
        url: ['http://10.1.254.11']
      },
      {
        title: '网费查询',
        background: 'https://cdn.cardcat.cn/images/2824e70752a2a82f8ac64d0ac56a936b.png',
        url: ['http://10.1.254.112/Self']
      }],
      [{
        title: '教务系统',
        background: 'https://cdn.cardcat.cn/images/4eefaeaa3e75c40afab3d42073cd91a3.png',
        url: ['http://10.1.254.87/jsxsd']
      },
      {
        title: '图书检索',
        background: 'https://cdn.cardcat.cn/images/f6c9f4f733e8c53069fb7e032230e303.png',
        url: ['http://10.1.254.101:82']
      }],
      [{
        title: '图书馆数字资源',
        background: 'https://cdn.cardcat.cn/images/2f8241615bbde6271aabdf84212d9da8.png',
        url: ['http://10.1.254.107']
      },
      {
        title: '图书馆',
        background: 'https://cdn.cardcat.cn/images/8c166637c06f3f9e26fc6d5412c95ca7.png',
        url: ['http://10.1.254.101']
      }],
      [{
        title: 'Git.USTB',
        background: 'https://cdn.cardcat.cn/images/f2e44512457703d2abe97d6ec26eeaa2.png',
        url: ['http://10.1.254.6']
      },
      {
        title: '财务(学费查询)',
        background: 'https://cdn.cardcat.cn/images/141add2df181ab58a0dcb9cf4acf4dbd.png',
        url: ['http://10.2.254.80:8809']
      }],
      [{
        title: '财管系统',
        background: 'https://cdn.cardcat.cn/images/55904fddc5ff96f3e99070fed452dc8d.png',
        url: ['http://10.2.254.80']
      },
      {
        title: '资产与实验室管理',
        background: 'https://cdn.cardcat.cn/images/eb9a9a4a7aca5eb072d13a5afc3eced2.png',
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