const ProjectBiz = require('../../../biz/project_biz.js');
const pageHelper = require('../../../../../helper/page_helper.js');
const ProductBiz = require('../../../biz/product_biz.js');
const projectSetting = require('../../../public/project_setting.js');

Page({
	/**
	 * 页面的初始数据
	 */
	data: {

	},

	/**
		 * 生命周期函数--监听页面加载
		 */
	onLoad: async function (options) {
		ProjectBiz.initPage(this);

		this._getSearchMenu();

		if (options && options.id) {
			this.setData({
				_params: {
					sortType: 'cateId',
					sortVal: options.id,
				}
			});
		} else {
			this.setData({

				_params: {
					sortType: 'cateId',
					sortVal: '',
				}
			});
		}
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () { },

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: async function () {

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

	url: async function (e) {
		pageHelper.url(e, this);
	},

	bindCommListCmpt: function (e) {
		pageHelper.commListListener(this, e);
	},


	onShareAppMessage: function () {

	},

	_getSearchMenu: function () {
		ProductBiz.setCateTitle();

		let sortItem1 = [{
			label: '户型',
			type: 'type',
			value: ''
		}];
		for (let k = 0; k < projectSetting.PRODUCT_TYPE.length; k++) {
			sortItem1.push({ label: projectSetting.PRODUCT_TYPE[k], type: 'type', value: projectSetting.PRODUCT_TYPE[k] });
		}

		let sortItems = [sortItem1];
		let sortMenus = [
			{ label: '全部', type: 'area', value: '' },
		];
		for (let k = 0; k < projectSetting.PRODUCT_AREA.length; k++) {
			sortMenus.push({ label: projectSetting.PRODUCT_AREA[k], type: 'area', value: projectSetting.PRODUCT_AREA[k] });
		}

		this.setData({
			sortItems,
			sortMenus
		})

	}

})