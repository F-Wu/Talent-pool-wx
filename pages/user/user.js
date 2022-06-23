//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎',
    userInfo: true,
    hasUserInfo: false,
    ejects:false,
    userData:null,

    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    // canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  //事件处理函数
  bindViewTap() {
 wx.showModal({
   ctitle: "温馨提示", // 提示的标题
   content:this.data.userInfo.nickName+"确定要退出吗？", // 提示的内容
   showCancel: true, // 是否显示取消按钮，默认true
   cancelText: "取消", // 取消按钮的文字，最多4个字符
   cancelColor: "#000000", // 取消按钮的文字颜色，必须是16进制格式的颜色字符串
   confirmText: "确定", // 确认按钮的文字，最多4个字符
   confirmColor: "#576B95", // 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
 })
  },
  onLoad () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  signOut(){
    console.log('用户点击确定')
    getApp().globalData.user.phone='',
  getApp().globalData.user.password='',
  getApp().globalData.Likes=[]
  this.setData({
    userInfo:true
  })
  wx.showToast({
    title:'退出成功'
  })
    },
  ejectPopup(){
   wx.navigateTo({
     url: '../login/logs',
   })
},
onShow(){
  this.setData({
    ejects:false,
    userData:getApp().globalData.user[0],
    userInfo:getApp().globalData.logintf
  })
  console.log(this.data.userData)
}
})
