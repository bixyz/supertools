// pages/exchange/exchange.js
import { HTTP } from '../../../utils/http.js'
let http = new HTTP()

import { constant } from 'constant.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    kinds: constant.kinds,
    kindsIndex:0,
    unitCodes: ["请先选择单位种类"],
    srcUnitCode:'', // 选择的src单位
    srcIndex:0,
    targetUnitCode: '',// 选择的target单位
    targetIndex:0,

    inputContent :'',
    resultContent :null,

  },
  //单位种类选择
  bindKindPickerChange: function (e) {
    var showContent = ["请先选择单位种类"];
    var unitCode = this.data.kinds[e.detail.value].code;
    if (unitCode != ""){
      // 选择了具体的单位种类
      showContent = constant.unitCodes[unitCode];
      this.setData({
        kindsIndex: e.detail.value,
        unitCodes: showContent,
        srcUnitCode: showContent[0],
        srcIndex: 0,
        targetUnitCode: showContent[0],
        targetIndex: 0,
      })
    }
    else{
      // 恢复成刚进入页面的设置
      this.setData({
        kindsIndex: 0,
        unitCodes: showContent,
        srcUnitCode: '',
        srcIndex: 0,
        targetUnitCode: '',
        targetIndex: 0,
      })
    }
    
  },
  //src选择
  bindSrcPickerChange: function (e) {
    this.setData({
      srcIndex: e.detail.value,
      srcUnitCode: this.data.unitCodes[e.detail.value]
    })
  },
  //target选择
  bindTargetPickerChange: function (e) {
    this.setData({
      targetIndex: e.detail.value,
      targetUnitCode: this.data.unitCodes[e.detail.value]
    })
  },
  // 输入框
  input(e) {
    this.setData({
      inputContent: e.detail.value
    })
  },
  //转换按钮
  convert(e) {
    console.log(this.data.srcUnitCode + "," + this.data.targetUnitCode)
    if (this.data.srcUnitCode === '' || this.data.targetUnitCode === ''){
      http._show_error_msg("请选择单位种类")
      return;
    }
    if (this.data.inputContent === '') {
      http._show_error_msg("输入值不可为空")
      return;
    }

    http.request({
      url: '/unitconvert/convert?from='+this.data.srcUnitCode+'&to='+this.data.targetUnitCode+'&amount='+this.data.inputContent,
      success: (res) => {
        this.setData({
          resultContent: res['result']['camount']
        })
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "单位换算"
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