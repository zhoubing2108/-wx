Page({
  data:{
    uhide:2
  },
  onLoad:function (options) {
    var that = this;
    var data = {
      "datas":[
        {
          "id":1,
          "useData":"2018-12-04",
          "userName":"zhoubing",
          "class":12,
          "price":"45$",
          "text":"来一段说明文字，来一段说明文字，来一段说明文字"
        },
        {
          "id": 2,
          "useData": "2018-12-04",
          "userName": "zhoubing",
          "class": 12,
          "price": "45$",
          "text": "来一段说明文字，来一段说明文字，来一段说明文字"
        },
        {
          "id": 3,
          "useData": "2018-12-04",
          "userName": "zhoubing",
          "class": 12,
          "price": "45$",
          "text": "来一段说明文字，来一段说明文字，来一段说明文字"
        },
        {
          "id": 4,
          "useData": "2018-12-04",
          "userName": "zhoubing",
          "class": 12,
          "price": "45$",
          "text": "来一段说明文字，来一段说明文字，来一段说明文字"
        },
        {
          "id": 5,
          "useData": "2018-12-04",
          "userName": "zhoubing",
          "class": 12,
          "price": "45$",
          "text": "来一段说明文字，来一段说明文字，来一段说明文字"
        }
      ]
    };
    that.setData({
      carInfoData:data.datas
    })

  },
  toggleBtn:function(e){
    var that = this;
    var toggleBtnVal = that.data.uhide;
    var itemId  = e.currentTarget.id;
    if (toggleBtnVal == itemId) {
      that.setData({
        uhide:0
      })

    }else{
      that.setData({
        uhide:itemId
      })
    }
  }

});