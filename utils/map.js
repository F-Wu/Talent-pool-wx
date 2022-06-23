const wxqqmap = require('../qqmap-wx-jssdk.min'),
      qqwxmap = new wxqqmap({
        key: 'TCMBZ-PVNKS-GFMO3-64GW6-2KRZO-VUB7V' // 必填，这里最好填自己申请的的
      }); 
import util from './util.js';
const qq='sdfsdf';
export default class qqmap{//获取定位信息
  getLocateInfo(){
    let that=this;
    return new Promise(function (resolve, reject) {
            that.location().then(function(val){
              //如果通过授权，那么直接使用腾讯的微信小程序sdk获取当前定位城市
              qqwxmap.reverseGeocoder({
                location: {
                  latitude: val.latitude,
                  longitude: val.longitude
                },
                success: function (res) {
                  console.log(res.result.address_component.city);
                  resolve(res.result.address_component.city);//返回城市
                },
                fail: function (res) {
                  reject(res);
                },
                complete: function (res) {
                  console.log(res);
                }
              });
                
              },function(error) {
                //如果用户拒绝了授权，那么这里会提醒他，去授权后再定位
                console.log('shibai');
                wx.showModal({
                  title: '',
                  content: '自动定位需要授权地理定位选项',
                  confirmText: '去授权',
                  success(res) {
                    if (res.confirm) {
                      wx.openSetting({
                        success(res) {
                          console.log(res);
                          that.getLocateInfo();
                        }
                      })
                    }
                  }
                })

              })
          
    })
  }
  
//定位，获取当前经纬度
  location(){   
    return new Promise(function (resolve, reject) {  
      wx.getLocation({
        altitude: true,
        success: function (res) {
          resolve(res);
        },fail(res){
          reject(res);
        }
      })
    });
    
  }  

  
}