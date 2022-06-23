// pages/index/cityList/city.js
const city = require('../../utils/city.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      images: {
          location: app.globalData.imagePath + "icon_location.png"
      },
      cityList: city, //所有城市列表
      cityPy: '', //右侧首字母列表
      currentIndex: 0, //当前显示的字母index
      hidden: false, //是否隐藏当前显示中间大字母提示
      scrollTopId: 'current', //滚动到当前的字母城市
      locationCity: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.listHeight = []
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
      // 触摸左侧字母表所用的数据
      this.touches = {}
      let cityPy = []
      // 遍历城市数据,把字母放到cityPy数据里
      for(var key in this.data.cityList){
          cityPy.push(key)
      }
      this.setData({
          cityPy: cityPy
      })
      
      // 获取当前定位城市
      this.setData({
          locationCity: app.globalData.locationInfo.fullname
      })
      
      // 页面显示后计算listGroup的高度
      this._calculateHeight()
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

  },
  /**
   * 自定义事件
   */
  // 点击选择城市
  selectCity(e) {
      const dataset = e.currentTarget.dataset
      app.globalData.selectCityInfo = {
          fullname: dataset.fullname,
          lat: dataset.lat,
          lng: dataset.lng
      }
      wx.navigateBack()
  },
  // 触摸开始
  handleTouchStart(e) {
      // 首次获取到clientY的值并记录为y1
      var y = e.touches[0].clientY
      this.touches.y1 = y
      // 获取到当前的index,并记录在touches里
      this.touches.anchorIndex = e.currentTarget.dataset.index
      // 把当前点击的字母显示在屏幕中央
      this.setData({
          hidden: true,
          scrollTopId: e.currentTarget.dataset.id,
          currentIndex: e.currentTarget.dataset.index
      })
  },
  // 滑动触摸
  handleTouchMove(e){
      // 滑动过程中获取当前的clientY值并记录为y2
      var y = e.touches[0].clientY
      this.touches.y2 = y
      // 根据y2-y1得到所滑动的距离除以每个字母的高度20得到字母的个数,
      // 加上第一次获取的anchorindex得到当前的序号index
      const delt = (this.touches.y2 - this.touches.y1) / 20 | 0
      let anchorIndex = this.touches.anchorIndex + delt
      // 由当前的序号index在字母表数组中找到字母并显示在屏幕中
      this.setData({
          hidden: true,
          scrollTopId: this.data.cityPy[anchorIndex],
          currentIndex: anchorIndex
      })
  },
  // 触摸结束
  handleTouchEnd() {
      setTimeout(() =>{
          this.setData({
              hidden: false,
          })
      }, 0)
  },
  // 获取定位地址
  handleClickLocation() {
      app.getLocation(()=>{
          wx.navigateBack()
      })
  },
  
  // 计算listGroup高度
  _calculateHeight() {
      const that = this
      this.listHeight = []
      let height = 0
      this.listHeight.push(height)
      wx.createSelectorQuery().selectAll('.listGroup').boundingClientRect(function(rects){
          rects.forEach(function(rect){
              height += rect.height
              that.listHeight.push(height)
          })
      }).exec()
  },
  // 滚动时触发
  handleScroll(e) {
      let scrollTop = e.detail.scrollTop
      const listHeight = this.listHeight
      // 遍历listHeight数据,如果当前的scrollTop大于height1小于height2时
      // 说明当前滚到到这个字母城市区域,获取到当前的索引i值
      for(var i=0;i<listHeight.length;i++){
          let height1 = listHeight[i]
          let height2 = listHeight[i + 1]
          if(scrollTop > height1 && scrollTop < height2){
              this.setData({
                  currentIndex: i
              })
          }
      }
  },
  
})
