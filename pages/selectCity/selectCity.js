// pages/cityList/cityList.js
Page({
  data: {
    winHeight:0
  },//监听传值，后面自己做处理了
  cityTap(e){
    console.log('fasdfsdfsdfds');
    console.log(e);
    const cityName=e.detail.cityname;
    wx.navigateBack();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const win = wx.getSystemInfoSync();
    // console.log(win);
    this.setData({
      winHeight: win.windowHeight
    });
    console.log(win.windowHeight);
  }
})