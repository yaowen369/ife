/**
 * Created by yw on 17/3/14.
 */


window.onload = function () {

    run();

    //执行的总方法
    function run() {
        document.getElementById("insert-btn").addEventListener("click", insertBtnClick);
        document.getElementById("queryBtn").addEventListener("click", queryBtnClick);
    };




    function insertBtnClick() {
        var splitStrArr = [];
        var inputStr = document.getElementsByTagName("textarea")[0].value;
        console.log("inputStr = " + inputStr);
        var words = inputStr.split(/[^a-zA-Z0-9\u4e00-\u9fa5]/);
        for (let i=0; i<words.length; i++){
            //有时候分割会造成 空格内容，所以这里过滤一下
            if (words[i].length !== 0){
                splitStrArr[splitStrArr.length] = words[i];
            }
        }
        createBox(splitStrArr);
       
    }

    function queryBtnClick() {
        var queryStr = document.getElementsByTagName("INPUT")[2].value;
        console.log("queryStr = " + queryStr);
    }

    function createBox(strs) {
        var contentDiv = document.getElementById("content-div");

        for (let i=0; i<strs.length; i++){
            console.log("i=" + i + "\t " + strs[i]);
            var elem = document.createElement("p");
            elem.appendChild(document.createTextNode(strs[i]));
            elem.className = "box";
            contentDiv.appendChild(elem);
        }
    }



};
