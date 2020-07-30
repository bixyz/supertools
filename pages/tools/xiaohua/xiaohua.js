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
    scrollIndex:0,
    curPageIndex: 1,
    total: 1000,
    resultNodes: [],
    resultContent: ''
  },
  //查询
  query: function(e) {
    if (e != null && e.currentTarget.dataset.page == "pre") {
      this.data.curPageIndex--;
      this.data.curPageIndex = this.data.curPageIndex > 0 ? this.data.curPageIndex : 1;
    }
    if (e != null && e.currentTarget.dataset.page == "next") {
      this.data.curPageIndex++;
      this.data.curPageIndex = this.data.curPageIndex > this.data.total ? this.data.total : this.data.curPageIndex;
    }
    http.request({
      url: '/xiaohua/text?pagesize=10&sort=addtime&pagenum=' + this.data.curPageIndex,
      success: (res) => {
        var resultData = res['result'];
        this.data.total = parseInt(resultData['total']);
        var resultText = '';
        for (var i = 0; i < resultData['list'].length; i++) {
          var item = resultData['list'][i];
          // showContent.push({
          //   name: 'div',
          //   attrs: {
          //     class: 'div_class'
          //   },
          //   children: [{
          //     type: 'text',
          //     text: ((i + 1) + '. ' + item['content'])
          //   }]
          // });

          resultText += ((i + 1) + '. ' + item['content']) + "\n\n";
        }
        //先清空
        this.setData({
          resultContent: ''
        })
        // 再赋值
        this.setData({
          resultContent: resultText,
          scrollIndex: 0
        })
        wx.setStorageSync('xiaohua_page', this.data.curPageIndex);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: "笑话大全"
    })
    // 记录页码
    var pageIndex = wx.getStorageSync('xiaohua_page')
    if (pageIndex) {
      this.data.curPageIndex = pageIndex;
    }

    this.query();
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