// pages/index/index.js
import request from "../../request/index.js"
import regeneratorRuntime from "../../lib/runtime/runtime.js"
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		currentIndex:0,
		navList: [],
		swiperList:[],
		videoList:[]
	},
	//获取导航列表
	async getNavList(){
		const data = await request({url:"/navList"})
		if(data.code === 0){
			this.setData({
				navList:data.data.navList
			})
		}
	},
	//获取轮播图
	async getSwiperList(){
		const data = await request({url:"/swiperList"})
		if(data.code === 0){
			this.setData({
				swiperList:data.data.swiperList
			})
		}
	},
	//获取视频列表
	async getVideoList(){
		const data = await request({url:"/videoList"})
		if(data.code === 0){
			this.setData({
				videoList:data.data.videoList
			})
		}
	},
	//导航栏点击事件
	navClick(e){
		this.setData({
			currentIndex:e.target.dataset.index
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this.getNavList()
		this.getSwiperList()
		this.getVideoList()
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
