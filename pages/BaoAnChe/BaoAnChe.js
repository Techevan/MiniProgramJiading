// Jiading.js
const contactInfo=[];
contactInfo.push("许师傅 13636627089");
contactInfo.push("朱师傅 13611864829");
contactInfo.push("郑师傅 15921636686");
contactInfo.push("崇师傅 13651619256");
contactInfo.push("周师傅 15001869842");
contactInfo.push("华师傅 13818239668");
contactInfo.push("潘师傅 15800332836");
contactInfo.push("余师傅 13681982661");
contactInfo.push("李师傅 13818890686");
contactInfo.push("陈师傅 13917222486");
contactInfo.push("唐师傅 15800349979");
contactInfo.push("陈良余 13671966353");
contactInfo.push("孙俊辉 13162113258");
contactInfo.push("无名氏 18217063518");
var contactNum="NULL";
Page({
  data: {
    contactInfo:contactInfo,
    value: [7]
  },
  bindChange1: function (a) {
    const val = a.detail.value;
    contactNum = "";
    for(let i=4;i<15;i++)
    {
      contactNum += contactInfo[val[0]][i];
    }
    this.setData({
      contactNumber: this.data.contactInfo[val[0]],
    })
 },
  setCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: contactNum
    })
    this.setData({
      disabled: !this.data.disabled
    })
  },
  onShareAppMessage: function (res) {
    path: '/pages/JiaDingChuXing'

  }
})
