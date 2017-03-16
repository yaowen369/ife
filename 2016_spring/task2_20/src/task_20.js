/**
 * Created by yw on 17/3/14.
 */


window.onload = function () {

    //验证 中文，英文，阿拉伯数字的 正则表达式
    // const  reg = "^[a-zA-Z0-9\u4e00-\u9fa5]+$";
    const  reg = "[^a-zA-Z]";

    run();

    //执行的总方法
    function run() {
        document.getElementById("insert-btn").addEventListener("click", insertBtnClick);
        document.getElementById("queryBtn").addEventListener("click", queryBtnClick);
    };




    function insertBtnClick() {
        var inputStr = document.getElementsByTagName("textarea")[0].value;
        console.log("inputStr = " + inputStr);
        var words = inputStr.split(/[^a-zA-Z]/);
        var tmp = "";
        for (let i=0; i<words.length; i++){
            tmp += words[i];
            console.log("i=" + i + "\t" + words[i]);
            tmp += "\t";
        }
        console.log("----------------");
        console.log(tmp);
    }

    function queryBtnClick() {
        var queryStr = document.getElementsByTagName("INPUT")[2].value;
        console.log("queryStr = " + queryStr);
    }




};
