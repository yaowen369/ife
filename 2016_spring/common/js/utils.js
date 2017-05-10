/**
 * Created by yw on 17/5/10.
 */

function CommonUtils() {

    /**
     * 这三个方法参考 https://jaketrent.com/post/addremove-classes-raw-javascript/
     */
    this.hasClass = function (el, className) {
        if (el.classList){
            return el.classList.contains(className);
        }else {
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }
    };
    

    this.addClass = function (el, className) {
        if (el.classList){
            el.classList.add(className);
        }else if (!this.hasClass(el, className)) {
            el.className += (" " + className);
        }
    };
    
    this.removeClass = function (el, className) {
        if (el.classList){
            el.classList.remove(className);
        }else if (this.hasClass(el, className)){
            var reg = new RegExp(new RegExp('(\\s|^)' + className + '(\\s|$)'));
            el.className = el.className.replace(reg, " ");
        }
    }
}