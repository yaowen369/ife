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

    /**
     * bug 重现过程，先搜ab，再搜ac
     */
    function queryBtnClick() {
        var queryStr = document.getElementsByTagName("INPUT")[2].value;
        console.log("queryStr = " + queryStr);

        //先进行一遍遍历，把内容当中包含span的给去掉，这样避免混乱
        var spanes = document.getElementsByTagName("SPAN");

        /**
         * 这句话，在 下面的html进行转化之后，为什么这里的spanes，length，直接就把长度减1了。
         */
        // for (let i=0; i<spanes.length; i++){

        for (let i=0; i<spanes.length; i++){
            var spanText = spanes[i].childNodes[0].nodeValue;
            var spanParent = spanes[i].parentNode;
            var parentText = spanParent.innerHTML;

            parentText = parentText.replace(/<span.*span>/, spanText);

            spanParent.innerHTML = parentText;

        }

        //再把包含选中内容的部分 设置span
        var boxes = document.getElementsByClassName("box");
        for (let i=0; i<boxes.length; i++){
            var text = boxes[i].childNodes[0].nodeValue;
            console.log("text = " + text);
            if (text.indexOf(queryStr) >= 0){

                var boxInnder = boxes[i].innerHTML;

                console.log("before boxInnder = " + boxInnder);
                boxInnder = boxInnder.replace(queryStr, "<span class='matching'>" + queryStr + "</span>");

                console.log("after boxInnder = " + boxInnder);
                // boxes[i].setAttribute("style", "color: red");
                boxes[i].innerHTML = boxInnder;
            }
        }
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
