'use strict';

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
	
	
	//绘制图形的方法
	paint:function(){
		var innerStr = "";
		each(this.arr, function operation(val, count){
			innerStr += ("<div class=\"bar-style\" style=\"height: "
				+ (2*val) + "px; left: " + (count*20) + "px;\">"
				+ (val) + "</div>");
		});
		
		console.log("innerStr = " + innerStr);
		document.getElementById("bar-wrapper").innerHTML = innerStr;
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
		console.log(this.arr);
	}
	
}; //end of "var queue = {... "


function leftInsertClick(){
	queue.leftIn(getInputValue());
}

function rightInsertClick(){
	queue.rightIn(getInputValue());
}

function getInputValue(){
	var value = document.getElementById("inputBox").value;
	console.log("getInputValue()  value=" + value);
	
	return value;
}
