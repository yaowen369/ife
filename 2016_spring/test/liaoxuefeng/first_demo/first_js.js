'use strict';


var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历Array
    alert(x);
}
for (var x of s) { // 遍历Set
    alert(x);
}
for (var x of m) { // 遍历Map
    alert(x[0] + '=' + x[1]);
}



//var a = ['A', 'B', 'C'];
//a.forEach(function (element, index, array) {
//  // element: 指向当前元素的值
//  // index: 指向当前索引
//  // array: 指向Array对象本身
//  alert(index);
//});




//var m = new Map();
//var s = new Set();
//alert("浏览器支持 map和set");



//var s ='Hello';
//alert(s[9]);
//alert(s);

//var xiaoMing = {
//	name:'xiaoMing',
//	age:20
//}
//
//for (var key in xiaoMing){
//	alert(key);
//}


