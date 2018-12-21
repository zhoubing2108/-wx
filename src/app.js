//app.js
// const observer = require('./utils/observer').observer;
// import store from './stores/index';
// 小程序中不支持省略调用

const {
	host
} = require('./config/CONSTANT.js');
App({
			onLaunch: function() {
				wx.login({
					success: e => {
						wx.request({
							url: `${host}/api/login`,
							method: 'POST',
							data: {
								code: e.code
							},
							success: e => {
								try {
									let data = JSON.parse(e.data);
									// console.log(typeof(data.session_id));
									wx.setStorageSync(key, data)('session_id', data.session_id);
								} catch (e) {
									// console.error(e);
								}
							}
						});
					},
					fail: function(res) {
						wx.showModal({
							titie: '提示',
							content: '必须授权登录之后才能操作',
							showCancel: false,
							success: function(res) {
								if (res.confirm) {
									wx.openSetting({
										success: res => {
											res.authSetting = {
												'scope.userInfo': true
											};
										}
									});
								}
							}
						});
					}
				});
			},
			globalData: {
				store: new store()
			}
		});