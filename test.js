/**
 * Created by hoangnsh on 2/21/17.
 * ve ma tran n
 */


/***
 * bai toan giai thua
 * @param x hang ngang
 * @param y hang doc
 */
function f(x, y) {


    //for (var t = 1; t <= y; t++) {
    //    if (t % 2 != 0) {
    //        var str = "";
    //        for (var i = 1; i <= x; i++) {
    //            if (i % 2 == 0) {
    //                str = str + "_";
    //            } else {
    //                str = str + "+";
    //            }
    //        }
    //        console.log(str);
    //    } else {
    //        var str1="";
    //        for (var i = 1; i <= x; i++) {
    //            if (i % 2 == 0) {
    //                str1 = str1 + "+";
    //            } else {
    //                str1 = str1 + "_";
    //            }
    //        }
    //       console.log(str1);
    //    }
    //
    //
    //}
    var str="";
    for (var i = 0; i < y; i++) {
        for (var j = 0; j < x; j++) {
            if(j==i||j==x-i-1){
                str=str+"+";
            }else {str=str+" ";}

        }
        console.log(str);
        str="";

    }

}
f(20,11 );
/***
 * bai toan giai thua
 * @param n
 * @returns {number}
 */
function factorial(n) {
    if (isNaN(n)) {
        throw new Error('n is not a number');
    }

    if (n === 0) return 1;

    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}


var giaithua = factorial;

const log = console.log;
//console.log(factorial('Hack'));

//console.log(giaithua(5));
/***
 * function drawPoint
 * @returns {boolean}
 */
function drawPoint(){
    return true;
}
/***
 *
 * @param row
 * @param lenth
 * @param drawPoint
 */
function drawLine(row,length,drawPoint){
    var str="";
    if (drawPoint){
       str="+";
    }
}
function drawEverything(){
 drawLine(8,8,true);
}
