// pages/tools/express/express.js
import { HTTP } from '../../../utils/http.js'
let http = new HTTP()

// import { constant } from 'constant.js'
import { pinyinutil } from 'pinyinutil.js'
let pinyin = new pinyinutil()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputContent:'',
    resultContent: ''
  },
  //监听输入
  getContent: function (e) {
    var resultContentTmp = pinyin.getFullChars(e.detail.value);
    this.setData({
      resultContent: resultContentTmp
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "汉字转拼音"
    })
    console.log(pinyin)
    console.log(pinyin.pinyin)
    var pinyinStr = pinyin.getFullChars("你好");
    console.log(pinyinStr)
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