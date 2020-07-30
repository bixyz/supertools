// pages/tools/led/led.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: '这是展示内容',
    size: 140,
    speed: 0.5
  },
  //监听输入的LED内容
  getContent: function (e) {
    this.data.content = e.detail.value;
  },
  //监听输入的文字大小
  getSize: function (e) {
    this.data.size = e.detail.value;
  },
  //监听输入的速度
  getSpeed: function (e) {
    this.data.speed = e.detail.value;
  },
  //监听输入的速度
  showLed: function (e) {
    wx.navigateTo({
      url: '../../tools/led/canvas/canvas?content=' + this.data.content 
        + '&size=' + this.data.size
        + '&speed=' + this.data.speed
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "LED滚动字幕"
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