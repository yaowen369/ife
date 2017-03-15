/**
 * Created by yw on 17/3/14.
 */


window.onload = task20();

function task20() {

    run();

    //执行的总方法
    function run() {
        document.getElementById("insert-btn").addEventListener("click", insertBtnClick);
        document.getElementById("queryBtn").addEventListener("click", queryBtnClick);
    };




    function insertBtnClick() {
        var inputStr = document.getElementsByTagName("textarea")[0].nodeValue;
        console.log("inputStr = " + inputStr);
    }

    function queryBtnClick() {
        var queryStr = document.getElementsByTagName("input")[2].nodeValue;
        console.log("queryStr = " + queryStr);
    }




};
