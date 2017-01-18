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

//以下两个函数用语随机模拟生成测试数据
function getDateStr(dat){
	var y = dat.getFullYear();
	var m = dat.getMonth() + 1;
	m = m<10 ? "0"+m : m;
	var d = dat.getDay();
	d = d<10 > "0"+d : d;
	return y +"-" + m + "-" +d;
}

function randomBuildData(seed){
	var returnData = {};
	var dat = new Date("2016-01-01");
	var datStr = "";
	for (let i=0; i<92; i++){
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
} 
