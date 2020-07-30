var timer;

Page({

  /**
  * 页面的初始数据
  */
  data: {
    pageH: 0,
    pageW: 0,
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (e) {
    //获取之前页面穿过来的颜色、速度、文字
    var rgb = "(0, 0, 0)";
    //设置滚动速度
    var speed = 61;
    var speedParam = parseInt(e.speed);
    if (speedParam < 1 || speedParam>10){
      speedParam = 1;
    }
    speed = speed - (51+speedParam);
    // 滚动内容
    var text = e.content;
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          pageH: res.windowHeight,
          pageW: res.windowWidth,
        })
      }
    });
    //创建背景画布
    const ctx = wx.createCanvasContext('firstCanvas');
    ctx.setFillStyle('rgb(256,256,256)');
    // Create linear gradient
    // const grd = ctx.createLinearGradient(0, 0, this.data.pageW, 0);
    // ctx.setGlobalAlpha(0.6);
    // grd.addColorStop(0, 'rgb' + 'rgb(256,256,256)');
    // // grd.addColorStop(0.3, 'rgb(0,0,0)');
    // // grd.addColorStop(0.7, 'rgb(0,0,0)');
    // grd.addColorStop(1, 'rgb' + 'rgb(256,256,256)');
    // Fill with gradient
    // ctx.setFillStyle(grd);
    ctx.fillRect(0, 0, this.data.pageW, this.data.pageH);
    ctx.draw(true);

    //定义文字移动的坐标
    var x_position = 0;
    var that = this;
    timer = setInterval(function () {
      //secendCanvas 文字的画布
      var sec = wx.createCanvasContext('secondCanvas');
      //坐标系移动
      sec.translate(parseInt(that.data.pageW * 0.7), 0);
      //逆时针旋转90度 让文字横屏
      sec.rotate(-0.5 * Math.PI);
      //文字宽度 中间横条0.4倍屏幕宽
      sec.setFontSize(parseInt(that.data.pageW * 0.5));
      //获取文字长度
      var txtwidth = sec.measureText(text).width;
      sec.setFillStyle('rgb' + rgb + '');
      sec.save()
      if (x_position < -txtwidth - that.data.pageH) {
        x_position = 0;
      }
      sec.fillText(text, x_position--, 0);
      sec.stroke();
      sec.draw();
      sec.restore();
    }, speed);

  },

  stopIt: function () {
    //clearInterval(timer);
  },

  /**
  * 生命周期函数--监听页面卸载
  */
  onUnload: function () {
    clearInterval(timer);
  },

})