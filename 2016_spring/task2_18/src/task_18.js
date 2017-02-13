
//作为全局对象的 队列
var queue = [];

Array.prototype.remove = function(val){
	var index = this.indexOf(val);
	if (val >= 0){
		this.splice(index, 1);
	}
}

function getInputValue(){
	var value = document.getElementById("inputBox").value;
	console.log("getInputValue() value = " + value);
	
	if (!isEmpty(value)){
		
		if (isNum(value)){
			return value;
		}else {
			alert("你输入的 " +  value +"  不是数字");
		}
	}
}

//判断是否是数字
function isNum(s){
	
	if (!isNaN(s)){
		return true;
	}
	return false;
}

//判断一个值是否为空
function isEmpty(val){
	if (val!=null && val!=undefined && val!=""){
		return false;
	}
	return true;
}

//根据 queue的值，来绘制 各个方格 box
function drawBoxes(){
	var boxWrapper = document.getElementById("boxWrapper");
	boxWrapper.innerHTML = "";
	for (let i=0; i<queue.length; i++){
		boxWrapper.innerHTML += "<div class='num-box' onclick='boxClick(this)'>" + queue[i] +"</div>"
	}
}

//四个监听方法
function leftInsertClick(){
	console.log("leftInsertClick()");
	var value = getInputValue();
	if (!isEmpty(value)){
		queue.unshift(value);
	}
	console.log("quequ = " + queue);
	drawBoxes();
}

function rightInsertClick(){
	console.log("rightInsertClick()");
	var value = getInputValue();
	if (!isEmpty(value)){
		queue.push(value);
	}
	console.log("quequ = " + queue);
	drawBoxes();
}

function leftOutClick(){
	console.log("leftOutClick()");
	var value = queue.shift();
	if (!isEmpty(value)){
		alert("左侧出  = " + value);
	}
	console.log("quequ = " + queue);
	drawBoxes();
}

function rightOutClick(){
	console.log("rightOutClick()");
	var value = queue.pop();
	if (!isEmpty(value)){
		alert("右侧出  = " + value);
	}
	console.log("quequ = " + queue);
	drawBoxes();
}

function boxClick(id){
	console.log(id.innerHTML);
	queue.remove(id.innerHTML);
	drawBoxes();
}


