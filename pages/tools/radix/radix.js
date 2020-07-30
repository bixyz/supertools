// pages/tools/radix/radix.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radixValue2: null,
    radixValue8: null,
    radixValue10: null,
    radixValue16: null
  },

  //监听输入内容
  getContent: function (e) {
    var tmpValue = parseInt(e.detail.value);
    this.data.radixValue10 = tmpValue;
    this.setData({
      radixValue2: tmpValue.toString(2),
      radixValue8: tmpValue.toString(8),
      radixValue16: tmpValue.toString(16)
    })
  },

  //清空
  clear: function () {
    this.setData({
      radixValue2: null,
      radixValue8: null,
      radixValue10: null,
      radixValue16: null
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "进制转换"
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