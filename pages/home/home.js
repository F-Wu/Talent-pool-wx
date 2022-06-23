// 获取应用实例
var app = getApp();
const list = ['交互设计师', 'web前端开发工程师', 'UI设计师', '交互设计师', '交互设计师']
Page({
	// 需要用到的数据
	data: {
		jobList: [],
		list,
		active: 0,
		data: true, //有没有数据
		mostPicker: ['最新', '推荐'],
		chooseIndex: undefined,
		index: 0,
		search: {
			city: '城市',
			collect: '职业',
		},
		List: null, //最新
		List1: null, //推荐
		name: 'a'
	},
	SearchKeyWord: function (e) {
		// console.log(e);
		let type = e.currentTarget.dataset.type;
		wx.navigateTo({
			url: '../search/search?type=' + type
		})
	},

	pickerMost(e) {
		console.log(e.detail.value)
		this.setData({
			index: e.detail.value,
			chooseIndex: 0
		})
	},
	goCity() {
		this.setData({
			chooseIndex: 1
		})
		wx.navigateTo({
			url: '../selectCity/selectCity'
		})
	},
	goCollect() {
		this.setData({
			chooseIndex: 2
		})
		wx.navigateTo({
			url: '../occupation/occupation'
		})
	},
	onShow() {
		var app = getApp();
		this.setData({
			['search.collect']: app.globalData.occupation,
			['search.city']: app.globalData.city
		})
		// console.log(getApp().globalData.collect)
	},
	onLoad: function () {
		this.Getnews()
		app.setWatcher(this);
	},
	watch: {
		index: {
			handler(newValue, oldvalue) {
				console.log(newValue, oldvalue)
				if (newValue == 1) {
					this.Gethottest()
				}
			}
		},
		search:{
			handler() {
			if(getApp().globalData.occupation=='职业'&&getApp().globalData.city!='城市'){
					this.searchData(getApp().globalData.city,'')
				}
			if(getApp().globalData.occupation!='职业' && getApp().globalData.city=='城市'){
				this.searchData('',getApp().globalData.occupation)
			}
			if(getApp().globalData.occupation!='职业' && getApp().globalData.city!='城市'){
				this.searchData(getApp().globalData.city,getApp().globalData.occupation)
			}
			},
			deep:true
		}
	},
	Getnews() {
		wx.request({
			method: 'GET',
			url: 'http://localhost:8081/Recruit/api/newest',
			success: (res => {
				let info = res.data
				if (info.status == 0) {
					this.setData({
						List: info.data
					})
				} else {
					console.log(info.msg)
				}
			})
		})
	},
	Gethottest() {
		wx.request({
			method: 'GET',
			url: 'http://localhost:8081/Recruit/api/hottest',
			success: (res => {
				console.log(res.data)
				let info = res.data
				if (info.status == 0) {
					this.setData({
						List1: info.data
					})
				} else {
					console.log(info.msg)
				}
			})
		})
	},
	// 搜索
	searchData(city, collect) {
		wx.request({
			url: 'http://localhost:8081/Recruit/api/search',
			method: 'GET',
			data: {
				city:city,
				occupation:collect
			},
			success: (res) => {
				console.log(res.data)
				let info = res.data
				if (info.status == 0) {
					if (info.data == '暂无数据') {
						this.setData({
							data: false
						})
					} else {
						this.setData({
							List: info.data
						})
					}
				} else {
					console.log(info.msg)
				}
			}
		})
	},
	navigateTo(e){
		console.log(e.currentTarget.dataset)
		wx.navigateTo({
			url: '../detail/detail?id='+e.currentTarget.dataset.id,
		})
	}
})