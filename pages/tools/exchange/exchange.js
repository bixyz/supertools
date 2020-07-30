// pages/exchange/exchange.js
import { HTTP } from '../../../utils/http.js'
let http = new HTTP()

Page({


  /**
   * 页面的初始数据
   */
  data: {
    currencyArray: [
      {
        "currency": "",
        "name": "点击选择货币种类"
      }, 
      {
        "currency": "USD",
        "name": "美元"
      },
      {
        "currency": "EUR",
        "name": "欧元"
      },
      {
        "currency": "CNY",
        "name": "人民币"
      },
      {
        "currency": "JPY",
        "name": "日元"
      },
      {
        "currency": "HKD",
        "name": "港币"
      },
      {
        "currency": "KRW",
        "name": "韩元"
      },
      {
        "currency": "RUB",
        "name": "卢布"
      },
      {
        "currency": "GBP",
        "name": "英镑"
      },
      {
        "currency": "SGD",
        "name": "新加坡元"
      },
      {
        "currency": "TWD",
        "name": "新台币"
      },
      {
        "currency": "CAD",
        "name": "加拿大元"
      },
      {
        "currency": "AUD",
        "name": "澳大利亚元"
      },
      {
        "currency": "BRL",
        "name": "巴西雷亚尔"
      },
      {
        "currency": "INR",
        "name": "印度卢比"
      },
      {
        "currency": "CHF",
        "name": "瑞士法郎"
      },
      {
        "currency": "THB",
        "name": "泰国铢"
      },
      {
        "currency": "MOP",
        "name": "澳门元"
      },
      {
        "currency": "NZD",
        "name": "新西兰元"
      },
      {
        "currency": "ZAR",
        "name": "南非兰特"
      },
      {
        "currency": "SEK",
        "name": "瑞典克朗"
      },
      {
        "currency": "IDR",
        "name": "印尼卢比"
      },
      {
        "currency": "MXN",
        "name": "墨西哥比索"
      },
      {
        "currency": "ARS",
        "name": "阿根廷比索"
      },
      {
        "currency": "MYR",
        "name": "林吉特"
      },
      {
        "currency": "OMR",
        "name": "阿曼里亚尔"
      },
      {
        "currency": "EGP",
        "name": "埃及镑"
      },
      {
        "currency": "IEP",
        "name": "爱尔兰镑"
      },
      {
        "currency": "ATS",
        "name": "奥地利先令"
      },
      {
        "currency": "PKR",
        "name": "巴基斯坦卢比"
      },
      {
        "currency": "PYG",
        "name": "巴拉圭瓜拉尼"
      },
      {
        "currency": "BHD",
        "name": "巴林第纳尔"
      },
      {
        "currency": "PAB",
        "name": "巴拿马巴尔博亚"
      },
      {
        "currency": "BMD",
        "name": "百慕大元"
      },
      {
        "currency": "BGN",
        "name": "保加利亚列弗"
      },
      {
        "currency": "BEF",
        "name": "比利时法郎"
      },
      {
        "currency": "ISK",
        "name": "冰岛克朗"
      },
      {
        "currency": "PLN",
        "name": "波兰兹罗提"
      },
      {
        "currency": "BOB",
        "name": "玻利维亚诺"
      },
      {
        "currency": "BWP",
        "name": "博茨瓦纳普拉"
      },
      {
        "currency": "DKK",
        "name": "丹麦克朗"
      },
      {
        "currency": "DEM",
        "name": "德国马克"
      },
      {
        "currency": "FRF",
        "name": "法国法郎"
      },
      {
        "currency": "PHP",
        "name": "菲律宾比索"
      },
      {
        "currency": "FIM",
        "name": "芬兰马克"
      },
      {
        "currency": "COP",
        "name": "哥伦比亚比索"
      },
      {
        "currency": "CUP",
        "name": "古巴比索"
      },
      {
        "currency": "KZT",
        "name": "哈萨克斯坦坚戈"
      },
      {
        "currency": "ANG",
        "name": "荷兰盾"
      },
      {
        "currency": "GHC",
        "name": "加纳塞地"
      },
      {
        "currency": "CZK",
        "name": "捷克克朗"
      },
      {
        "currency": "ZWD",
        "name": "津巴布韦元"
      },
      {
        "currency": "QAR",
        "name": "卡塔尔里亚尔"
      },
      {
        "currency": "KWD",
        "name": "科威特第纳尔"
      },
      {
        "currency": "HRK",
        "name": "克罗地亚库纳"
      },
      {
        "currency": "KES",
        "name": "肯尼亚先令"
      },
      {
        "currency": "LVL",
        "name": "拉脱维亚拉图"
      },
      {
        "currency": "LAK",
        "name": "老挝基普"
      },
      {
        "currency": "LBP",
        "name": "黎巴嫩镑"
      },
      {
        "currency": "LTL",
        "name": "立陶宛立特"
      },
      {
        "currency": "RON",
        "name": "罗马尼亚列伊"
      },
      {
        "currency": "MUR",
        "name": "毛里求斯卢比"
      },
      {
        "currency": "MNT",
        "name": "蒙古图格里克"
      },
      {
        "currency": "BDT",
        "name": "孟加拉塔卡"
      },
      {
        "currency": "PEN",
        "name": "秘鲁新索尔"
      },
      {
        "currency": "BUK",
        "name": "缅甸缅元"
      },
      {
        "currency": "MAD",
        "name": "摩洛哥迪拉姆"
      },
      {
        "currency": "NOK",
        "name": "挪威克朗"
      },
      {
        "currency": "PTE",
        "name": "葡萄牙埃斯库多"
      },
      {
        "currency": "SAR",
        "name": "沙特里亚尔"
      },
      {
        "currency": "LKR",
        "name": "斯里兰卡卢比"
      },
      {
        "currency": "SOS",
        "name": "索马里先令"
      },
      {
        "currency": "TZS",
        "name": "坦桑尼亚先令"
      },
      {
        "currency": "TND",
        "name": "突尼斯第纳尔"
      },
      {
        "currency": "TRY",
        "name": "土耳其里拉"
      },
      {
        "currency": "GTQ",
        "name": "危地马拉格查尔"
      },
      {
        "currency": "VEB",
        "name": "委内瑞拉博利瓦"
      },
      {
        "currency": "UYU",
        "name": "乌拉圭比索"
      },
      {
        "currency": "ESP",
        "name": "西班牙比塞塔"
      },
      {
        "currency": "GRD",
        "name": "希腊德拉克马"
      },
      {
        "currency": "HUF",
        "name": "匈牙利福林"
      },
      {
        "currency": "JMD",
        "name": "牙买加元"
      },
      {
        "currency": "ILS",
        "name": "以色列谢克尔"
      },
      {
        "currency": "ITL",
        "name": "意大利里拉"
      },
      {
        "currency": "JOD",
        "name": "约旦第纳尔"
      },
      {
        "currency": "VND",
        "name": "越南盾"
      },
      {
        "currency": "CLP",
        "name": "智利比索"
      },
      {
        "currency": "PGK",
        "name": "巴布亚新几内亚基那"
      },
      {
        "currency": "KPW",
        "name": "朝鲜圆"
      },
      {
        "currency": "LSL",
        "name": "莱索托洛提"
      },
      {
        "currency": "LYD",
        "name": "利比亚第纳尔"
      },
      {
        "currency": "RWF",
        "name": "卢旺达法郎"
      },
      {
        "currency": "MMK",
        "name": "缅甸元"
      },
      {
        "currency": "MRO",
        "name": "毛里塔尼亚乌吉亚"
      },
      {
        "currency": "MWK",
        "name": "马拉维克瓦查"
      },
      {
        "currency": "NIO",
        "name": "尼加拉瓜科多巴"
      },
      {
        "currency": "NPR",
        "name": "尼泊尔卢比"
      },
      {
        "currency": "SBD",
        "name": "所罗门群岛元"
      },
      {
        "currency": "SCR",
        "name": "塞舌尔法郎"
      },
      {
        "currency": "BND",
        "name": "文莱元"
      },
      {
        "currency": "SYP",
        "name": "叙利亚镑"
      },
      {
        "currency": "DZD",
        "name": "阿尔及利亚第纳尔"
      },
      {
        "currency": "AED",
        "name": "阿联酋迪拉姆"
      },
      {
        "currency": "BBD",
        "name": "巴巴多斯元"
      },
      {
        "currency": "AFN",
        "name": "阿富汗尼"
      },
      {
        "currency": "ALL",
        "name": "阿尔巴尼亚勒克"
      },
      {
        "currency": "AMD",
        "name": "亚美尼亚德拉姆"
      },
      {
        "currency": "AOA",
        "name": "安哥拉宽扎"
      },
      {
        "currency": "AWG",
        "name": "阿鲁巴盾弗罗林"
      },
      {
        "currency": "AZN",
        "name": "阿塞拜疆新马纳特"
      },
      {
        "currency": "BAM",
        "name": "波斯尼亚马尔卡"
      },
      {
        "currency": "BIF",
        "name": "布隆迪法郎"
      },
      {
        "currency": "BSD",
        "name": "巴哈马元"
      },
      {
        "currency": "BTN",
        "name": "不丹努扎姆"
      },
      {
        "currency": "BYR",
        "name": "白俄罗斯卢布"
      },
      {
        "currency": "BZD",
        "name": "伯利兹美元"
      },
      {
        "currency": "CDF",
        "name": "刚果法郎"
      },
      {
        "currency": "CRC",
        "name": "哥斯达黎加科朗"
      },
      {
        "currency": "CUC",
        "name": "古巴可兑换比索"
      },
      {
        "currency": "CVE",
        "name": "佛得角埃斯库多"
      },
      {
        "currency": "DJF",
        "name": "吉布提法郎"
      },
      {
        "currency": "DOP",
        "name": "多明尼加比索"
      },
      {
        "currency": "NGN",
        "name": "尼日利亚奈拉"
      },
      {
        "currency": "ERN",
        "name": "厄立特里亚纳克法"
      },
      {
        "currency": "ETB",
        "name": "埃塞俄比亚比尔"
      },
      {
        "currency": "FJD",
        "name": "斐济元"
      },
      {
        "currency": "FKP",
        "name": "福克兰镑"
      },
      {
        "currency": "GEL",
        "name": "格鲁吉亚拉里"
      },
      {
        "currency": "GIP",
        "name": "直布罗陀镑"
      },
      {
        "currency": "GMD",
        "name": "冈比亚达拉西"
      },
      {
        "currency": "GNF",
        "name": "几内亚法郎"
      },
      {
        "currency": "GYD",
        "name": "圭亚那元"
      },
      {
        "currency": "HNL",
        "name": "洪都拉斯伦皮拉"
      },
      {
        "currency": "HTG",
        "name": "海地古德"
      },
      {
        "currency": "IQD",
        "name": "伊拉克第纳尔"
      },
      {
        "currency": "IRR",
        "name": "伊朗里亚尔"
      },
      {
        "currency": "KGS",
        "name": "吉尔吉斯斯坦索姆"
      },
      {
        "currency": "KHR",
        "name": "柬埔寨瑞尔"
      },
      {
        "currency": "KMF",
        "name": "科摩罗法郎"
      },
      {
        "currency": "KYD",
        "name": "开曼群岛元"
      },
      {
        "currency": "LRD",
        "name": "利比里亚元"
      },
      {
        "currency": "MDL",
        "name": "摩尔多瓦列伊"
      },
      {
        "currency": "MGA",
        "name": "马尔加什阿里亚"
      },
      {
        "currency": "MKD",
        "name": "马其顿第纳尔"
      },
      {
        "currency": "MVR",
        "name": "马尔代夫拉菲亚"
      },
      {
        "currency": "MZN",
        "name": "新莫桑比克梅蒂卡尔"
      },
      {
        "currency": "NAD",
        "name": "纳米比亚元"
      },
      {
        "currency": "RSD",
        "name": "塞尔维亚第纳尔"
      },
      {
        "currency": "SDG",
        "name": "苏丹镑"
      },
      {
        "currency": "SHP",
        "name": "圣圣赫勒拿镑"
      },
      {
        "currency": "SLL",
        "name": "塞拉利昂利昂"
      },
      {
        "currency": "SRD",
        "name": "苏里南元"
      },
      {
        "currency": "STD",
        "name": "圣多美多布拉"
      },
      {
        "currency": "SZL",
        "name": "斯威士兰里兰吉尼"
      },
      {
        "currency": "TJS",
        "name": "塔吉克斯坦索莫尼"
      },
      {
        "currency": "TMT",
        "name": "土库曼斯坦马纳特"
      },
      {
        "currency": "TOP",
        "name": "汤加潘加"
      },
      {
        "currency": "TTD",
        "name": "特立尼达多巴哥元"
      },
      {
        "currency": "UAH",
        "name": "乌克兰格里夫纳"
      },
      {
        "currency": "UGX",
        "name": "乌干达先令"
      },
      {
        "currency": "UZS",
        "name": "乌兹别克斯坦苏姆"
      },
      {
        "currency": "VEF",
        "name": "委内瑞拉玻利瓦尔"
      },
      {
        "currency": "VUV",
        "name": "瓦努阿图瓦图"
      },
      {
        "currency": "WST",
        "name": "西萨摩亚塔拉"
      },
      {
        "currency": "XAF",
        "name": "中非金融合作法郎"
      },
      {
        "currency": "XCD",
        "name": "东加勒比元"
      },
      {
        "currency": "XOF",
        "name": "西非法郎"
      },
      {
        "currency": "XPF",
        "name": "法属波利尼西亚法郎"
      },
      {
        "currency": "YER",
        "name": "也门里亚尔"
      },
      {
        "currency": "ZMW",
        "name": "赞比亚克瓦查"
      },
      {
        "currency": "SVC",
        "name": "萨尔瓦多科朗"
      }
    ],
    currencyIndex:0,
    srcCurrency:'',
    currencyIndex2:0,
    targetCurrency:'',

    inputContent :'',
    resultContent :null,

  },
  //src选择
  bindPickerChange: function (e) {
    this.setData({
      currencyIndex: e.detail.value,
      srcCurrency: this.data.currencyArray[e.detail.value].currency
    })
  },
  //target选择
  bindPickerChange2: function (e) {
    this.setData({
      currencyIndex2: e.detail.value,
      targetCurrency: this.data.currencyArray[e.detail.value].currency
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
    if (this.data.srcCurrency === '' || this.data.targetCurrency === ''){
      http._show_error_msg("请选择货币种类")
      return;
    }
    if (this.data.inputContent === '') {
      http._show_error_msg("金额不可为空")
      return;
    }

    http.request({
      url: '/exchange/convert?from='+this.data.srcCurrency+'&to='+this.data.targetCurrency+'&amount='+this.data.inputContent,
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
      title: "汇率查询"
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