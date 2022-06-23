import qqmap from '../../utils/map.js';
import cityData from '../../utils/city.js';
Component({
  properties: {
    styles:{//这个是可以自定义最外层的view的样式
      type:String,
      value:'',
      observer: function (newval) {
        // 监听改变
        this.setData({
          windowHeight:newval
        })
        console.log(newval);
      }
    },
    customAttribute:{
      type:Number
    }
  },
  data: {
    cityListId: '',
    cityListName: 'A',
    cityData:cityData,
    //下面是热门城市数据，模拟数据
    newcity: ['北京', '上海', '广州', '深圳', '成都', '杭州'],
    // citySel: '全国',
    locateCity: '',
    windowHeight:'',
    // 当前选中
    categoryNameActive:'',
    topNum: 0,
    floorstatus:true
  },
  methods: {
    //点击城市
    cityTap(e) {
      var app = getApp();
      app.globalData.city=e.currentTarget.dataset.val
      wx.navigateBack();
    },
    //点击城市字母
    letterTap(e) {
      const curIndex=e.currentTarget.dataset.index?e.currentTarget.dataset.index:0
      this.setData({
        cityListName:e.currentTarget.dataset.id,
        categoryNameActive:curIndex
      });
    },
    //调用定位
    getLocate(){
      let that=this;
      new qqmap().getLocateInfo().then(function (val) {//这个方法在另一个文件里，下面有贴出代码
        console.log(val);
        if (val.indexOf('市') !== -1) {//这里是去掉“市”这个字
          console.log(val.indexOf('市') - 1);
          val = val.slice(0, val.indexOf('市'));
          console.log(val);
        }
        that.setData({ 
          locateCity: val
        });
        //把获取的定位和获取的时间放到本地存储
        wx.setStorageSync('locatecity', { city: val, time: new Date().getTime() });
      });
    },
    // 获取滚动条当前位置
  scrolltoupper:function(e){
    console.log(e)
    let t =  e.detail.scrollTop;
    if (t > 100 && !this.data.floorstatus) {
    	// 避免重复setData
    	this.setData({
	       floorstatus: true
	    });
    } 
   	if(t <= 100 && this.data.floorstatus){
  	  this.setData({
        floorstatus: false
      });
   	}
  },

  //回到顶部
  goTop: function (e) {  // 一键回到顶部
    this.setData({
      topNum: this.data.topNum = 0
    });
    console.log(e)
  },
  // 清空选择
  empty(){
    var app = getApp();
    app.globalData.city='城市'
    wx.navigateBack();
    // console.log(1)
  }
  },
  ready(){
    console.log(getApp());
    let that = this,
        cityOrTime = wx.getStorageSync('locatecity')||{},
        time = new Date().getTime(),
        city='';
    if (!cityOrTime.time||(time - cityOrTime.time > 1800000)){//每隔30分钟请求一次定位
      this.getLocate();
    }else{//如果未满30分钟，那么直接从本地缓存里取值
      that.setData({
        locateCity: cityOrTime.city
      })
    }
  },

})