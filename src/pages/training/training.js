Page({
  data: {
    uhide: 0,
    showTopTips: false,

    radioItems: [
      { name: 'cell standard', value: '0' },
      { name: 'cell standard', value: '1', checked: true }
    ],
    checkboxItems: [
      { name: '是，本人处于空职期，随时可以培训上岗', value: '0', checked: true },
      { name: '否，本人正在就职，需稍后培训上岗', value: '1' }
    ],

    date: "2016-09-01",
    time: "12:01",

    countryCodes: ["+86", "+80", "+84", "+87"],
    countryCodeIndex: 0,

    countries: ["赤坎区","霞山区","坡头区","麻章区","廉江市","吴川市","雷州市","遂溪县","徐闻县"],
    countryIndex: 0,

    accounts: ["微信号", "QQ", "Email"],
    accountIndex: 0,

    isAgree: false,

    multiArray:[["全职","钟点工"],["月嫂","育婴师","小儿推拿","催乳师","妇婴护理"]],
    multiIndex:[1,2],//初始化
    files: []
  },
  onLoad: function (options) {
    var that = this;
    var data = {
      "datas": [
        {
          "id": 1,
          "useData": "2018-12-04",
          "userName": "zhoubing",
          "class": 12,
          "price": "45$",
          "text": "来一段说明文字，来一段说明文字，来一段说明文字"
        }
      ]
    };
    that.setData({
      carInfoData: data.datas
    })

  },
  showTopTips: function () {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },
  // radioChange: function (e) {
  //   console.log('radio发生change事件，携带value值为：', e.detail.value);

  //   var radioItems = this.data.radioItems;
  //   for (var i = 0, len = radioItems.length; i < len; ++i) {
  //     radioItems[i].checked = radioItems[i].value == e.detail.value;
  //   }

  //   this.setData({
  //     radioItems: radioItems
  //   });
  // },
  // checkboxChange: function (e) {
  //   console.log('checkbox发生change事件，携带value值为：', e.detail.value);

  //   var checkboxItems = this.data.checkboxItems, values = e.detail.value;
  //   for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
  //     checkboxItems[i].checked = false;

  //     for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
  //       if (checkboxItems[i].value == values[j]) {
  //         checkboxItems[i].checked = true;
  //         break;
  //       }
  //     }
  //   }

  //   this.setData({
  //     checkboxItems: checkboxItems
  //   });
  // },
  myradioChange: function (e){
    console.log("改写后的单选框触发change事件，其value值为：",e.detail.value);
    var checkboxItems = this.data.checkboxItems;
    for (var i = 0, len = checkboxItems.length; i < len; ++i) {
      checkboxItems[i].checked = checkboxItems[i].value == e.detail.value;
    }

    this.setData({
      checkboxItems:checkboxItems
    });

  },
  changeMultiPicker(e){
    this.setData({
      multiIndex:e.detail.value
    })
    console.log("二级联动的value是：",e.detail.value);

  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindCountryCodeChange: function (e) {
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryCodeIndex: e.detail.value
    })
  },
  bindCountryChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryIndex: e.detail.value
    })
  },
  bindAccountChange: function (e) {
    console.log('picker account 发生选择改变，携带值为', e.detail.value);

    this.setData({
      accountIndex: e.detail.value
    })
  },
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  downBox : function (e) {
    var that = this;
    var toggleBtnVal = that.data.uhide;
    var itemId = e.currentTarget.id;
    console.log("有点击反应的");
    console.log("first:",toggleBtnVal);
    console.log("second", itemId);
    // if (toggleBtnVal !== itemId) {
    //   that.setData({
    //     uhide: 1
    //   })
    // } else {
    //   that.setData({
    //     uhide: 0
    //   })
    // } 
    that.setData({
      uhide:!toggleBtnVal
    }) 
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  }
});