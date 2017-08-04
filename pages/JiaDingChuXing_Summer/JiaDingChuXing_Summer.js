// about.js
var myDate = new Date();
const hours = []
const minutes = []
const departure=[]
var month=8
var day=5
departure.push("嘉定校区")
departure.push("上海汽车城")
departure.push("四平路校区")
for (let i = 0; i < 24; i++) {
  hours.push(i)
}
for (let i = 0; i < 60; i++) {
  minutes.push(i)
}

Page({
  data: {
    focus: false,
    inputValue: '',
    //滑动框
    hours:hours,
    minutes:minutes,
    departure:departure,
    value: [0,myDate.getHours(), myDate.getMinutes()],
    date: '2017-08-05',
  },
  //滑动框实现
  bindChange: function (e) {
    const val = e.detail.value

    var timeTableMetroSummerJD = [6.75, 7.25, 7.75, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 22];
    var timeTableMetroSpecialJD = [6.75, 7.25, 7.75, 9, 10, 11, 11.75, 13, 14, 15, 16, 17, 18, 19, 19.5, 20, 20.5, 21, 22];

    var timeTableMetroSummerQC=[7, 7.5, 8, 9.25, 10.25, 11.25, 13.25, 15.25, 17.25, 18.25, 19.25, 20.25, 21.25, 22.25];
    var timeTableMetroSpecialQC = [7, 7.5, 8, 9.25, 10.25, 11.25, 12, 13.25, 14.25, 15.25, 16.25, 17.25, 18.25, 19.25, 19.75, 20.25, 20.75, 21.25, 22.25];

      
    var tempMetro = 0, houMetro = 0, minMetro = 0;
    var returnStringMetro = "短驳车已停运";

    
    if(val[0]==0)
    {
        if (month = 9 && (day == 1 || day == 8 || day == 9 || day == 10 || day == 11 || day == 15 || day == 16 || day == 17))
        {
          for (var i = 0; i < 19; i++) {
            if (val[1] + (val[2] / 60) <= timeTableMetroSpecialJD[i]) {
              tempMetro = timeTableMetroSpecialJD[i];
              break;
            }
          }
        }else
        {
          for (var i = 0; i < 14; i++) {
            if (val[1] + (val[2] / 60) <= timeTableMetroSummerJD[i]) {
              tempMetro = timeTableMetroSummerJD[i];
              break;
            }
          }
        }
    }
    if (val[0] == 1) {
      if (month = 9 && (day == 1 || day == 8 || day == 9 || day == 10 || day == 11 || day == 15 || day == 16 || day == 17)) {
        for (var i = 0; i < 19; i++) {
          if (val[1] + (val[2] / 60) <= timeTableMetroSpecialQC[i]) {
            tempMetro = timeTableMetroSpecialQC[i];
            break;
          }
        }
      } else {
        for (var i = 0; i < 14; i++) {
          if (val[1] + (val[2] / 60) <= timeTableMetroSummerQC[i]) {
            tempMetro = timeTableMetroSummerQC[i];
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


  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value[6])
    month=e.detail.value[6];
    day = parseInt(e.detail.value[8] + e.detail.value[9]);
    this.setData({
      date: e.detail.value
    })
  },
  onShareAppMessage: function (res) {
    path: '/pages/JiaDingChuXing'

  }



})

