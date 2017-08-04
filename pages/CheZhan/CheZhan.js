// CheZhan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  setLinkCaoangongluLvyuanlu: function (e) {
    wx.openLocation({
      latitude: 31.282280,
      longitude: 121.211222,
      name:"北安跨线乘车点",
      address:"曹安公路绿苑路站",
      scale: 18
    })
  }, 
  setLinkGuokangluSipinglu: function (e) {
    wx.openLocation({
      latitude: 31.286569,
      longitude: 121.502763,
      name: "北安跨线乘车点",
      address: "国康路四平路站",
      scale: 18
    })
  },
  setLinkJiasanlu: function (e) {
    wx.openLocation({
      latitude: 31.285359,
      longitude: 121.217490,
      name: "短驳车乘车点",
      address: "嘉三路（7号楼）",
      scale: 18
    })
  },
  setLinkShanghaiqichecheng: function (e) {
    wx.openLocation({
      latitude: 31.285111,
      longitude: 121.181903,
      name: "短驳车乘车点",
      address: "上海汽车城地铁站",
      scale: 18
    })
  },
  setLinkChifenglutingchechang: function (e) {
    wx.openLocation({
      latitude: 31.282168,
      longitude: 121.497282,
      name: "校车（定班车）乘车点",
      address: "赤峰路190号停车场",
      scale: 18
    })
  },
  setLinkGuanglounance: function (e) {
    wx.openLocation({
      latitude: 31.284699,
      longitude: 121.216375,
      name: "校车（定班车）乘车点",
      address: "广楼（G楼）南侧",
      scale: 18
    })
  },
  onShareAppMessage: function (res) {
    path: '/pages/JiaDingChuXing'

  }
 
})