

const N = 10;
var arr = [];


function creaetArrClick(){
	for (let i=0; i<N; i++){
		arr[i] = Math.ceil(Math.random()*100);
	}
	debugPrint("生成字符串");
}

function quickSortClick(){
	quickSort(arr, 0, arr.length-1);
	debugPrint("排序之后");
	console.log("---------------------------");
}

function quickSort(dataArr, low1, high1){
	var pivotpos = -1;
	if(low1 < high1){
		pivotPos = oneQuickSort(dataArr, low1, high1);
		quickSort(dataArr, low1, pivotPos-1);
		quickSort(dataArr, pivotPos+1, high1);
	}
}

//一趟快排
function oneQuickSort(dataArr, low2, high2){
//	dataArr[0] = dataArr[low];
	var piovtKey = dataArr[low2];
	while(low2 < high2){
		while(low2<high2 && dataArr[high2]>=piovtKey){
			high2--;
		}	
		dataArr[low2] = dataArr[high2];
		while(low2<high2 && dataArr[low2]<=piovtKey){
			low2++;
		}
		dataArr[high2] = dataArr[low2];
	}
	dataArr[low2] = piovtKey;
	return low2;
}

function debugPrint(str){
	console.log( str + " " + arr);
}


