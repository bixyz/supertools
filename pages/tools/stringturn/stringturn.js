// pages/tools/stringturn/stringturn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputContent: null,
    resultContent: null
  },
  // 输入框事件
  inputTap: function (e) {
    this.setData({
      inputContent: e.detail.value
    })
  },
  // 编码事件
  encodeTap: function (cc) {
    var result = this.data.inputContent.split('').reverse().join('');
    this.setData({
      resultContent: result
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "文字翻转"
    })
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