// const { host } = require('../../config/CONSTANT.js');
// const app = getApp();
// Page({
  
  
// });
Page({
  data: {
    uhide:0,
    inputShowed: false,
    inputVal: "",
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ] 
  },
  onLoad: function (options) {
    var that = this;
    var data = {
      "datas": [{
        "id": 1,
        "useData": "2018-12-04",
        "userName": "zhoubing",
        "class": 12,
        "price": "45$",
        "text": "来一段说明文字，来一段说明文字，来一段说明文字"
      }]
    };
    that.setData({
      carInfoData: data.datas
    })

  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  toggleBtn: function (e) {
    var that = this;
    var toggleBtnVal = that.data.uhide;
    var itemId = e.currentTarget.id;
    if (toggleBtnVal == itemId) {
      that.setData({
        uhide: 0
      })

    } else {
      that.setData({
        uhide: itemId
      })
    }
  }
});