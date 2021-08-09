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
        background: 'https://i.loli.net/2021/08/08/B97bwVUQ5fl1XuC.png',
        url: ['http://tj.ustb.edu.cn']
      },
      {
        title: '教务系统',
        background: 'https://i.loli.net/2021/08/08/824b6HkimzQeOgr.png',
        url: ['http://61.181.145.1:89/jsxsd', 'http://117.131.241.67:89/jsxsd']
      }],
      [{
        title: '财务(学费查询)',
        background: 'https://i.loli.net/2021/08/08/lwkgr78ZfqpDtud.png',
        url: ['http://221.238.213.131:8809']
      },
      {
        title: '网上大厅',
        background: 'https://i.loli.net/2021/08/08/142PYxOn6SpJ9ha.png',
        url: ['http://ehall.bkty.top']
      }]
    ],
    lan: [
      [{
        title: '学院官网',
        background: 'https://i.loli.net/2021/08/08/B97bwVUQ5fl1XuC.png',
        url: ['http://10.1.254.70']
      },
      {
        title: '冰炫导航',
        background: 'https://i.loli.net/2021/08/08/kyUZY2HPlK5NmdD.png',
        url: ['http://10.1.254.10']
      }],
      [{
        title: '冰炫音乐',
        background: 'https://i.loli.net/2021/08/08/KbVgjSxGkIZyHlA.png',
        url: ['http://10.1.254.9/music']
      },
      {
        title: '冰炫下载',
        background: 'https://i.loli.net/2021/08/08/jlREIWvmd6UgSMx.png',
        url: ['http://10.1.254.9']
      }],
      [{
        title: '入党学习',
        background: 'https://i.loli.net/2021/08/08/6Dnk7ahdX54iVKT.png',
        url: ['http://10.1.254.27']
      }, {
        title: '校园网计费登录',
        background: 'https://i.loli.net/2021/08/08/PkGwZhLvUaYjtp1.png',
        url: ['http://172.16.1.3']
      }],
      [{
        title: '冰炫(贝壳)云盘',
        background: 'https://i.loli.net/2021/08/08/NtV3pBxTDCYZ2iH.png',
        url: ['http://10.1.254.11']
      },
      {
        title: '网费查询',
        background: 'https://i.loli.net/2021/08/08/2kr9BwGMPXjNVQc.png',
        url: ['http://10.1.254.112/Self']
      }],
      [{
        title: '教务系统',
        background: 'https://i.loli.net/2021/08/08/824b6HkimzQeOgr.png',
        url: ['http://10.1.254.87/jsxsd']
      },
      {
        title: '图书检索',
        background: 'https://i.loli.net/2021/08/08/AvRzIS321M7mBdk.png',
        url: ['http://10.1.254.101:82']
      }],
      [{
        title: '图书馆数字资源',
        background: 'https://i.loli.net/2021/08/08/9cX7urPHjyENSDA.png',
        url: ['http://10.1.254.107']
      },
      {
        title: '图书馆',
        background: 'https://i.loli.net/2021/08/08/XMV6F5WUDQp4Atg.png',
        url: ['http://10.1.254.101']
      }],
      [{
        title: 'Git.USTB',
        background: 'https://i.loli.net/2021/08/08/nPg6LCIdhHjWRwA.png',
        url: ['http://10.1.254.6']
      },
      {
        title: '财务(学费查询)',
        background: 'https://i.loli.net/2021/08/08/lwkgr78ZfqpDtud.png',
        url: ['http://10.2.254.80:8809']
      }],
      [{
        title: '财管系统',
        background: 'https://i.loli.net/2021/08/08/aVuJObtKIPTE34Z.png',
        url: ['http://10.2.254.80']
      },
      {
        title: '资产与实验室管理',
        background: 'https://i.loli.net/2021/08/08/4GWpCmtqbvQhVJi.png',
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