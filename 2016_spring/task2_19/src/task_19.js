'use strict';

const randomQuantity = 10;  //随机生成50个数字
const minInputValue = 10;   //输入数字的最小值
const maxInputValue = 100;   //输入数字的最大值

function each(arr, fn){
	for (let i=0; i<arr.length; i++){
		fn(arr[i], i);
	}
}

//队列 对象
var queue = {
	arr:[],
	maxQuantity:60,
	
	leftIn:function(val){
		if (!this.isMax()){
			this.arr.unshift(val);
			this.debugPrint();
			this.paint();
		}else{
			tis.maxPrompt();
		}
	},
	
	rightIn:function(val){
		if (!this.isMax()){
			this.arr.push(val);
			this.debugPrint();
			this.paint();
		} else {
			maxPrompt();
		}
	},
	
	leftOut:function(){
		if (!this.isEmpty()){
			var leftValue = this.arr.shift();
			this.debugPrint();
			alert("移除" + leftValue);
			this.paint();
		} else {
			this.emptyPrompt();
		} 
	},
	
	rightOut:function(){
		if (!this.isEmpty()){
			var rightValue = this.arr.pop();
			this.debugPrint();
			alert("移除" + rightValue);
			this.paint();
		} else {
			this.emptyPrompt();
		}
	},
	
	clear:function(){
		while (this.arr.length>0){
			this.arr.pop();		
		}
		this.paint();
	},
	
	//排序
	sort:function () {
		this.arr.sort(function(x, y){
			if (x < y) return -1;
			if (x > y) return 1;
			return 0;
		});
		
		this.paint();
	},
	
	
//	function(x, y){
//		if (x < y) return -1;
//		if (x > y) return 1;
//		return 0;
//	}
	
	//将数组打乱
	upset:function(){
		this.arr.sort(function(){
			return (0.5 - Math.random()); 
		});
		this.paint();
	},
	
	//删除第id个数据
	deleteId:function(id){
		console.log("delteId  id=" + id);
		this.arr.splice(id, 1);
		this.debugPrint();
		this.paint();
	},
	
	//绘制图形的方法
	paint:function(){
		var innerStr = "";
		each(this.arr, function operation(val, count){
			innerStr += ("<div class=\"bar-style\" style=\"height: "
				+ (2*val) + "px; left: " + (count*20) + "px;\">"
				+ (val) + "</div>");
		});
		
//		console.log("innerStr = " + innerStr);
		document.getElementById("bar-wrapper").innerHTML = innerStr;
		addListener();
	},
	
	
	
	isEmpty:function(){
		return this.arr.length === 0;
	},
	
	isMax:function(){
		return this.arr.length > this.maxQuantity;
	},
	
	maxPrompt:function(){
		alert("已经达到了我们的上限制" + this.maxQuantity + "个，不能再添加了")	;
	},

	emptyPrompt:function(){
		alert("已经为空啦，不能再删除啦");
	},

	debugPrint:function(){
		var str = "";
		for (let i=0; i<this.arr.length; i++){
			str += this.arr[i];
			str += ", ";
		}
		console.log(str);
	}
	
}; //end of "var queue = {... "


//事件绑定函数，兼容浏览器差异
function addEvent(element, event, listener) {
    if (element.addEventListener) {
        element.addEventListener(event, listener, false);
    }
    else if (element.attachEvent) {
        element.attachEvent("on" + event, listener);
    }
    else {
        element["on" + event] = listener;
    }
}



function addListener(){
	var container = document.getElementById("bar-wrapper");
	for (let i=0; i<container.childNodes.length; i++){
		container.childNodes[i].addEventListener("click", function(){
			console.log("addListener i= " + i);
			queue.deleteId(i);
		});
	}
}

function leftInsertClick(){
	var value = getInputValue();
	if (value != null){
		queue.leftIn(value);
	}
}

function rightInsertClick(){
	var value = getInputValue();
	if (value != null){
		queue.rightIn(value);
	}
}

function leftOutClick(){
	queue.leftOut();
}

function rigthOutClick(){
	queue.rightOut();
}

function sortClick(){
	
	queue.sort();
	
	//下面使用的方式实际上是快排
//	console.log("sortClick() -> before =");
//	queue.debugPrint();
//	
//	quickSort(queue.arr, 0, queue.arr.length-1);
//	console.log("sortClick() -> after =");
//	queue.debugPrint();
//	
//	queue.paint();
}

function random50Click(){
	var randomValue;
	queue.clear();
	for (let i=0; i<randomQuantity; i++){
		randomValue = Math.ceil(Math.random()*100);
		if (randomValue<minInputValue || randomValue>maxInputValue){
			i--;
			continue;
		}
		queue.leftIn(randomValue);
	}
}

function clearClick(){
	queue.clear();
}

function upsetClick(){
	queue.upset();
}

function getInputValue(){
	var value = document.getElementById("inputBox").value;
	console.log("getInputValue()  value=" + value);
	
	if (isNaN(value)){
		alert("只能输入数字");
		return null;
	}
		
	
	if (value<minInputValue || value>maxInputValue){
		alert("输入范围是" + minInputValue + "~" + maxInputValue);
		return null;
	}
	
	return value;
}


function quickSort(dataArr, low1, high1){
	var pivotPos = -1;
	if(low1 < high1){
		pivotPos = oneQuickSort(dataArr, low1, high1);
		quickSort(dataArr, low1, pivotPos-1);
		quickSort(dataArr, pivotPos+1, high1);
	}
}

//一趟快排
function oneQuickSort(dataArr, low2, high2){
//	dataArr[0] = dataArr[low];
	var piovtKey = dataArr[low2];
	while(low2 < high2){
		while(low2<high2 && dataArr[high2]>=piovtKey){
			high2--;
		}	
		dataArr[low2] = dataArr[high2];
		while(low2<high2 && dataArr[low2]<=piovtKey){
			low2++;
		}
		dataArr[high2] = dataArr[low2];
	}
	dataArr[low2] = piovtKey;
	return low2;
}







