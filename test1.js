/**
 * Created by hoangnsh on 2/21/17.
 */
function drawLine(row, length) {
    var str = "";
    for (var i = 0; i <= length; i++) {
        //if(i%2==0){
        //str = str.concat(drawPoint(row, i) ? '+' : ' ');    }
        //else {
        //    str = str.concat(drawPoint(row, i) ? '+' : ' ');    }
        str= str+" ";
        if(row === i){
            str = str+"+";
        }

    }
    return str;
}
function drawPoint(row, col) {
    //if (row % 2 === 0) {
    //    return col % 2 === 0;
    //} else {
    //    return col % 2 !== 0;
    //}
    if(col==row){
        return true;
    }else return false;
}


function drawEveything() {
    var row = 10;
    var length = 10;
    for (var i = 0; i <= row; i++) {
        console.log(drawLine(row, length));
    }

}
drawEveything();