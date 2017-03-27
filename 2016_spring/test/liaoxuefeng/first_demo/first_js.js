'use strict';


var liaoTest = {
    // xiaoming : {
		// name : 'xiaoming',
		// birth : 1990,
		// middle_school : "No.1 Middle School",
		// print : function () {
		//
    //     }
    // },
    //
    // print : function () {
		// var str = "";
		// if (arguments.length > 0){
		// 	str += arguments[0];
		// }
    //
		// str += "  name = ";
		// str += this.xiaoming.name;
		// str += "\t schopl = "
		// str += this.xiaoming.middle_school;
    //
		// str += "\t score = ";
		// str += this.xiaoming.score;
    //
		// console.log(str);
    // },

    test : function () {

		var Student = {
			name : 'Robot',
			height : 1.2,
			run : function () {
				console.log(this.name + ' is running');
            }
		};

		var Bird = {
			fly : function () {
				console.log(this.name + " is flying");
            }
		}

		function createStudne(name) {
			var s = Object.create(Student);
			s.name = name;
			return s;
        }

        var xiaoming = createStudne("xiao_ming");
		xiaoming.run();
		console.log(xiaoming.__proto__ === Student);

        // var xiaoming = {
			// name : 'xiaoming'
        // };
        //
        // xiaoming.__proto__ = Student;
        //
        // console.log(xiaoming.name);
        // xiaoming.run();
        // console.log("------------1----------------");
        // xiaoming.__proto__ = Bird;
        // // xiaoming.run();
        // console.log("------------2----------------");
        // xiaoming.fly();
    }, //end of test1

	test2:function () {

		function Student(name) {
			this.name = name;
        }
        
        Student.prototype.hello = function () {
			console.log("hello2, " + this.name + "!");
        }

        var xiaoming = new Student("xiaoMing");
		// console.log(xiaoming.name);
		// xiaoming.hello();

		var xiaojun = new Student("xiaoJun");

		var result = "result_1=";
		result += (xiaoming.constructor === Student.prototype.constructor);
		result += "\t result_2=";
		result += (Student.prototype.constructor === Student);
		result += "\t result_3=";
		result += (Object.getPrototypeOf(xiaoming) === Student.prototype);
		result += "\t result_4=";
		result += (xiaoming instanceof Student);

		var secondResult = "1=";
		secondResult += (xiaoming.hello === xiaojun.hello);
		secondResult += "\t 2=";
		secondResult += (xiaoming === xiaojun);
		secondResult += "\t 3=";
		// secondResult += (xiaoming instanceof  xiaojun);

		console.log(result);
		console.log(secondResult);
    }//end of "test2:"
};


window.onload = liaoTest.test2();


//
// function Student(name) {
//     this.name = name;
//     this.hello = function () {
//         console.log("Hello, " + this.name + "!");
//     }
// }
//
// var xiaoming = new Student("xiaoMing");
// // console.log(xiaoming.name);
// // xiaoming.hello();
//
// var xiaojun = new Student("xiaoJun");
//
// var result = "result_1=";
// result += (xiaoming.constructor === Student.prototype.constructor);
// result += "\t result_2=";
// result += (Student.prototype.constructor === Student);
// result += "\t result_3=";
// result += (Object.getPrototypeOf(xiaoming) === Student.prototype);
// result += "\t result_4=";
// result += (xiaoming instanceof Student);
//
// var secondResult = "11=";
// secondResult += (xiaoming.hello === xiaojun.hello);
// secondResult += "\t 22=";
// secondResult += (xiaoming === xiaojun);
// secondResult += "\t 33=";
// // secondResult += (xiaoming instanceof  xiaojun);
//
// // console.log(result);
// console.log(secondResult);




