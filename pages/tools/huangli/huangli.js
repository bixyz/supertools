import {
  HTTP
} from '../../../utils/http.js'
let http = new HTTP()
var dateTimePicker = require('utils/dateTimePicker.js');

Page({
  data: {
    date: '2018-10-01',
    time: '12:00',
    dateTimeArray: null,
    dateTime: null,
    beginTimeStr: null,

    startYear: 1978,
    endYear: 3050,
    resultContent: ''
  },

  //查询
  query: function (e) {
    var beginReplaceStr = this.data.beginTimeStr.replace(/\-/g, "/");
    var d1 = new Date(beginReplaceStr);
    var yearIndex = d1.getFullYear();
    var monthIndex = d1.getMonth() + 1;
    var dayIndex = d1.getDate();

    http.request({
      url: '/huangli/date?year=' + yearIndex + '&month=' + monthIndex + '&day=' + dayIndex,
      success: (res) => {

        var showContent = res['result']['year'] + '-' + res['result']['month'] + '-' + res['result']['day'] + ' ' + '星期' + res['result']['week']+'\n'
          + '阳历：' + res['result']['yangli'] + '\n'
          + '阴历：' + res['result']['nongli'] + '\n'
          + '星座：' + res['result']['star'] + '\n'
          + '胎神：' + res['result']['taishen'] + '\n'
          + '五行：' + res['result']['wuxing'] + '\n'
          + '冲：' + res['result']['chong'] + '\n'
          + '煞：' + res['result']['sha'] + '\n'
          + '生肖：' + res['result']['shengxiao'] + '\n'
          + '吉日：' + res['result']['jiri'] + '\n'
          + '值日天神：' + res['result']['zhiri'] + '\n'
          + '凶神：' + res['result']['xiongshen'] + '\n'
          + '吉神宜趋：' + res['result']['jishenyiqu'] + '\n'
          + '财神：' + res['result']['caishen'] + '\n'
          + '喜神：' + res['result']['xishen'] + '\n'
          + '福神：' + res['result']['fushen'] + '\n'
          + '岁次：' + res['result']['suici'] + '\n'
          + '宜：' + res['result']['yi'] + '\n'
          + '急：' + res['result']['ji'] + '\n'
          ;

        this.setData({
          resultContent: showContent
        })
      }
    })
  },

  onLoad() {
    wx.setNavigationBarTitle({
      title: "黄历查询"
    })

    // 获取完整的年月日 时分秒，以及默认显示的数组
    var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    // 精确到天的处理，将数组的时分秒去掉
    var lastArray = obj.dateTimeArray.pop();
    var lastTime = obj.dateTime.pop();
    var lastArray = obj.dateTimeArray.pop();
    var lastTime = obj.dateTime.pop();
    var lastArray = obj.dateTimeArray.pop();
    var lastTime = obj.dateTime.pop();

    this.setData({
      dateTime: obj.dateTime,
      dateTimeArray: obj.dateTimeArray
    });

    this.data.beginTimeStr = this.calcTimeStr(this.data.dateTime, this.data.dateTimeArray);
  },
  changeDate(e) {
    this.setData({
      date: e.detail.value
    });
  },
  changeTime(e) {
    this.setData({
      time: e.detail.value
    });
  },
  changeDateTime(e) {
    const that = this;
    this.setData({
      dateTime: e.detail.value
    });
    this.data.beginTimeStr = this.calcTimeStr(this.data.dateTime, this.data.dateTimeArray);

  },

  calcTimeStr(dateTime, dateTimeArray) {
    const that = this;

    var aaa1 = dateTime[0];
    var aaa2 = dateTime[1];
    var aaa3 = dateTime[2];


    var time1 = dateTimeArray[0][aaa1];
    var time2 = dateTimeArray[1][aaa2];
    var time3 = dateTimeArray[2][aaa3];
    var time = time1 + '-' + time2 + '-' + time3;
    return time;
  },

  changeDateTimeColumn(e) {
    var arr = this.data.dateTime,
      dateArr = this.data.dateTimeArray;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    // this.setData({
    //   dateTimeArray: dateArr,
    //   dateTime: arr
    // });
  }
})