// pages/mylist_maternitymatron/mylist_maternitymatron.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {

//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })

Page({
  data: {
    uhide: 0
  },
  onLoad: function(options) {
    var that = this;
    var data = {
      "datas": [{
        "id": 1,
        "useData": "2018-12-04",
        "userName": "zhoubing",
        "class": 12,
        "price": "45$",
        "text": "来一段说明文字，来一段说明文字，来一段说明文字"
      }, {
        "id": 2,
        "useData": "2018-12-04",
        "userName": "zhoubing",
        "class": 12,
        "price": "45$",
        "text": "来一段说明文字，来一段说明文字，来一段说明文字"
      }, {
        "id": 3,
        "useData": "2018-12-04",
        "userName": "zhoubing",
        "class": 12,
        "price": "45$",
        "text": "来一段说明文字，来一段说明文字，来一段说明文字"
      }, {
        "id": 4,
        "useData": "2018-12-04",
        "userName": "zhoubing",
        "class": 12,
        "price": "45$",
        "text": "来一段说明文字，来一段说明文字，来一段说明文字"
      }, {
        "id": 5,
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
  toggleBtn: function(e) {
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