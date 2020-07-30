// pages/home/home.js

var sectionData = [{
  section_id: 0,
  active: "active",
  name: "全部"
}, {
  section_id: 1,
  active: "",
  name: "日常"
}, {
  section_id: 2,
  active: "",
  name: "图片"
}, {
  section_id: 3,
  active: "",
  name: "查询"
}, {
  section_id: 4,
  active: "",
  name: "设备"
}, {
  section_id: 5,
  active: "",
  name: "提取"
}, {
  section_id: 6,
  active: "",
  name: "游戏"
}, {
  section_id: 7,
  active: "",
  name: "其它"
}];
var currentSectionIndex = 0

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenmodalput: true, //hidden 反馈弹出框
    feedbackContent: null, //反馈内容

    searchContent: null, //搜索内容
    inputShowed: false, //初始文本框不显示内容
    scrollHeight: '', //启动后scrollview需要设置高度
    sections: sectionData,
    tools: [{
      id: 0,
      hidden: false,
      url: "../tools/rule/rule",
      name: "尺子"
    }, {
      id: 1,
      hidden: false,
      url: "../tools/chengyu/chengyu",
      name: "成语词典"
    }, {
      id: 2,
      hidden: false,
      url: "../tools/unitconvert/unitconvert",
      name: "单位换算"
    }, {
      id: 3,
      hidden: false,
      url: "../tools/capital/capital",
      name: "国家首都查询"
    }, {
      id: 4,
      hidden: false,
      url: "../tools/led/led",
      name: "LED滚动字幕"
    }, {
      id: 5,
      hidden: false,
      url: "../tools/huoxing/huoxing",
      name: "火星文"
    }, {
      id: 6,
      hidden: false,
      url: "../tools/draw/draw",
      name: "绘画板"
    }, {
      id: 7,
      hidden: false,
      url: "../tools/word/word",
      name: "汉语词典"
    }, {
      id: 8,
      hidden: false,
      url: "../tools/pinyin/pinyin",
      name: "汉字转拼音"
    }, {
      id: 9,
      hidden: false,
      url: "../tools/huangli/huangli",
      name: "黄历查询"
    }, {
      id: 10,
      hidden: false,
      url: "../tools/exchange/exchange",
      name: "汇率查询"
    }, {
      id: 11,
      hidden: false,
      url: "../tools/ipaddress/ipaddress",
      name: "IP地址查询"
    }, {
      id: 12,
      hidden: false,
      url: "../tools/traditional/traditional",
      name: "简繁转换"
    }, {
      id: 13,
      hidden: false,
      url: "../tools/radix/radix",
      name: "进制转换"
    }, {
      id: 14,
      hidden: false,
      url: "../tools/express/express",
      name: "快递查询"
    }, {
      id: 15,
      hidden: false,
      url: "../tools/history/history",
      name: "历史上的今天"
    }, {
      id: 16,
      hidden: false,
      url: "../tools/morse/morse",
      name: "摩尔斯电码"
    }, {
      id: 17,
      hidden: false,
      url: "../tools/areacode/areacode",
      name: "区号查询"
    }, {
      id: 18,
      hidden: false,
      url: "../tools/datecalc/datecalc",
      name: "日期差值"
    }, {
      id: 19,
      url: "../tools/random/random",
      name: "随机数生成"
    }, {
      id: 20,
      hidden: false,
      url: "../tools/rmb/rmb",
      name: "数字转大写"
    }, {
      id: 21,
      hidden: false,
      url: "../tools/baby/baby",
      name: "生男生女"
    }, {
      id: 22,
      hidden: false,
      url: "../tools/phone/phone",
      name: "手机号查询"
    }, {
      id: 23,
      hidden: false,
      url: "../tools/idcard/idcard",
      name: "身份证号查询"
    }, {
      id: 24,
      hidden: false,
      url: "../tools/stringturn/stringturn",
      name: "文字翻转"
    }, {
      id: 25,
      hidden: false,
      url: "../tools/zidian/zidian",
      name: "新华字典"
    }, {
      id: 26,
      hidden: false,
      url: "../tools/xiaohua/xiaohua",
      name: "笑话大全"
    },
    {
      id: 27,
      hidden: false,
      url: "../tools/compass/compass",
      name: "指南针"
    }, {
      id: 28,
      hidden: false,
      url: "../tools/dream/dream",
      name: "周公解梦"
    },




      //   id: 150,
      //   name: "星座运势"
      // }, {
      //   id: 150,
      //   name: "黄金价格"
      // }, {
      //   id: 150,
      //   name: "单位换算"
      // }, {
      //   id: 150,
      //   name: "彩票开奖"
      // }, {
      //   id: 150,
      //   name: "脑筋急转弯"
      // }, {
      //   id: 150,
      //   name: "歇后语"
      // }, {
      //   id: 150,
      //   name: "绕口令"
      // }

      // , {
      //   id: 150,
      //   name: "QQ号码测吉凶"
      // }, {
      //   id: 150,
      //   name: "车型大全"
      // }, {
      //   id: 150,
      //   name: "生辰八字"
      // }, {
      //   id: 150,
      //   name: "WHOIS查询"
      // }


    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let self = this;
    wx.getSystemInfo({
      success: function(res) {
        self.setData({
          scrollHeight: res.windowHeight * 0.9
        })
      }
    });
  },
  //显示弹出框
  feedbackClicked: function() {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  //弹出框输入事件
  feedbackInput: function(e) {
    this.data.feedbackContent = e.detail.value;
  },
  //弹出框取消按钮
  cancel: function(e) {
    this.setData({
      hiddenmodalput: true,
      feedbackContent: null
    });
  },
  getDateString: function() {
    var date = new Date(); //获取当前日期时间
    　　
    var dateString = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(); //秒
    return dateString;
  },
  //弹出框确认按钮
  confirm: function(e) {
    //输入判空
    var emptFlag = typeof this.data.feedbackContent == "undefined" ||
      this.data.feedbackContent == null ||
      this.data.feedbackContent == "";
    if (!emptFlag) {
      var desc = this.getDateString() + ": " + this.data.feedbackContent
      //处理反馈
      wx.cloud.callFunction({
        name: 'feedback',
        data: {
          description: desc
        },
        success: function(res) {
          //提示用户反馈结果
          wx.showToast({
            title: "反馈成功!",
            icon: 'none',
            duration: 2000
          })
        },
        fail: function(err) {
          //提示用户反馈结果
          wx.showToast({
            title: "反馈失败，请检查网络!",
            icon: 'none',
            duration: 2000
          })
        }
      })

    }

    this.setData({
      hiddenmodalput: true,
      feedbackContent: null
    })
  },
  // 使文本框进入可编辑状态
  showInput: function() {
    this.setData({
      inputShowed: true //设置文本框可以输入内容
    });
  },
  // 取消搜索
  hideInput: function() {
    this.setData({
      inputShowed: false,
      searchContent: ''
    });
    this.searchExec('');
  },
  // 搜索
  search: function(e) {
    this.searchExec(e.detail.value);
  },
  // 搜索执行代码
  searchExec: function(keyWord) {
    var toolsDataCopy = this.data.tools;
    for (var item of toolsDataCopy) {
      console.log(item);
      if (item.name.indexOf(keyWord) != -1) {
        item.hidden = false;
      } else {
        item.hidden = true;
      }
    }
    this.setData({
      tools: toolsDataCopy
    });
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

  },

  /**
   * 用户点击不同类型
   */
  onSectionClicked: function(e) {
    var sid = e.currentTarget.dataset.sid;
    //刷新选中状态
    for (var i in sectionData) {
      if (sectionData[i]['section_id'] == sid) {
        sectionData[i]['active'] = true
        currentSectionIndex = i
      } else
        sectionData[i]['active'] = false
    }
    this.setData({
      sections: sectionData
    });
    //加载文章

  },

  /**
   * 用户点击具体工具事件
   */
  onToolClicked: function(e) {
    var aurl = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: aurl
    })
  },
})