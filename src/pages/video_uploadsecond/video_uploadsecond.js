// pages/video_uploadsecond/video_uploadsecond.js
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
var API = require('../../utils/mockapi.js')
Page({
  data: {
    mytestdata:[],
    files: [],
    videoUrl:''
  },
  onLoad:function(options){
    var that = this;
    API.ajax.ajax('', function(res){
      console.log(res);
      that.setData({
        mytestdata: res.data
      })
    })
  },
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          // files: that.data.files.concat(res.tempFilePaths)
          files:res.tempFilePaths
        });
        console.log(that.data.files);
       
      }

    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  addVideoTap: function () {
    var that = this;
    //选择上传视频
    wx.chooseVideo({
      sourceType: ['camera'], //视频选择的来源
      //sizeType: ['compressed'],
      compressed: false,//是否压缩上传视频
      camera: 'back', //默认拉起的是前置或者后置摄像头
      success: function (res) {
        //上传成功，设置选定视频的临时文件路径
        that.setData({
          videoUrl: res.tempFilePath,
        });
        console.log("视频准备就绪，正在调用上传接口！");
        //在上传到服务器前显示加载中
        // wx.showLoading({
        //   title: '加载中...',
        //   icon: 'loading',
        // });
        //上传视频
        wx.uploadFile({
          url: '/upload/service/uploadFiles', //开发者服务器的 url
          filePath: res.tempFilePath, // 要上传文件资源的路径 String类型！！！
          name: 'file', // 文件对应的 key ,(后台接口规定的关于图片的请求参数)
          header: {
            'content-type': 'multipart/form-data'
          }, // 设置请求的 header
          formData: {

          }, // HTTP 请求中其他额外的参数
          success: function (res) {
            //上传成功后隐藏加载框
            wx.hideLoading();
            console.log(res);
          },
          fail: function (res) {
            console.log("视频上传失败" + res);
          }
        })
      }
    })
  },
  sendPic: function (e) {
    var that = this;
    console.log('发送前获取一下：',that.data.files);
    console.log('发送视频到后端');
    // wx.uploadFile({
    //   url: 'api/upload_second/store_files',
    //   filePath: 'that.data.files',
    //   name: '',
    //   success : function (res) {
    //     cosole.log('打印出成功发送后后台对应的响应：',res)
    //   }


    // })
    API.ajax.ajaxsecond('', function (res) {
      console.log(res);
    })


  }
});