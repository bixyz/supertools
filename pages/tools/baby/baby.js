// pages/tools/express/express.js
import {
  HTTP
} from '../../../utils/http.js'
let http = new HTTP()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    age: '',
    month: '',
    resultContent: "这里展示结果"
  },
  //监听输入
  getAge: function (e) {
    this.data.age = e.detail.value;
  },
  getMonth: function (e) {
    this.data.month = e.detail.value;
  },
  //查询
  query: function(e) {
    if (this.data.age === '' || this.data.month === '') {
      http._show_error_msg("输入不可为空")
      return;
    }
    http.request({
      url: '/snsn/sex?age=' + this.data.age+'&month=' + this.data.month,
      success: (res) => {
        var showContent = res['result']['sex'] + '孩';
        this.setData({
          resultContent: showContent
        })
        console.log(res)
        console.log(showContent)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: "生男生女"
    })
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