// 云函数入口文件
const cloud = require('wx-server-sdk')
//引入request-promise用于做网络请求
var rp = require('request-promise');
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let url = 'https://api.jisuapi.com' + event.url + "&appkey=80b04b3bc843744f";
  console.log('url>>>>:'+url)
  return await rp(url)
    .then(function (res) {
      console.log('res>>>>:' + res)
      return res
    })
    .catch(function (err) {
      console.log('err>>>>:' + err)
      return '失败'
    });
}


// // 云函数入口文件
// const cloud = require('wx-server-sdk')
// const got = require('got'); //引用 got

// cloud.init()

// // 云函数入口函数
// exports.main = async (event, context) => {
//   // const wxContext = cloud.getWXContext()

//   // return {
//   //   event,
//   //   openid: wxContext.OPENID,
//   //   appid: wxContext.APPID,
//   //   unionid: wxContext.UNIONID,
//   // }

//   //let getResponse = await got('httpbin.org/get') //get请求 用httpbin.org这个网址做测试 
//   //return getResponse.body
//   let postResponse = await got('https://api.jisuapi.com' + event.url + "&appkey=80b04b3bc843744f" + '/get', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     // body: JSON.stringify({ //把json数据（对象）解析成字符串
//     //   title: "网址",
//     //   value: 'anipc.com'
//     // })
//   })

//   return postResponse.body //返回数据
// }