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
    inputContent: '',
    resultContent: null
  },
  //监听输入
  getContent: function(e) {
    this.data.inputContent = e.detail.value;
  },
  //查询
  query: function(e) {
    if (this.data.inputContent === '') {
      http._show_error_msg("输入不可为空")
      return;
    }
    http.request({
      url: '/areacode/query?areacode=' + this.data.inputContent,
      success: (res) => {

        var showContent ='';
        for (var i = 0; i < res['result'].length;i++){
          var item = res['result'][i];
          showContent += item['province'] +
            ' ' + item['city'] +
            ' ' + item['town'] +
            ' ' + item['areacode'] + '\n';
        }
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
      title: "区号查询"
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