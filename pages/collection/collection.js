// pages/collection/collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    List: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.Getnews()
  },
  Getnews() {
    wx.request({
      method: 'GET',
      url: 'http://localhost:8081/Recruit/api/newest',
      success:(res => {
        let info = res.data
        console.log(info)
        if (info.status == 0) {
          let newArr = [];
          for (let i = 0; i < getApp().globalData.Likes.length; i++) {
            for (let j = 0; j < info.data.length; j++) {
              if (info.data[j].id === getApp().globalData.Likes[i].likes) {
                newArr.push(info.data[j]);
              }
            }
          }
          this.setData({
            List:newArr
          })
        } else {
          console.log(info.msg)
        }
      })
    })
  },
  navigateTo(e){
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
			url: '../detail/detail?id='+e.currentTarget.dataset.id+ '&houde=' + false,
		})
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  }
})