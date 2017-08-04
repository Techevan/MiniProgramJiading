// about.js
var myDate = new Date();
const hours = []
const minutes = []
const weeks=[]
const departure=[]
departure.push("嘉定校区")
departure.push("上海汽车城")
departure.push("四平路校区")
for (let i = 0; i < 24; i++) {
  hours.push(i)
}
for (let i = 0; i < 60; i++) {
  minutes.push(i)
}
weeks.push("星期日")
weeks.push("星期一")
weeks.push("星期二")
weeks.push("星期三")
weeks.push("星期四")
weeks.push("星期五")
weeks.push("星期六")

Page({
  data: {
    focus: false,
    inputValue: '',
    //滑动框
    hours:hours,
    minutes:minutes,
    weeks:weeks,
    departure:departure,
    value: [0,myDate.getHours(), myDate.getMinutes(),myDate.getDay()]
  },
  //滑动框实现
  bindChange: function (e) {
    const val = e.detail.value

    var timeTableMetroWorkdayJD = [6.25, 6.5, 6.75, 7, 7.25, 7.5, 7.75, 8, 9, 10, 12.25, 13.25, 15.5,16.25, 17.5, 18.25, 19.25, 20.25, 20.75, 21.25, 22];
    var timeTableMetroSatJD = [6.75, 7.0, 7.25, 7.5, 7.75, 8, 10, 12.25, 14.25, 16.25, 18.25, 19.25, 20.25, 21.25, 22.0];
    var timeTableMetroSunJD = [6.75, 7, 7.25, 7.5, 7.75, 8, 10, 12.25, 14.25, 16.25, 17.5, 18.25, 19.25, 20.25, 20.75, 21.25, 22.25];
    var timeTableMetroWorkdayQC=[6.5,6.45,7,7.25,7.5,7.75,8,8.25,9.25,10.25,12.5,13.5,15.75,16.5,17.75,18.5,19.5,20.5,21,21.5,22.25];
    var timeTableMetroSatQC = [7, 7.25, 7.5, 7.75, 8, 8.25, 10.25, 12.5, 14.5, 16.5, 18.5, 19.5, 20.5, 21.5, 22.5];
    var timeTableMetroSunQC = [ 7, 7.25, 7.5, 7.75, 8, 8.25, 10.25, 12.5, 14.5, 16.5, 17.75, 18.5, 19.5, 20.5, 21, 21.5, 22.5];
      
    var tempMetro = 0, houMetro = 0, minMetro = 0;
    var returnStringMetro = "短驳车已停运";
    if(val[0]==0)
    {
        if(val[3]==0)//七号楼星期日
        {
          for (var i = 0; i < 17; i++) 
          {
            if (val[1] + (val[2] / 60) <= timeTableMetroSunJD[i]) {
              tempMetro = timeTableMetroSunJD[i];
              break;
            }
          }
        }
        if(val[3]==6)//七号楼星期六
        {
          for (var i = 0; i < 15; i++) {
            if (val[1] + (val[2] / 60) <= timeTableMetroSatJD[i]) {
              tempMetro = timeTableMetroSatJD[i];
              break;
            }
          }
        }
        if(val[3]>0&&val[3]<6)//七号楼工作日
        {
          for (var i = 0; i < 21; i++) {
            if (val[1] + (val[2] / 60) <= timeTableMetroWorkdayJD[i]) {
              tempMetro = timeTableMetroWorkdayJD[i];
              break;
            }
          }
        }
    }
    if (val[0] == 1) {
      if (val[3] == 0)//汽车城星期日
      {
        for (var i = 0; i < 17; i++) {
          if (val[1] + (val[2] / 60) <= timeTableMetroSunQC[i]) {
            tempMetro = timeTableMetroSunQC[i];
            break;
          }
        }
      }
      if (val[3] == 6)//七号楼星期六
      {
        for (var i = 0; i < 15; i++) {
          if (val[1] + (val[2] / 60) <= timeTableMetroSatQC[i]) {
            tempMetro = timeTableMetroSatQC[i];
            break;
          }
        }
      }
      if (val[3] > 0 && val[3] < 6)//七号楼工作日
      {
        for (var i = 0; i < 21; i++) {
          if (val[1] + (val[2] / 60) <= timeTableMetroWorkdayQC[i]) {
            tempMetro = timeTableMetroWorkdayQC[i];
            break;
          }
        }
      }
    }
    minMetro = tempMetro - parseInt(tempMetro);
    minMetro = minMetro * 60;
    houMetro = parseInt(tempMetro);
    if (houMetro != 0) {
      returnStringMetro = "下一班短驳车：" + houMetro.toString() + "时" + minMetro.toString() + "分";
    }
    if (val[0] == 2) {
      returnStringMetro = "短驳车在嘉定校区运营";
    }


    var timeTableBAKJD=[6,7.33,8.66,10,11.33,12.66,14,15,15.5,16.5,17,18,19,20,20.83];
    var timeTableBAKSP=[6,7.5,9,10.5,12,13.5,14.5,15,16,17,17.5,18,19,20,20.83];
    var tempBAK=0,houBAK=0,minBAK=0;
    var returnStringBAK="北安跨已停运";
    var runtimeStringBAK="";
    
    if (val[0] == 0)
    {
      for (var i = 0; i < 15; i++) {
        if (val[1] + (val[2] / 60) <= timeTableBAKJD[i]) {
          tempBAK = timeTableBAKJD[i];
          break;
        }
      }
    }
    if(val[0]==2)
    {
      for(var i=0;i<15;i++)
      {
        if (val[1] + (val[2] / 60) <= timeTableBAKSP[i]) {
          tempBAK = timeTableBAKSP[i];
          break;
        }
      }
    }
    
    if(tempBAK>=6&&tempBAK<=7.5)
    {
      runtimeStringBAK="大约行驶85分钟";
    }
    if(tempBAK>=8.5&&tempBAK<=14)
    {
      runtimeStringBAK = "大约行驶95分钟";
    }
    if(tempBAK>=14.5&&tempBAK<=18)
    {
      runtimeStringBAK = "大约行驶100分钟";
    }
    if(tempBAK==19)
    {
      runtimeStringBAK = "大约行驶95分钟";
    }
    if(tempBAK>=20&&tempBAK<=21)
    {
      if(val[0]==0)
      {
        runtimeStringBAK = "大约行驶85分钟";
      }
      if(val[0]==2)
      {
        runtimeStringBAK = "大约行驶80分钟";
      }
    }
   
    minBAK=tempBAK-parseInt(tempBAK);
    minBAK=minBAK*60;
    minBAK=minBAK.toFixed(0);
    houBAK=parseInt(tempBAK);
    if(houBAK!=0&&val[0]!=1){
      returnStringBAK="下一班北安跨："+houBAK.toString()+"时"+minBAK.toString()+"分";
    }
    if(val[0]==1)
    {
      returnStringBAK="北安跨从嘉定校区发车";
    }
    

    
    this.setData({
      hour: this.data.hours[val[1]],
      minute: this.data.minutes[val[2]],
      stringReturnMetro:returnStringMetro,  
      stringReturnBAK:returnStringBAK,
      stringRuntimeBAK:runtimeStringBAK,
    })
  },

  setLinkBaoAnChe: function (e) {
    console.log("HHH");
    wx.navigateTo({
      url: '/pages/BaoAnChe/BaoAnChe'
    })
  },
  setLinkSummer: function (e) {
    console.log("HHH");
    wx.navigateTo({
      url: '/pages/JiaDingChuXing_Summer/JiaDingChuXing_Summer'
    })
  },
  onShareAppMessage: function (res) {
    path: '/pages/JiaDingChuXing'

  }
})

