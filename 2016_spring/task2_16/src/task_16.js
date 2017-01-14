/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};


/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var inputCity = document.getElementById("aqi-city-input");
	var inputValue = document.getElementById("aqi-value-input");
	
	//清除对象的所有属性
	for (key in aqiData){
		if (aqiData.hasOwnProperty(key)){
			delete aqiData[key];
		}
	}
	
	
	if (!isOnlyChineseEnglish(inputCity.value)){
		alert(inputCity.value + "  城市名字只能输入中英文哦");
		return;
	}else{
		console.log(inputCity.value +" 通过");
	}
	
	if (!isTwoDigital(inputValue.value)){
		alert(inputValue.value + "   最多输入两位数字");
		return;
	}else{
		console.log(inputValue.value +"  通过");
	}
	aqiData[inputCity.value] = inputValue.value;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("删除"));
	
	var city = document.createElement("td");
	var score = document.createElement("td");
	var btnTd = document.createElement("td");

    var isEmpty = true;
    //其实只有一个数据
	for (key in aqiData){
		city.appendChild(document.createTextNode(key));
		score.appendChild(document.createTextNode(aqiData[key]));
		isEmpty = false;
	}
	if (isEmpty){
		return;
	}
	
	btnTd.appendChild(btn);
	
	var tr = document.createElement("tr");
	tr.appendChild(city);
	tr.appendChild(score);
	tr.appendChild(btnTd);
	
	document.getElementById("aqi-table").appendChild(tr);
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  	addAqiData();
  	renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(btn) {
  // do sth.
//console.log("enter  delBtnHandle");
	var row = btn.parentNode.parentNode;
	row.parentNode.removeChild(row);
}

function init() {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
	document.getElementById("add-btn").onclick = addBtnHandle;
	
	document.getElementById("aqi-table").addEventListener("click", function(event){
		if (event.target.nodeName.toLowerCase() === "button"){
			delBtnHandle(event.target);
		}
	});	
}

//校验内容是否 仅仅包含 中英文。
function isOnlyChineseEnglish(str){
	var reg = /[\u4e00-\u9fa5a-zA-Z]/;
	return reg.test(str);
}

//校验内容是否 仅仅为两位数字
function isTwoDigital(str){
	var reg = /^[1-9][0-9]$|^[0-9]$/;
	var result = reg.test(str);
	return result;
}

init();
