// pages/r2/r2.js

import Currency from 'utils/currency.js'
import {
  updateInput,
  updateInputBack,
  reset
} from 'utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputContent: '',
    resultContent: null,



    timeoutHandler: 0,

  },
  //输入框事件
  getContent(e) {
    this.setData({
      inputContent: e.detail.value
    })
  },
  //转换事件
  convert(e) {
    if (this.data.inputContent === '') {
      http._show_error_msg("输入不可为空")
      return;
    }
    this.data.timeoutHandler = setTimeout(() => {
      let upperStr = this._transform(this.data.inputContent)
      upperStr.then((result) => {
        this.setData({
          resultContent: result
        })
      })
    }, 300);
  },
  //转换函数
  _transform(newStr) {
    return new Promise((resolve, reject) => {
      let tsf = new Currency()
      let result = tsf.toUpper(newStr)
      if (result.length === 0) {
        reject(new Error('转换有误！'))
      } else {
        resolve(result)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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