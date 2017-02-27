'use strict';


var liaoTest = {
	xiaoming : {
		name : 'xiaoming',
		birth : 1990,
		middle_school : "No.1 Middle School",
		print : function () {
			
        }
	},

	print : function () {
		var str = "";
		if (arguments.length > 0){
			str += arguments[0];
		}

		str += "  name = ";
		str += this.xiaoming.name;
		str += "\t schopl = "
		str += this.xiaoming.middle_school;

		str += "\t score = ";
		str += this.xiaoming.score;

		console.log(str);
    },

    test : function () {
        console.log('middle_school' in this.xiaoming);
        console.log('toString' in this.xiaoming);
        console.log('print' in this.xiaoming);
		// this.print("before delete");
        //
        //
		// delete this.xiaoming.primary_school;
		// delete this.xiaoming.middle_school;
		// this.print("after delete");

		// console.log('middle_school' in this.xiaoming);

		var result_1 = this.xiaoming.hasOwnProperty("middle_school");
		var result_2 = this.xiaoming.hasOwnProperty("toString");
		var result_3 = this.xiaoming.hasOwnProperty("print");
		console.log(result_1);
		console.log(result_2);
		console.log(result_3);

    }
};


window.onload = liaoTest.test();






