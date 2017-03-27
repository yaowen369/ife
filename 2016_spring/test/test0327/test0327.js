/**
 * Created by Administrator on 2017/3/27.
 */

function changeOnClick() {
    var spanes = document.getElementsByTagName("SPAN");
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
