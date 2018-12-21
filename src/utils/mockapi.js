let API_HOST = "http://xxx.com/xxx";
let DEBUG = true;
var Mock = require('mock.js');
function ajax(data = '', fn, method = "get", header = {}){
  if(!DEBUG){
    wx.request({
      url: config.API_HOST + data,
      method:method ? method : 'get',
      data: {},
      header:header ? header : {"Content-Type":"application/json"},
      success:function(res){
        fn(res);
      }
    });
  }else{
    var res = Mock.mock({
      'error_code':'',
      'error_msg':'',
      'data|10':[{
        'id|+1':1,
        'img':"@image('200x100','#4A7BF7','#fff','pic')",
        'title':'@ctitle(3,8)',
        'city':"@country(true)",
        'price':'@integer(100,2000)'
      }]
    })
    fn(res);
  }
}
function ajaxsecond(data = '', fn ,method  = 'post', header = {}){
  var secondres = Mock.mock({
    'data|1':[{
      'id|+1':1,
      'mes':"图片上传成功！",
      'messecond':"想办法返回对应的地址，让前端展示出来！"
    }]
  })
  fn(secondres);

}
module.exports = {
  ajax:{ajax,ajaxsecond}
}