// pages/tools/huoxing/huoxing.js
import { HTTP } from '../../../utils/http.js'
let http = new HTTP()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputContent: null,
    resultContent: null
  },
  // 输入框事件
  inputTap: function(e) {
    this.setData({
      inputContent: e.detail.value
    })
  },
  // 转火星文按钮事件
  convertQqlized: function(cc) {
    var huoxingStr = this.qqlized(this.data.inputContent);
    this.setData({
      resultContent: huoxingStr
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    http.request({
      url: '/translate/translate?type=google&from=zh-cn&to=en&text=好',
      success: (res) => {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.setNavigationBarTitle({
      title: "翻译"
    })
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