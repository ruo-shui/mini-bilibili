// pages/detail/detail.js
import request from "../../request/index.js"
import regeneratorRuntime from "../../lib/runtime/runtime.js"
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
		videoInfo:null,
		othersLsit:[],
		commentTotalCount:"",
		commentsList:[]
  },
	//获取视频信息
	async getVideoInfo(videoId){
		const data = await request({url:`/videoDetail?id=${videoId}`})
		if(data.code === 0){
			this.setData({
				videoInfo:data.data.videoInfo
			})
		}
	},
	//获取推荐列表
	async getOthersList(videoId){
		const data = await request({url:`/otherList?id=${videoId}`})
		if(data.code === 0){
			this.setData({
				othersList:data.data.otherList
			})
		}
	},
	// 获取评论列表
	async getCommentsList(videoId){
		const data = await request({url:`/commentList?id=${videoId}`})
		if(data.code === 0){
			this.setData({
				commentTotalCount:data.data.commentData.commentTotalCount,
				commentsList:data.data.commentData.commentList
			})
		}
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		let videoId = options.id
		this.getVideoInfo(videoId)
		this.getOthersList(videoId)
		this.getCommentsList(videoId)
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