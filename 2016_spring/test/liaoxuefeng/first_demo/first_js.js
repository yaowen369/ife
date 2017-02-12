'use strict';


//Object.prototype.length = function(){
//	var count = 0 ;
//	for (var i in this){
//		count++;
//	}
//	return count;
//};
//
//
//var obj = {
//	a:1,
//	b:2,
//	c:3,
//	d:4
//};
//
//console.log(obj.length);


//var a = {a:1,b:2,c:3,d:4};
//2Object.prototype.length = function(){
//3     var count = 0;
//4     for(var i in this){
//5         count ++;
//6     }
//7     return count;
//	return 1;
//8 };


//var a = {a:1,b:2,c:3,d:4};
//
//function length(obj){
//	var count = 0;
//	for (var i in obj){
//		if (obj.hasOwnProperty(i)){
//			console.log( i +" = " + obj[i]);
//			count++;
//		}
//	}
//	return count;
//}
//
//console.log(length(a));  

function test(){
	var count = 0;
	while(count < 10000){
		var num = Math.ceil(Math.random()*10)-1;
		if (num>=10 || num<0){
			console.log("num = " +num);
		}
		count++;
	}
	console.log("over ");
}

test();





