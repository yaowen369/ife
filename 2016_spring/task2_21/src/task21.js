/**
 * Created by yw on 17/4/25.
 */

window.onload = function () {

    run();
    var tagList;
    var tagInput;

    function run() {
        tagList = new LinkedList();
        tagInput = document.getElementById("tagInput");

        document.getElementById("tagAddBtn").addEventListener("click", tagAddBtnClick);
        document.getElementById("tagDelBtn").addEventListener("click", tagDelBtnClick);
    };



    function tagAddBtnClick() {
        var str = tagInput.value.trim();
        console.log("inputAddValue = " + str);
        tagList.append(str);
        tagList.print();
    }

    function tagDelBtnClick() {
        var str = tagInput.value.trim();
        console.log("inputDelValue = " + str);
        tagList.removeElement(str);
        tagList.print();
    }


    //用链表实现一个队列，里面最多保存10个不重复的元素
    function LinkedList() {
        var Node = function (element) {
            this.element = element;
            this.next = null;
        };

        var length = 0;
        var head = null;
        var maxQuantity = 4;

        //在末尾添加元素，如果重复则不添加
        this.append = function (element) {

            if (this.isMaxLength()){
                this.remove();
            }

            var current = head;

            if (head === null){
                head = new Node(element);
                length++;
                return;
            }

            while (current != null){
                if (current.element === element){
                    break;
                }
                if (current.next === null){
                    current.next = new Node(element);
                    length++;
                    break;
                }
                current = current.next;
            }
        };

        //元素存在则删除，若元素不存在也不会改变队列
        this.removeElement = function(element){
            var current = head;
            //删除的是第一个元素
            if (head.element === element){
                this.remove();
                return;
            }

            while (current != null){
                if (current.next!=null
                    && current.next.element===element){
                    current.next = current.next.next;
                    length--;
                    break;
                }
                current = current.next;
            }
        };

        //删除 第一个元素
        this.remove = function () {
            if (head != null){
                head = head.next;
                length--;
            }
        };

        this.size = function () {
            return length;
        };

        this.isMaxLength = function () {
            if (length > maxQuantity){
                return true;
            }else {
                return false;
            }
        };

        this.print = function () {
          var string = "";
          var current = head;
          var i = 0;
          while (current != null){
              string += ("" + i + ":" + current.element + ",  ");
              i++;
              current = current.next;
          }

          console.log("list = " + string);

        };

    }// end of "function LinkedList( ... "
   
};