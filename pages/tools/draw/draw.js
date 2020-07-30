// pages/tools/draw/draw.js
Page({
  data: {
    penMenuImg: "pen-size", //第一级菜单笔粗细
    colorMenuImg: "pen-color", //第一级菜单笔颜色
    clearMenuImg: "clear", //第一级菜单笔颜色
    firstMenuFlag: false,
    penMenuFlag: true,
    colorMenuFlag: true,
    pen: 3, //画笔粗细默认值
    color: '#cc0033' //画笔颜色默认值
  },
  pointArray: "|",
  arrayIndex: 0,
  myCanvasWidth: 0,
  myCanvasHeight: 0,
  canvasWidth: 0,
  canvasHeight: 0,
  startX: 0, //保存X坐标轴变量
  startY: 0, //保存X坐标轴变量
  isClear: false, //是否启用橡皮擦标记

  onLoad: function(e) {
    wx.setNavigationBarTitle({
      title: "绘画板"
    })

    //wx.getSystemInfo({
    //  success: function (res) {
    //    this.myCanvasWidth = res.windowWidth
    //    this.myCanvasHeight = res.windowHeight
    //   },
    // })

    // this.setData({
    //  canvasWidth: this.myCanvasWidth,
    //   canvasHeight: this.myCanvasHeight
    // })
  },

  //手指触摸动作开始
  touchStart: function(e) {
    //得到触摸点的坐标
    this.startX = e.changedTouches[0].x
    this.startY = e.changedTouches[0].y
    this.context = wx.createContext()

    if (this.isClear) { //判断是否启用的橡皮擦功能  ture表示清除  false表示画画
      this.context.setStrokeStyle('#F8F8F8') //设置线条样式 此处设置为画布的背景颜色  橡皮擦原理就是：利用擦过的地方被填充为画布的背景颜色一致 从而达到橡皮擦的效果 
      this.context.setLineCap('round') //设置线条端点的样式
      this.context.setLineJoin('round') //设置两线相交处的样式
      this.context.setLineWidth(20) //设置线条宽度
      this.context.save(); //保存当前坐标轴的缩放、旋转、平移信息
      this.context.beginPath() //开始一个路径 
      this.context.arc(this.startX, this.startY, 5, 0, 2 * Math.PI, true); //添加一个弧形路径到当前路径，顺时针绘制  这里总共画了360度  也就是一个圆形 
      this.context.fill(); //对当前路径进行填充
      this.context.restore(); //恢复之前保存过的坐标轴的缩放、旋转、平移信息
    } else {
      this.context.setStrokeStyle(this.data.color)
      this.context.setLineWidth(this.data.pen)
      this.context.setLineCap('round') // 让线条圆润 
      this.context.beginPath()

    }
  },
  //手指触摸后移动
  touchMove: function(e) {

    var startX1 = e.changedTouches[0].x
    var startY1 = e.changedTouches[0].y

    //this.pointArray += startX1 + "," + startY1+"|";

    if (this.isClear) { //判断是否启用的橡皮擦功能  ture表示清除  false表示画画

      this.context.save(); //保存当前坐标轴的缩放、旋转、平移信息
      this.context.moveTo(this.startX, this.startY); //把路径移动到画布中的指定点，但不创建线条
      this.context.lineTo(startX1, startY1); //添加一个新点，然后在画布中创建从该点到最后指定点的线条
      this.context.stroke(); //对当前路径进行描边
      this.context.restore() //恢复之前保存过的坐标轴的缩放、旋转、平移信息

      this.startX = startX1;
      this.startY = startY1;

    } else {
      this.context.moveTo(this.startX, this.startY)
      this.context.lineTo(startX1, startY1)
      this.context.stroke()

      this.startX = startX1;
      this.startY = startY1;

    }

    //只是一个记录方法调用的容器，用于生成记录绘制行为的actions数组。context跟<canvas/>不存在对应关系，一个context生成画布的绘制动作数组可以应用于多个<canvas/>
    wx.drawCanvas({
      canvasId: 'myCanvas',
      reserve: true,
      actions: this.context.getActions() // 获取绘图动作数组
    })

    // 获取像素数据
    // wx.canvasGetImageData({
    //   canvasId: 'myCanvas',
    //   x: 0,
    //   y: 0,
    //   width: 256,
    //   height: 512,
    //   success(res) {
    //     console.log(res.width) // 100
    //     console.log(res.height) // 100
    //     console.log(res.data instanceof Uint8ClampedArray) // true
    //     console.log(res.data.length) // 100 * 100 * 4
    //     var pointBuf = "";
    //     for (var i = 0; i < res.data.length;) {
    //       var rgb = res.data[i]
    //         + res.data[i + 1] * 256
    //         + res.data[i + 2] * 256 * 256
    //         + res.data[i + 3] * 256 * 256 * 256;

    //       if (rgb != 0) {
    //         var index = i / 4;
    //         var curHeight = Math.round(index / 256);
    //         var curWidth = index - Math.floor(index / 256) * 256;
    //         pointBuf += curWidth.toString() + "," + curHeight.toString() + "|";
    //       }
    //       i += 4;
    //     }

    //     if (this.pointArray == undefined){
    //       this.pointArray = "|";
    //     }
    //     this.pointArray = this.pointArray + pointBuf+"_" ;
    //   }
    // })


  },
  //手指触摸动作结束
  touchEnd: function() {

  },
  //启动橡皮擦方法
  clearCanvas: function() {


    // console.log("pointArray值为: " + this.pointArray)

    // wx.request({
    //   url: "http://47.94.158.119:80/test",
    //   header: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },
    //   method: "POST",
    //   data: this.pointArray,
    //   //data: Util.json2Form({ cityname: "上海", key: "1430ec127e097e1113259c5e1be1ba70" }),
    //   complete: function (res) {
    //     if (res == null || res.data == null) {
    //       console.error('网络请求失败');
    //       return;
    //     }
    //     else if (res.data.ret == 200) {
    //       console.error('网络请求成功');
    //     }
    //   }
    // })


    if (this.isClear) {
      this.isClear = false;
      this.setData({
        clearMenuImg: "clear"
      })
    } else {
      this.isClear = true;
      this.setData({
        clearMenuImg: "clear-select"
      })
    }
  },

  //保存为图片
  saveCanvas: function() {
    let that = this;
    //注意这个地方因为我绘制的大小就是我要保存的区域，所以我直接用了默认的横纵坐标和画布区域
    wx.canvasToTempFilePath({
      canvasId: 'myCanvas',
      success(res) {
        console.log(res.tempFilePath);
        saveImg(res)
      },
      fail: function() {
        console.log('fail-downloadFile')
      }
    })
    let saveImg = function(resourse) {
      console.log("保存图片：", resourse);
      wx.saveImageToPhotosAlbum({
        filePath: resourse.tempFilePath,
        success: function(res) {
          console.log(res)
          applyApi.toast('保存成功！')
        },
        fail: function(res) {
          console.log(res)
        }
      })
    }
  },

  penSelect: function(e) { //更改画笔大小的方法
    console.log(e.currentTarget);
    this.setData({
      pen: parseInt(e.currentTarget.dataset.param),
      firstMenuFlag: false,
      penMenuFlag: true,
      colorMenuFlag: true,
      clearMenuImg: "clear"
    });
    this.isClear = false;
  },

  colorSelect: function(e) { //更改画笔颜色的方法
    console.log(e.currentTarget);
    this.setData({
      color: e.currentTarget.dataset.param,
      firstMenuFlag: false,
      penMenuFlag: true,
      colorMenuFlag: true,
      clearMenuImg: "clear"
    });
    this.isClear = false;
  },

  menuSelect: function(e) { //选择二级菜单
    console.log(e.currentTarget);
    if ("pen" === e.currentTarget.dataset.menu) {
      this.setData({
        firstMenuFlag: true,
        penMenuFlag: false
      });
    }
    if ("color" === e.currentTarget.dataset.menu) {
      this.setData({
        firstMenuFlag: true,
        colorMenuFlag: false,
        clearMenuImg: "clear"
      });
    }
    this.isClear = false;
  },

  menuBack: function(e) { //二级菜单退出
    console.log(e.currentTarget);
    if ("pen" === e.currentTarget.dataset.menu) {
      this.setData({
        firstMenuFlag: false,
        penMenuFlag: true
      });
    }
    if ("color" === e.currentTarget.dataset.menu) {
      this.setData({
        firstMenuFlag: false,
        colorMenuFlag: true,
        clearMenuImg: "clear"
      });
    }
    this.isClear = false;
  }
})