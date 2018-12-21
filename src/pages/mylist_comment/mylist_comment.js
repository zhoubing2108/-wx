// pages/mylist_comment/mylist_comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkboxItems: [
      { name: '可以复选', value: '0', checked: true },
      { name: 'standard is dealicient for u.', value: '1' },
      { name: '能安稳宝宝情绪，减少宝宝哭闹，是个专业的月嫂', value:'2'},
      { name: '兼顾妈妈产后，做家务干净利落，体贴耐心', value:'3'},
      { name: '照顾宝宝比较生疏，做事缺乏主动性', value:'4' }
      
    ],
    riderCommentList: [{
      value: '衣着整洁',
      selected: true ,
      title: '衣着整洁'
    },{
      value: '金牌月厨',
      selected: false ,
      title: '金牌月厨'
    },{
      value: '热情大方',
      selected: false ,
      title: '热情大方'
    },{
      value: '服务专业',
      selected: false ,
      title: '服务专业'
    },{
      value: '微笑服务',
      selected: false ,
      title: '微笑服务'
    },{
      value: '穿着专业',
      selected: false ,
      title: '穿着专业'
    },{
      value: '家务能手',
      selected: true,
      title: '家务能手'
    },{
      value: '星级月嫂',
      selected: false,
      title: '星级月嫂'
    }

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var checkboxItems = this.data.checkboxItems, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems
    });
  },
  mycheckboxChange(e) {
    console.log('mycheckboxChange e:', e);
    let string = "riderCommentList[" + e.target.dataset.index + "].selected"
    this.setData({
      [string]: !this.data.riderCommentList[e.target.dataset.index].selected
    })
    let detailValue = this.data.riderCommentList.filter(it => it.selected).map(it => it.value)
    console.log('所有选中的值为：', detailValue)
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