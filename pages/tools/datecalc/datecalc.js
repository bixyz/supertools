var dateTimePicker = require('utils/dateTimePicker.js');

Page({
  data: {
    date: '2018-10-01',
    time: '12:00',
    dateTimeArray: null,
    dateTime: null,
    beginTimeStr: null,

    dateTimeArray1: null,
    dateTime1: null,
    endTimeStr: null,

    startYear: 1978,
    endYear: 3050,
    showCalcResult: null
  },
  calcDate() {
    var beginReplaceStr = this.data.beginTimeStr.replace(/\-/g, "/");
    var endReplaceStr = this.data.endTimeStr.replace(/\-/g, "/");
    var d1 = new Date(beginReplaceStr);
    var d2 = new Date(endReplaceStr);
    //两个时间相差的毫秒数
    var tmp = "相差的毫秒数: " + parseInt(d2 - d1) + "\n";
    //两个时间相差的秒数
    tmp += "相差的秒数: " + (parseInt(d2 - d1) / 1000) + "\n";
    //两个时间相差的分钟数
    tmp += "相差的分钟数: " + (parseInt(d2 - d1) / 1000 / 60) + "\n";
    //两个时间相差的小时数
    tmp += "相差的小时数: " + (parseInt(d2 - d1) / 1000 / 60 / 60) + "\n";
    //两个时间相差的天数
    tmp += "相差的天数: " + (parseInt(d2 - d1) / 1000 / 60 / 60 / 24) + "\n";

    this.setData({
      showCalcResult: tmp
    })
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: "日期差值"
    })

    // 获取完整的年月日 时分秒，以及默认显示的数组
    var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    var obj1 = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    // 精确到分的处理，将数组的秒去掉
    // var lastArray = obj1.dateTimeArray.pop();
    // var lastTime = obj1.dateTime.pop();

    this.setData({
      dateTime: obj.dateTime,
      dateTimeArray: obj.dateTimeArray,
      dateTimeArray1: obj1.dateTimeArray,
      dateTime1: obj1.dateTime
    });

    this.data.beginTimeStr = this.calcTimeStr(this.data.dateTime, this.data.dateTimeArray);
    this.data.endTimeStr = this.calcTimeStr(this.data.dateTime1, this.data.dateTimeArray1);
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
  changeDateTime1(e) {
    const that = this;
    this.setData({
      dateTime1: e.detail.value
    });
    this.data.endTimeStr = this.calcTimeStr(this.data.dateTime1, this.data.dateTimeArray1);
  },

  calcTimeStr(dateTime, dateTimeArray) {
    const that = this;

    var aaa1 = dateTime[0];
    var aaa2 = dateTime[1];
    var aaa3 = dateTime[2];
    var aaa4 = dateTime[3];
    var aaa5 = dateTime[4];
    var aaa6 = dateTime[5];


    var time1 = dateTimeArray[0][aaa1];
    var time2 = dateTimeArray[1][aaa2];
    var time3 = dateTimeArray[2][aaa3];
    var time4 = dateTimeArray[3][aaa4];
    var time5 = dateTimeArray[4][aaa5];
    var time6 = dateTimeArray[5][aaa6];
    var time = time1 + '-' + time2 + '-' + time3 + ' ' + time4 + ':' + time5 + ':' + time6;
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
  },
  changeDateTimeColumn1(e) {
    var arr = this.data.dateTime1,
      dateArr = this.data.dateTimeArray1;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    // this.setData({
    //   dateTimeArray1: dateArr,
    //   dateTime1: arr
    // });
  }
})