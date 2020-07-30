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

    allCapitals: ["中华人民共和国 People's Republic of China	北京 Beijing",
      "蒙古 Mongolia	乌兰巴托 Elggydggmgj",
      "朝鲜 Democratic People's Republic of Korea	平壤 Pyongyang",
      "韩国 Republic of Korea	首尔 Seoul",
      "日本 Japan	东京 Tokyo",
      "菲律宾 Republic of the Philippines	马尼拉 Manila",
      "印度尼西亚 Republic of Indonesia	雅加达 Jakarta",
      "文莱 Brunei Darussalam	斯里巴加湾市 Bandar Seri Begawan",
      "新加坡 Republic of Singapore	新加坡 Singapore",
      "泰国 Kingdom of Thailand	曼谷 Bangkok",
      "马来西亚 Malaysia	吉隆坡 Kuala Lumpur",
      "越南 Socialist Republic of Vietnam	河内 Hanoi",
      "老挝 Lao People's Democratic Republic	万象 Vientiane",
      "柬埔寨 Kingdom of Cambodia	金边 Phnom Penh",
      "缅甸 Union of Myanmar	仰光 Yangon",
      "不丹 Kingdom of Bhutan	廷布 Thimphu",
      "东帝汶 Democratic Republic of East Timor	帝力 Dili",
      "尼泊尔 Kingdom of Nepal	加德满都 Kathmandu",
      "印度 Republic of India	新德里 New Delhi",
      "孟加拉国 People's Republic of Bangladesh	达卡 Dhaka",
      "斯里兰卡 Democratic Socialist Republic of Sri Lanka	科伦坡 Colombo",
      "马尔代夫 Republic of Maldives	马累 Male",
      "巴基斯坦 Islamic Republic of Pakistan	伊斯兰堡 Islamabad",
      "阿富汗 Islamic State of Afghanistan	喀布尔 Kabul",
      "塔吉克斯坦 Republic of Tajikistan	杜尚别 Dushanbe",
      "吉尔吉斯斯坦 Kyrgyz Republic	比什凯克 Bishkek",
      "哈萨克斯坦 Republic of Kazakhstan	阿斯塔纳 Astana",
      "乌兹别克期坦 Republic of Uzbekistan	塔什干 Tashkent",
      "土库曼斯坦 Republic of Turkmenistan	阿什哈巴德 Ashgabat",
      "伊朗 Islamic Republic of Iran	德黑兰 Tehran",
      "伊拉克 Republic of Iraq	巴格达 Baghdad",
      "科威特 State of Kuwait	科威特城 Kuwait",
      "卡塔尔 State of Qatarc	多哈 Doha",
      "阿拉伯联合酋长国 United Arab Emirates	阿布扎比 Abu Dhabi",
      "巴林 Kingdom of Bahrain	麦纳麦 Manama",
      "阿曼 Sultanate of Oman	马斯喀特 Muscat",
      "也门 Republic of Yemen	萨那 Sanaa",
      "沙特阿拉伯 Kingdom of Saudi Arabia	利雅得 Riyadh",
      "约旦 Hashemite Kingdom of Jordan	安曼 Amman",
      "巴勒斯坦 State of Palestine	耶路撒冷 Jerusalem",
      "以色列 State of Israel	耶路撒冷 Jerusalem",
      "叙利亚 Syrian Arab Republic	大马士革 Damascus",
      "黎巴嫩 Lebanese Republic	贝鲁特 Beirut",
      "塞浦路斯 Republic of Cyprus	尼科西亚 Nicosia",
      "土耳其 Republic of Turkey	安卡拉 Ankara",
      "阿塞拜疆 Republic of Azerbaijan	巴库 Baku",
      "格鲁吉亚 Georgia	第比利斯 T'bilisi",
      "亚美尼亚 Republic of Armenia	埃里温 Yerevan",
      "挪威 Kingdom of Norway	奥斯路 Oslo",
      "冰岛 Republic of Iceland	雷克雅未克 Reykjavik",
      "瑞典 Kingdom of Sweden	斯德哥尔摩 Stockholm",
      "芬兰 Republic of Finland	赫尔辛基 Helsinki",
      "爱沙尼亚 Republic of Estonia	塔林 Tallinn",
      "拉脱维亚 Republic of Latvia	里加 Riga",
      "立陶宛 Republic of Lithuania	维尔纽斯 Vilnius",
      "白俄罗斯 Republic of Belarus	明斯克 Minsk",
      "俄罗斯 Russian Federation	莫斯科 Moscow",
      "乌克兰 Ukraine	基辅 Kiev",
      "摩尔多瓦 Republic of Moldova	基希讷乌 Chisinau",
      "波兰 Republic of Poland	华沙 Warsaw",
      "捷克 Czech Republic	布拉格Prague",
      "斯洛伐克 Slovak Republic	布拉提斯拉发 Bratislava",
      "匈牙利 Republic of Hungary	布达佩斯 Budapest",
      "德国 Federal Republic of Germany	柏林 Berlin",
      "英国 United kingdom of Great Britain and Northern Ireland	伦敦 London",
      "爱尔兰 Ireland	都柏林 Dublin",
      "丹麦 Kingdom of Denmark	哥本哈根 Copenhagen",
      "荷兰 Kingdom of the Netherlands	阿姆斯特丹 Amsterdam",
      "摩纳哥 Principality of Monaco	摩纳哥 Monaco",
      "法国 French Republic	巴黎 Paris",
      "比利时 Kingdom of Belgium	布鲁塞尔 Brussels",
      "卢森堡 Grand Duchy of Luxembourg	卢森堡 Luxembourg",
      "奥地利 Republic of Austria	维也纳 Vienna",
      "瑞士 Swiss Confederation	伯尔尼 Bern",
      "列支敦士登 Principality of Liechtenstein	瓦杜兹 Vaduz",
      "西班牙 Kingdom of Spain	马德里 Madrid",
      "安道尔 Principality of Andorra	安道尔 Andorra la Vella",
      "葡萄牙 Portuguese Republic	里斯本 Lisbon",
      "意大利 Italian Republic	罗马 Rome",
      "马耳他 Republic of Malta	瓦莱塔 Bamako",
      "圣马力诺 Republic of San Marino	圣马力诺 San Marino",
      "梵蒂冈 Vatican City State	梵蒂冈城 Vatican City",
      "斯洛文尼亚 Republic of Slovenia	卢布尔雅那 Ljubljana",
      "克罗地亚 Republic of Croatia	萨格勒布 Zagreb",
      "波斯尼亚和黑塞哥维那 Bosnia and Herzegovina	萨拉热窝 Sarajevo",
      "南斯拉夫 Federal Republic of Yugoslavia	贝尔格莱德 Belgrade",
      "马其顿 Republic of Macedonia	斯科普里 Skopje",
      "阿尔巴尼亚 Republic of Albania	地拉那 Tirana",
      "罗马尼亚 Romania	布加勒斯特 Bucharest",
      "保加利亚 Republic of Bulgaria	索非亚 Sofia",
      "希腊 Hellenic Republic	雅典 Athens",
      "埃及 Arab Republic of Egypt	开罗 Cairo",
      "苏丹 Republic of the Sudan	喀土穆 Khartoum",
      "埃塞俄比亚 Federal Democratic Republic of Ethiopia	亚的斯亚贝巴 Addis Ababa",
      "厄立特里亚 State of Eritrea	阿斯马拉 Asmara",
      "吉布提 Republic of Djibouti	吉布提 Djibouti",
      "索马里 Somali Republic	摩加迪沙 Mogadishu",
      "利比亚 Socialist People's Libyan Arab Jamahiriya	的黎波里 Tripoli",
      "阿尔及利亚 Democratic People's Republic of Algeria	阿尔及尔 Algiers",
      "突尼斯 Republic of Tunisia	突尼斯 Tunis",
      "摩洛哥 Kingdom of Morocco	拉巴特 Rabat",
      "佛得角 Republic of Cape Verde	普拉亚 Praia",
      "毛里塔尼亚 Islamic Republic of Mauritania	努瓦克肖特 Nouakchott",
      "马里 Republic of Mali	巴马科 Bamako",
      "塞内加尔 Republic of Senegal	达喀尔 Dakar",
      "冈比亚 Republic of the Gambia	班珠尔 Banjul",
      "几内亚比绍 Republic of Guinea-Bissau	比绍 Bissau",
      "几内亚 Republic of Guinea	科纳克里 Conakry",
      "塞拉利昂 Republic of Sierra Leone	弗里敦 Freetown",
      "利比里亚 Republic of Liberia	蒙罗维亚 Monrovia",
      "科特迪瓦 Republic of Cote d'Ivoire	亚穆苏克罗 Yamoussoukro",
      "布基纳法索 Burkina Faso	瓦加杜古 Ouagadougou",
      "尼日尔 Republic of Niger	尼亚美 Niamey",
      "乍得 Republic of Chad	恩贾梅纳 N'Djamena",
      "尼日利亚 Federal Republic of Nigeria	阿布贾 Abuja",
      "加纳 Republic of Ghana	阿克拉 Accra",
      "多哥 Togolese Republic	洛美 Lome",
      "贝宁 Republic of Benin	波多诺伏 Porto-Novo",
      "喀麦隆 Republic of Cameroon	雅温得 Yaounde",
      "加蓬 Gabonese Republic	利伯维尔 Libreville",
      "赤道几内亚 Republic of Equatorial Guinea	马拉博 Malabo",
      "圣多美和普林西比 Democratic Republic of Sao Tome and Principe	圣多美 Sao Tome",
      "中非 Central African Republic	班吉 Bangui",
      "刚果 Republic of the Congo	布拉柴维尔 Brazzaville",
      "刚果民主共和国 Democratic Republic of the Congo	金沙萨 Kinshasa",
      "乌干达 Republic of Uganda	坎帕拉 Kampala",
      "卢旺达 Republic of Rwanda	基加利 Kigali",
      "布隆迪 Republic of Burundi	布琼布拉 Bujumbura",
      "坦桑尼亚 United Republic of Tanzania	多多马 Dodoma",
      "肯尼亚 Republic of Kenya	内罗华 Nairobi",
      "安哥拉 Republic of Angola	罗安达 Luanda",
      "赞比亚 Republic of Zambia	卢萨卡 Lusaka",
      "马拉维 Republic of Malawi	利隆圭 Lilongwe",
      "莫桑比克 Republic of Mozambique	马普托 Maputo",
      "马达加斯加 Republic of Madagascar	塔那那利佛 Antananarivo",
      "科摩罗 Union of the Comoros	莫罗尼 Moroni",
      "塞舌尔 Republic of Seychelles	维多利亚 Victoria",
      "毛里求斯 Republic of Mauritius	路易港 Port Louis",
      "津巴布韦 Republic of Zimbabwe	哈拉雷 Harare",
      "博茨瓦纳 Republic of Botswana	哈博罗内 Gaborone",
      "纳米比亚 Republic of Namibia	温得和克 Windhoek",
      "斯威士兰 Kingdom of Swaziland	姆巴巴内 Mbabane",
      "莱索托 Kingdom of Lesotho	马塞卢 Maseru",
      "南非 Republic of South Africa	比勒陀利亚 Cape Town",
      "澳大利亚 Commonwealth of Australia	堪培拉 Canberra",
      "巴布亚新几内亚 Independent State of Papua New Guinea	莫尔兹比港 Port Moresby",
      "所罗门群岛 Solomon Islands	霍尼亚拉 Honiara",
      "瓦努阿图 Republic of Vanuatu	维拉港 Port-Vila",
      "新西兰 New Zealand	惠灵顿 Wellington",
      "斐济 Republic of the Fiji Islands	苏瓦 Suva",
      "汤加 Kingdom of Tonga	努库阿洛法 Nuku'alofa",
      "瑙鲁 Republic of Nauru	亚伦 Yaren District",
      "基里巴斯 Republic of Kiribati	塔拉瓦 Tarawa",
      "图瓦卢 Tuvalu	富纳富提 Funafuti",
      "萨摩亚 Independent State of Samoa	阿皮亚 Apia",
      "密克罗尼西亚联邦 Federated States of Micronesia	帕利基尔 Palikir",
      "马绍尔群岛 Republic of the Marshall Islands	马朱罗 Majuro",
      "帕劳 Republic of Palau	科罗尔 Koror",
      "加拿大 Canada	渥太华 Ottawa",
      "美国 United States of America	华盛顿 Washington",
      "墨西哥 United Mexican States	墨西哥城 Mexico City",
      "危地马拉 Republic of Guatemala	危地马拉 Guatemala",
      "伯利兹 Belize	贝尔莫潘 Belmopan",
      "萨尔瓦多 Republic of El Salvador	圣萨尔瓦多 San Salvador",
      "洪都拉斯 Republic of Honduras	特古西加尔巴 Tegucigalpa",
      "尼加拉瓜 Republic of Nicaragua	马那瓜 Managua",
      "哥斯达黎加 Republic of Costa Rica	圣何塞 San Jose",
      "巴拿马 Republic of Panama	巴拿马城 Panama",
      "古巴 Republic of Cuba	哈瓦那 Havana",
      "巴哈马 Commonwealth of the Bahamas	拿骚 Nassau",
      "海地 Republic of Haiti	太子港 Port-au-Prince",
      "多米尼加共和国 Dominican Republic	圣多明各 Santo Domingo",
      "牙买加 Jamaica	金斯敦 Kingston",
      "圣基茨和尼维斯 Federation of Saint Kitts and Nevis	巴斯特尔 Basseterre",
      "安提瓜和巴布达 Antigua and Barbuda	圣约翰 Saint John's",
      "多米尼克 Commonwealth of Dominica	罗索 Roseau",
      "圣卢西亚 Saint Lucia	卡斯特里 Castries",
      "圣文森特和格林纳丁斯 Saint Vincent and the Grenadines	金斯敦 Kingstown",
      "格林纳达 Grenada	圣乔治 Saint George's",
      "巴巴多斯 Barbados	布里奇敦 Bridgetown",
      "特立尼达和多巴哥 Republic of Trinidad and Tobago	西班牙港 Port-of-Spain",
      "哥伦比亚 Republic of Colombia	波哥大 Bogota",
      "厄瓜多尔 Republic of Ecuador	基多 Quito",
      "委内瑞拉 Bolivarian Republic of Venezuela	加拉加斯 Caracas",
      "圭亚那 Co-operative Republic of Guyana	乔治敦 Georgetown",
      "苏里南 Republic of Suriname	帕拉马里博 aramaribo",
      "秘鲁 Republic of Peru	利马 Lima",
      "玻利维亚 Republic of Bolivia	苏克雷 Sucre",
      "巴拉圭 Republic of Paraguay	亚松森 Asuncion",
      "阿根廷 Argentine Republic	布宜诺斯艾利斯 Buenos Aires",
      "乌拉圭 Oriental Republic of Uruguay	蒙得维的亚 Montevide",
      "巴西 Federative Republic of Brazil	巴西利亚 Brasilia",
      "智利 Republic of Chile	圣地亚哥 Santiago"
    ],

    resultContent: ''
  },
  //监听输入
  getContent: function(e) {
    // 输入的关键字
    var inputContent = e.detail.value;
    // 过滤后需要展示的结果
    var searchResult = ''
    var index = 0;
    if (inputContent === '') {
      // 关键字清空，展示所有数据
      for (var i = 0; i < this.data.allCapitals.length; i++) {
        searchResult  += (i + 1) + ". " + this.data.allCapitals[i] + "\n"
      }
    } else {
      // 根据关键字搜索
      for (var i = 0; i < this.data.allCapitals.length; i++) {
        if (this.data.allCapitals[i].indexOf(inputContent) != -1) {
          searchResult += (index + 1) + ". " + this.data.allCapitals[i] + "\n"
          index++;
        }
      }
    }

    this.setData({
      resultContent: searchResult
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: "国家首都查询"
    })

    var showContent = ''
    for (var i = 0; i < this.data.allCapitals.length; i++) {
      showContent += (i + 1) + ". " + this.data.allCapitals[i] + "\n"
    }
    this.setData({
      resultContent: showContent
    })
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