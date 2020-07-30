import {
  config
} from 'config.js'
// 错误提示
const tips = {
  1: '抱歉，出现了一个未知错误',
  1005: 'appkey无效，请前往www申请',
  3000: '不存在'
}

class HTTP {
  // 网络请求函数
  request(params) {
    if (!params.method) {
      params.method = 'GET'
    }

    // //小程序端调用方法
    // wx.cloud.callFunction({
    //   // 需要调用的云函数名
    //   name: 'http',
    //   // 传给云函数的参数
    //   data: {
    //     url: params.url,
    //   },
    //   success: function(res) {
    //     console.log(res)

    //     // 成功
    //     if (res.result === null || res.result === '') {
    //       // 系统错误
    //       wx.showToast({
    //         title: '请检查网络',
    //         icon: 'none',
    //         duration: 2000
    //       })
    //     } else {
    //       let jsonResult = JSON.parse(res.result);
    //       let dataStatus = jsonResult.status;

    //       if (dataStatus == 0) {
    //         // 回调函数
    //         params.success(jsonResult);
    //       } else {
    //         // 业务错误
    //         wx.showToast({
    //           title: jsonResult.msg,
    //           icon: 'none',
    //           duration: 2000
    //         })
    //       }
    //     }
    //   },
    //   fail: function(err) {
    //     wx.showToast({
    //       title: '请检查网络',
    //       icon: 'none',
    //       duration: 2000
    //     })
    //   }
    // })




    //云函数获取ak失败
    if (config.appkey === '') {

      this._show_error_msg('网络错误!');

      //获取ak
      wx.cloud.callFunction({
        // 需要调用的云函数名
        name: 'getak',
        // 传给云函数的参数
        data: {
          url: params.url,
        },
        success: function(res) {
          config.appkey = res.result;
        },
        fail: function(err) {}
      });
      return;
    }

    wx.request({
      url: config.api_base_url + params.url + "&appkey=" + config.appkey,
      method: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json',
        // 'appkey': config.appkey
      },
      success: (res) => {
        let status = res.statusCode.toString();
        let dataStatus = res.data.status;
        // 成功
        if (status.startsWith('2')) {
          if (dataStatus == 0) {
            // 回调函数
            params.success(res.data);
          } else {
            // 业务错误
            let error_msg = res.data.msg;
            this._show_error_msg(error_msg);
          }
        } else {
          // 系统错误
          this._show_error(1);
        }
      },
      fail: (err) => {
        // 系统错误
        this._show_error(1)
      }
    })
  }

  // 错误处理函数
  _show_error_code(error_code) {
    if (!error_code) {
      error_code = 1
    }
    wx.showToast({
      title: tips[error_code],
      icon: 'none',
      duration: 2000
    })
  }

  _show_error_msg(error_msg) {
    wx.showToast({
      title: error_msg,
      icon: 'none',
      duration: 2000
    })
  }
}

export {
  HTTP
}