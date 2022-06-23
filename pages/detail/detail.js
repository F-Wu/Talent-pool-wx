// pages/detail/detail.js
Page({
  data: {
    informationID: '',
    contact: '',
    information: null, //个人信息·
    education: null, //教育
    expect: null, //期望
    project: null, //项目，
    num: false,
    houde: true,
    status:null,
    work_experience: null, //工作经历
    videoUrl: 'http://1252463788.vod2.myqcloud.com/95576ef5vodtransgzp1252463788/e1ab85305285890781763144364/v.f10.mp4'
  },

  onLoad: function (options) {
    if (options.houde != undefined) {
     this.setData({
      houde:options.houde
     })
    } else {
      this.setData({
        houde:true
       })
    }
    // console.log(e.houde)
    this.setData({
      informationID: options.id,
      status:getApp().globalData.status
    })
    // 页面初始化 options为页面跳转所带来的参数对象
    wx.request({
      url: 'http://localhost:8081/Recruit/api/details',
      data: {
        id: options.id
      },
      method: 'GET',
      success: (res) => {
        let info = res.data
        this.setData({
          information: info.information,
          education: info.education,
          expect: info.expect,
          project: info.project,
          work_experience: info.work_experience,
          contact: info.information[0].contact
        })
        console.log(info.information[0].contact)
      }
    });

  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  // 收藏 
  collection() {
    if(getApp().globalData.user.phone==''){
      setTimeout(
      wx.switchTab({
        url:'../user/user'
      }),20000)
  }else{
    wx.request({
      url: 'http://localhost:8081/Recruit/api/collection',
      method: 'GET',
      data: {
        id: this.data.informationID,
        phone:getApp().globalData.user[0].phone,
        password:getApp().globalData.user[0].password
      },
      success: (res) => {
        wx.showToast({
          title: this.data.contact,
          duration: 5000
        });
        this.setData({
          num: true
        })
        getApp().globalData.Likes.push(res.data.likes.pop())
        console.log(getApp().globalData.Likes)
      }
    })
  }
  },
  // 点击查看大图
  clickImg(e) {
    console.log(e.currentTarget.dataset.img)
    wx.previewImage({
      urls: [e.currentTarget.dataset.img],
      current: '',
      success: function (res) {},
      fail: function (res) {},
      complete: function (res) {},
    })
  },

})