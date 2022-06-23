//logs.js
Page({
  data: {
    actil: false,
    short: '密码',
    message: true,
    captchaImg: '',
    data: null,
    phone: '',
    password: '',
    zuc: false
  },
  onLoad: function () {

  },
  iszhuce() {
    this.setData({
      zuc: !this.data.zuc
    })
  },
  login() {
    wx.request({
      url: 'http://localhost:8081/Recruit/api/user/login',
      method: 'POST',
      data: {
        phone: this.data.phone,
        password: this.data.password
      },
      success: (res => {
        let info = res.data
        console.log(info)
        if (info.status == 0) {
          if (info.data == undefined) {
            this.setData({
              data: '账号或密码错误'
            })
          } else {
            this.setData({
              data: info.data
            })
            getApp().globalData.user = this.data.data
            getApp().globalData.logintf = false
            this.collection()
            console.log(res.data)
          }
          console.log(getApp().globalData.user)
          wx.switchTab({
            url: '../user/user'
          })
        } else {
          console.log(info.msg)
        }
      })
    })
  },
  // 获取收藏
  collection() {
    wx.request({
      url: 'http://localhost:8081/Recruit/api/get/collection',
      method: 'POST',
      data: {
        phone: this.data.phone,
        password: this.data.password
      },
      success: (res) => {
        let info = res.data
        if (info.status == 0) {
          getApp().globalData.Likes = info.data
          console.log(getApp().globalData.Likes)
        }
        console.log(res.data)
      }
    })

  },
  // 注册
  add() {
    wx.request({
      url: 'http://localhost:8081/Recruit/api/user/add',
      method: 'POST',
      data: {
        phone: this.data.phone,
        password: this.data.password
      },
      success: (res) => {
        let info = res.data
        // console.log(info)s
        if (info.status == 0) {
          this.setData({
            data: info.data
          })
          getApp().globalData.user = this.data.data
          getApp().globalData.logintf = false
          this.collection()

          console.log(getApp().globalData.user)
          wx.switchTab({
            url: '../user/user'
          })
        } else {
          console.log(info)
        }
      }
    })
  }
})