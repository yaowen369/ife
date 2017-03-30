/**
 * Created by Administrator on 2017/3/27.
 */

function changeOnClick() {
    var spanes = document.getElementsByTagName("SPAN");
    //ArrayLike
    spanes = Array.prototype.slice.call(spanes);
    for (let i=0; i<spanes.length; i++){
        var spanText = spanes[i].childNodes[0].nodeValue;
        var spanParent = spanes[i].parentNode;
        var parentText = spanParent.innerHTML;

        parentText = parentText.replace(/<span.*span>/, spanText);

        spanParent.innerHTML = parentText;
    }
}

function changeOnClick2() {
    var spanes = document.getElementsByTagName("SPAN");
   while (spanes.length > 0) {
        var spanText = spanes[0].childNodes[0].nodeValue;
        var spanParent = spanes[0].parentNode;
        var parentText = spanParent.innerHTML;

        parentText = parentText.replace(/<span.*span>/, spanText);

        spanParent.innerHTML = parentText;
    }
}

function test() {
    var a = 1;
    a++;
    setTimeout(function () {
        var a = 2;
    }, 3000);
    alert(++a);
    console.log(a);
}
