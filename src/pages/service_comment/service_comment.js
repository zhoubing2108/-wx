var sys = wx.getSystemInfoSync();
var windowWidth = sys.windowWidth;
var mW;
var mH;
if (windowWidth >= 768) {
  console.log('大屏幕')
   mW = windowWidth * 0.35;
   mH = windowWidth * 0.8;
}else{
  console.log('小屏幕')
   mW = windowWidth * 0.8;
   mH = windowWidth * 1.3;
}
// var mW = sys.windowWidth * 0.8;
// var mH = sys.windowHight * 0.85;
var mdData = [['甜美', 30], ['时尚', 20], ['帅气', 20], ['典雅', 30], ['摩登', 40], ['文雅', 50], ['浪漫', 90], ['自然', 50]];//内心
var mdData2 = [['甜美', 70], ['时尚', 20], ['帅气', 90], ['典雅', 10], ['摩登', 40], ['文雅', 50], ['浪漫', 90], ['自然', 20]];//外在
// var mdData = [['早期启蒙教育',70],['礼仪',80],['精神面貌',85],['业务熟练程度',75],['效率',100],['营养搭配',80],['日常护理',90],['疾病预防',70],['抱法照料',60],['新生儿喂养',70],['宝宝皮肤护理',90],['新生儿生理特征处理',80],['理论知识',90]]//自定义内心

var mData = [];
var mData2 = [];
var mCount = mdData.length; //边数
var mCenter = ''; //中心点
var mRadius = ''; //半径(减去的值用于给绘制的文本留空间)
var mAngle = Math.PI * 2 / mCount; //角度
var mCtx = null;
var mColorPolygon = '#000000'; //多边形颜色
var mColorLines = '#5e5e5e'; //伞骨颜色
var mColorText = '#000000';//文字颜色
var Interval = '';
var lineInterval = '';
var totalTime = 1000;//总执行时间
var spaceTime = 10;//每隔多久执行一次
var speed = spaceTime / totalTime;
var precent = 0;//当前完成的进度百分比
var precent2 = 0;
var lineprecent = 0;
var ctx1 = wx.createCanvasContext('radarcanvas1');
var ctx2 = wx.createCanvasContext('radarcanvas2');
var ctx3 = wx.createCanvasContext('radarcanvas3');
var ctx4 = wx.createCanvasContext('radarcanvas4');
var ctx5 = wx.createCanvasContext('radarcanvas5');
var topText = ["帅气", "时尚", "典雅", "甜美", "自然", "浪漫", "文雅", "摩登"];
var allSpaceTime = 50;//线程执行间隔时
console.log('前排能不能写js？');
// Page({
//   data: {
//     id: null
//   },
//   handleBtn: function () {
//     let { id } = this.data;
//     console.log(id);
//     wx.navigateTo({
//       url: `../license/license?id=${id}`
//     });
//   },
//   onLoad: function (data) {
//     this.setData({
//       id: data.id
//     });
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () { },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () { },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () { },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () { },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () { },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () { },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () { }
// });
Page({

  /**
  * 页面的初始数据
  */
  data: {
    //处理的是中心位置
    canvasW: mW * 2,
    canvasH: mH * 1.2,
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    var that = this;
    var m = [];
    for (var i = 0; i < mCount; i++) {
      m[(i + 6) % mCount] = mdData[i];
    }
    mData = m;//内在

    var m2 = [];
    for (var i = 0; i < mCount; i++) {
      m2[(i + 6) % mCount] = mdData2[i];
    }
    mData2 = m2;//外在
    mCenter = this.rpx(mW); //中心点
    mRadius = mCenter - this.rpx(85); //半径(减去的值用于给绘制的文本留空间)
    console.log('windowwidth',windowWidth);//屏幕宽度获取正常
    if (windowWidth >= 768){
      console.log('////');
      return that.mW = windowWidth * 0.4;
      
    }else{
      return mW = sys.windowWidth * 0.8;
    }
    
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
    var that = this;
    that.radarcanvas1();//雷达图文字+边框
    that.clickCanvas();//调用画雷达图
  },
  // 单位转换
  rpx: function (param) {

    if (windowWidth == 0) {
      wx.getSystemInfo({
        success: function (res) {
          windowWidth = res.windowWidth;
        }
      });
    }
    return Number((windowWidth / 750 * param).toFixed(2));
  },
  // 绘制多边伞架
  drawPolygon: function (ctx) {
    ctx.save();
    ctx.setStrokeStyle(mColorPolygon);
    var r = mRadius / mCount;
    //画8个圈
    for (var i = 0; i < mCount; i++) {
      ctx.beginPath();
      var currR = r * (i + 1); //当前半径
      //画8条边
      for (var j = 0; j < mCount; j++) {
        var x = mCenter + currR * Math.cos(mAngle * j);
        var y = mCenter + currR * Math.sin(mAngle * j);

        ctx.lineTo(x, y);
      }
      ctx.closePath()
      ctx.stroke();
      //ctx.draw(0, 0, 500, 500);
    }
    //ctx.restore();
  },

  //绘制伞骨
  drawLines: function (ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.setStrokeStyle(mColorLines);
    for (var i = 0; i < mCount; i++) {
      var x = mCenter + mRadius * Math.cos(mAngle * i) * lineprecent;
      var y = mCenter + mRadius * Math.sin(mAngle * i) * lineprecent;
      ctx.moveTo(mCenter, mCenter);
      ctx.lineTo(x, y);
    }
    ctx.stroke();
    //ctx.restore();
    //ctx.draw(0, 0, 500, 500);
    var oldPrectet = lineprecent;
    lineprecent = lineprecent + speed;
    if (oldPrectet < 1 && lineprecent > 1) {
      lineprecent = 1;
    }
  },
  //绘制顶点文本
  drawText: function (ctx) {
    ctx.save();
    var fontSize = mCenter / 12 * 1;
    // ctx.font = fontSize + 'px Microsoft Yahei';
    ctx.setFontSize(fontSize);
    ctx.setFillStyle(mColorText);
    for (var i = 0; i < mCount; i++) {
      var x = mCenter + mRadius * Math.cos(mAngle * i);
      var y = mCenter + mRadius * Math.sin(mAngle * i);
      //通过不同的位置，调整文本的显示位置
      if (mAngle * i >= 0 && mAngle * i < Math.PI / 2) {
        ctx.fillText(mData[i][0], x + 15, y + fontSize - 5);
      } else if (mAngle * i == Math.PI / 2) {
        ctx.fillText(mData[i][0], x - 10, y + fontSize + 10);
      } else if (mAngle * i > Math.PI / 2 && mAngle * i <= Math.PI) {
        ctx.fillText(mData[i][0], x - 40, y + fontSize - 10);
      } else if (mAngle * i > Math.PI && mAngle * i <= Math.PI * 3 / 2) {
        ctx.fillText(mData[i][0], x - 15, y - 10);
      } else {
        ctx.fillText(mData[i][0], x, y - 8);
      }
      console.log('这里有打印些什么吗？');
    }
    //ctx.restore();
    //ctx.draw(0, 0, 500, 500);
  },
  //绘制用户圆形头像
  drawPhoto: function (ctx) {
    var that = this;
    ctx.save();
    that.circleImg(ctx, "../images/detail2/detail7.jpg", mCenter - 32, mCenter - 32, 32);
    //ctx5.stroke();
    //ctx5.restore();
    ctx5.draw(0, 0, mW, mH);
  },
  circleImg: function (ctx, img, x, y, r) {
    ctx.save();
    var d = 2 * r;
    var cx = x + r;
    var cy = y + r;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.clip();
    ctx.drawImage(img, x, y, d, d);
  },
  //绘制数据区域 外在
  drawRegion: function (ctx, outColor) {
    ctx.save();
    ctx.beginPath();
    for (var i = 0; i < mCount; i++) {
      var x = mCenter + mRadius * Math.cos(mAngle * i) * mData[i][1] / 100 * precent;
      var y = mCenter + mRadius * Math.sin(mAngle * i) * mData[i][1] / 100 * precent;
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.save();
    ctx.setFillStyle(outColor);
    ctx.fill();
    ctx.draw(0, 0, 500, 500);
    var oldPrectet = precent;
    precent = precent + speed;
    if (oldPrectet < 1 && precent > 1) {
      precent = 1;
    }
  },
  //绘制数据区域2 内心
  drawRegion2: function (ctx, innerColor) {
    ctx.save();
    ctx.beginPath();
    for (var i = 0; i < mCount; i++) {
      var x = mCenter + mRadius * Math.cos(mAngle * i) * mData2[i][1] / 100 * precent2;
      var y = mCenter + mRadius * Math.sin(mAngle * i) * mData2[i][1] / 100 * precent2;
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.save();
    ctx.setFillStyle(innerColor);
    ctx.fill();
    ctx.draw(0, 0, 500, 500);
    var oldPrectet = precent2;
    precent2 = precent2 + speed;
    if (oldPrectet < 1 && precent2 > 1) {
      precent2 = 1;
    }
  },

  //画雷达
  clickCanvas: function () {
    var that = this;
    precent = 0;
    precent2 = 0;
    lineprecent = 0;
    clearInterval(that.Interval);
    clearInterval(that.lineInterval);
    ctx1.clearRect(0, 0, mW, mH);
    ctx2.clearRect(0, 0, mW, mH);
    ctx3.clearRect(0, 0, mW, mH);
    ctx4.clearRect(0, 0, mW, mH);
    ctx5.clearRect(0, 0, mW, mH);
    var outColor = "rgba(183, 179, 156, 0.8)";
    var innerColor = "rgba(228,215,182,0.8)";
    that.lineInterval = setInterval(function () {//渐进画伞骨
      if (lineprecent <= 1) {
        that.drawLines(ctx2);
        ctx2.draw(0, 0, 500, 500);
      } else {
        clearInterval(that.lineInterval);
      }
    }, spaceTime - 20);

    setTimeout(function () {//渐进画数据区域块
      that.Interval = setInterval(function () {
        if (precent <= 1) {
          that.drawRegion(ctx3, outColor);
          that.drawRegion2(ctx4, innerColor);
        } else {
          clearInterval(that.Interval);
        }
      }, spaceTime - 20);
    }, 10);
    that.drawPhoto(ctx5);
    console.info("我点击canvas")
  },
  radarcanvas1: function () {
    var that = this;
    const ctx1 = wx.createCanvasContext('radarcanvas1');
    precent = 0;
    lineprecent = 0;
    that.drawPolygon(ctx1);//画伞架
    that.drawText(ctx1);//画文字
    ctx1.draw(0, 0, 500, 500);
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