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
    inputContent: null,
    resultContent: null
  },
  //监听输入
  getContent: function(e) {
    this.data.inputContent = e.detail.value;
  },
  //查询
  query: function(e) {
    if (this.data.inputContent == null || this.data.inputContent.length != 11) {
      http._show_error_msg("输入不合法")
      return;
    }
    http.request({
      url: '/shouji/query?shouji=' + this.data.inputContent,
      success: (res) => {
        var showContent = res['result']['province'] +
          ' ' + res['result']['city'] +
          ' ' + res['result']['company'] +
          ' ' + res['result']['cardtype'];
        this.setData({
          resultContent: showContent
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: "手机号查询"
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