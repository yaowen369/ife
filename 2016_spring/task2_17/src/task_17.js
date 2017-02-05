/**
var aqiSouceData = {
	"北京" :{
		"2016-01-01" : 10,
		"2016-01-02" : 10,
		"2016-01-03" : 10,
		"2016-01-04" : 10
	}
};

*/

/**
//我们最后要把数据转化为这种类型的数据结构，来方便最后的显示处理
var aqiAllSourceData = {
	"北京":{
		"日":{
			"2016-01-01" : 10,
			"2016-01-02" : 12,
			"2016-01-03" : 16
			// ....
		},
		"周":{
			"2016-01月第1周":11,
			"2016-01月第2周":13
			//...
		},
		"月":{
			"2016-01":15,
			"2016-02":13,
			//...
		}
	}, //end of "北京"
	"上海":{
		//....
	}
}
**/

//以下两个函数用语随机模拟生成测试数据
function getDateStr(dat){
	var y = dat.getFullYear();
	var m = dat.getMonth() + 1;
	m = m<10 ? "0"+m : m;
	var d = dat.getDate();
	d = d<10 ? "0"+d : d;
	return y +"-" + m + "-" +d;
}

function randomBuildData(seed){
	var returnData = {};
	var dat = new Date("2016-01-01");
	var datStr = "";
//	const N = 92;
	const N = 8;
	for (let i=0; i<N; i++){
		datStr = getDateStr(dat);
		returnData[datStr] = Math.ceil(Math.random() * seed);
		dat.setDate(dat.getDate() + 1);
	} 
	return returnData;
}

var aqiSourceData = {
	"北京" : randomBuildData(500),
	"上海" : randomBuildData(300),
	"广州" : randomBuildData(200),
	"深圳" : randomBuildData(100),
	"成都" : randomBuildData(300),
	"西安" : randomBuildData(400),
	"福州" : randomBuildData(350),
	"厦门" : randomBuildData(250),
	"沈阳" : randomBuildData(150)
};

var aqiAllSourceData = {
	
};

//初始化我们的数据结构
function initDataStruct(){
	for (var keyCity in aqiSourceData){
		//生成 "日" 的数据
		var dayObject = new Object();
		for (var keyDate in aqiSourceData[keyCity]){
			dayObject[keyDate] = aqiSourceData[keyCity][keyDate];
		}
		
		//生成 "周" 的数据,我们把一个月分成四周或者五周来计算，一个月开始或者结束几天（不足7天）也都算成单独一周，
		//和它前后的月份不关联
		var weekObject = new Object;
		var countValue = 0;
		var countDay = 0;
		var countWeek = 1;
		var oldMonth = 0;
		
		var firstGetMonth = false;
		
		for (var keyDate in aqiSourceData[keyCity]){
			console.log("keyCity=" + keyCity +"\t keyDate=" + keyDate);
			countValue += aqiSourceData[keyCity][keyDate];
			countDay++;
			var dat = new Date(keyDate);
//			Date dat = new Date("2016-01-03");
			
			if (!firstGetMonth){
				oldMonth = dat.getMonth();
				firstGetMonth = true;
			}
			
			if (dat.getMonth() != oldMonth){ //该周还没计算完成呢，就到下一月了，那么剩余到这几天也算是单独一周
				var keyStr = dat.getFullYear() + "-" + (dat.getMonth()+1) + "月第" + countWeek + "周";
				weekObject[keyStr] = countValue / countDay;
				
				oldMonth = dat.getMonth();
				countWeek = 1;
				countValue = 0;
				countDay = 0;
				continue;
			}

			if (dat.getDay()  === 6){
				var keyStr = dat.getFullYear() + "-" + (dat.getMonth()+1) + "月第" + countWeek + "周";
				weekObject[keyStr] = countValue / countDay;
				countWeek++;
				countValue = 0;
				countDay = 0;
			}
		}
		
		//生成 "月"  的数据
		var monthObject = new Object();
		var oldMonth2 = -1;
		var countDay2 = 0;
		var countValue2 = 0;
		for (var keyDate in aqiSourceData[keyCity]){
			var dat2 = new Date(keyDate);
			if (oldMonth2 === -1){
				oldMonth2 = dat2.getMonth();
			}
			
			countDay2++;
			countValue2 += aqiSourceData[keyCity][keyDate];
			
			if (dat2.getMonth() != oldMonth){
				var keyStr = dat2.getFullYear() +"-" + (oldMonth+1);
				monthObject[keyStr] = countValue2/countDay2;
				countDay2 = 0;
				countValue2 = 0;
				oldMonth = dat2.getMonth();
			}
		}
		
		
		//将每一个城市的数据添加进入
		var cityObject = new Object();
		cityObject["日"] = dayObject;
		cityObject["周"] = weekObject;
		cityObject["月"] = monthObject;
		
		aqiAllSourceData[keyCity] = cityObject;
	}
}

//初始化界面上的ui
function initUi(){
	//城市选择的select
	var citySelect = document.getElementById("city-select");
	for (var key in aqiSourceData){
		var optionNode = document.createElement("option");
		optionNode.appendChild(document.createTextNode(key));
		citySelect.appendChild(optionNode);
	}
}

function selectChange(id){
	
}

//开始 流程进行方法
function start(){
	initDataStruct();
	initUi();
}


start();


