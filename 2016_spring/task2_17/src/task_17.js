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

//计算一个对象的属性的长度
function length(obj){
	var count = 0;
	for (var i in obj){
		if (obj.hasOwnProperty(i)){
			count++;
		}
	}
	return count;
}

//得到一个随机的颜色值
function randomColor(){
	var color = "#"+Math.floor(Math.random()*16777215).toString(16);
	return color;
}

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
	const N = 1;
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

//我们使用这两个变量来标记 我们所选择的城市以及日期粒度
var selectCity = null;
var selectDate = "日";  //这个设定的初始值

const barWrapperTotalWidth = 1280;
const barMaxHeight = 50;

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
//			console.log("keyCity=" + keyCity +"\t keyDate=" + keyDate);
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
		if (selectCity === null){
			selectCity = key;
		}
		
		var optionNode = document.createElement("option");
		optionNode.appendChild(document.createTextNode(key));
		optionNode.setAttribute("value", key);
		citySelect.appendChild(optionNode);
	}
}

function selectChange(value){
	console.log("选中 " + value);
	selectCity = value;
}

function dateChange(value){
//	console.log("日期 " + value);
	switch(value){
		case "day":
			console.log("switch day");
			selectDate = "日";
			document.getElementById("date-day").classList.add("day-selected");
			document.getElementById("date-week").classList.remove("day-selected");
			document.getElementById("date-month").classList.remove("day-selected");
			break;
		case "week":
			console.log("switch week");
			selectDate = "周";
			document.getElementById("date-day").classList.remove("day-selected");
			document.getElementById("date-week").classList.add("day-selected");
			document.getElementById("date-month").classList.remove("day-selected");
			break;
		case "month":
			console.log("switch month");
			selectDate = "月";
			document.getElementById("date-day").classList.remove("day-selected");
			document.getElementById("date-week").classList.remove("day-selected");
			document.getElementById("date-month").classList.add("day-selected");
			break;
			default:
	}
}

//开始柱形图的绘制和计算
function calacAndDrawBar(){
	var sourceData = aqiAllSourceData[selectCity][selectDate];
	var barWrapper = document.getElementById("bar_wrapper");
	
	var barCount = length(sourceData);
	var barWidth = barWrapperTotalWidth / (barCount * 2 - 1);
	console.log("barCount=" + barCount + "\t barWidth=" + barWidth);
	
//	barWrapper.innerHTML += ("<p id=\"aqi-title\">") + getTitleText() + "</p>";
	
	var count = 0;

	for (var key in sourceData){
		
		var barLeftPosition = Math.ceil(barWidth*2*count);
		var hintLeftPosition = Math.ceil(barLeftPosition - (100-barWidth)/2);
		
		//最左边的进行处理
		if (hintLeftPosition < 0){
			hintLeftPosition = 0;
		}
		if ((hintLeftPosition+100) >= 1280){
			hintLeftPosition = 1180;
		}
		
		var hintStr = ("<div " + "id=\"" +  ("hintId" + count) + "\""
				+ " class=\"aqi-hint\"  "
				+ "style=\"left: " + hintLeftPosition + "px;  "
				+ "bottom: " + (sourceData[key] + 10) + "px;\">"
				+ "<p>" + (key) + "</p>"
				+ "<p>AQI:" + (sourceData[key]) + "</p>" + "</div>");
				
		console.log(hintStr);
//		barWrapper += hintStr;		
		
//		barWrapper.innerHTML += ("<div" + "id=\"" +  ("hintId" + count) + "\""
//				+ " class=\"aqi-hint\"  "
//				+ "style=\"left: " + hintLeftPosition + "px; "
//				+ "bottom: " + (sourceData[key] + 10) + "px;\">"
//				+ "<p>" + (key) + "</p>"
//				+ "<p>AQI:" + (sourceData[key]) + "</p>" + "</div>");
		
		
		
		var barStr = ("<div class=\"aqi-bar\" style=\"height: "
			+ sourceData[key] +"px;" + " width: " + Math.ceil(barWidth) +"px; "
			+ "background-color: " + randomColor() + "; "
			+ "left: " + barLeftPosition + "px;\"  "
			+ "onmouseover=\"mouseOver(" + count + ")\"  "
			+ "onmouseout=\"mouseOut(" + count + ")\""
			+ "/>");
			console.log(barStr);
			barWrapper.innerHTML += barStr;
			
			
//		barWrapper.innerHTML += ("<div class=\"aqi-bar\" style=\"height: "
//			+ sourceData[key] +"px;" + " width: " + Math.ceil(barWidth) +"px;"
//			+ "background-color: " + randomColor() + ";"
//			+ "left:" + barLeftPosition + "px;\"" + 
//			+ "onmouseover=\"mouseOver(" + count + ")\""
//			+ "onmouseout=\"mouseOut(" + count + ")\""
//			+ "/>");
			
			var logMsg = "left=" + barWidth*2*count + "  count=" + count;
//			console.log(logMsg);
			count++;
	}
	
	
//	barWrapper = "<div id=\"hintId0\" class=\"aqi-hint\"  style=\"left: 590px;  bottom: 252px;\"><p>2016-01-01</p><p>AQI:242</p></div>" 
//				+  "<div class=\"aqi-bar\" style=\"height: 242px; width: 1280px; background-color: #1db199; left: 0px;\"  onmouseover=\"mouseOver(0)\"  onmouseout=\"mouseOut(0)\"/>";
	
//	barWrapper =   "<div class=\"aqi-bar\" style=\"height: 242px; width: 1280px; background-color: #1db199; left: 0px;\"  onmouseover=\"mouseOver(0)\"  onmouseout=\"mouseOut(0)\"/>";
}

//当鼠标移动到物体上面时
function mouseOver(count){
	var idName = "hintId" + count;
	console.log("mouseOver() count = " + count + "\t idName=" + idName);
	document.getElementById(idName).style.visibility = "visible"
}

//当鼠标离开时
function mouseOut(count){
	var idName = "hintId" + count;
	console.log("mouseOut() count = " + count  + "\t idName=" + idName);
	document.getElementById(idName).style.visibility = "hidden"
}

//得到 aqi-title 中的文字内容
function getTitleText(){
	return selectCity + "01-03月每" + selectDate + "空气质量报告";
}

function test(){
	count = 1;
	var idName = "hintId" + count;
	console.log("test() count = " + count  + "\t idName=" + idName);
	document.getElementById(idName).style.visibility = "hidden"
}

//开始 整个流程
function start(){
	initDataStruct();
	initUi();
//	calacAndDrawBar();
	console.log("1111111111111");
	console.log(document.getElementById("bar_wrapper").innerHTML);
}


start();


