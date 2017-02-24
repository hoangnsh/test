
/***
 * function initDraw(param1, param2) return (xxx, yyyy)
 *
 * function drawLine(row, length, drawPoint) return string
 *
 * function drawPoint(row, col) return boolean. true draw + sign, false draw space
 */
var rows, cols;

function initDraw() {
    rows = 14;
    cols = 14;
}
/***
 *
 * @param row {Number}
 * @param col {Number}
 * @return {Boolean} True vẽ + False vẽ
 */
function drawAll() {
    return true;
}

function drawStar(rowIndex, colIndex) {
    if (rowIndex % 2 ===0) {
        return colIndex % 2 === 0;
    } else {
        return colIndex % 2 !== 0;
    }
}

function drawBox(rowIndex, colIndex, rows, length) {
    var thick = 1;
    return (rowIndex < thick || rowIndex >= rows - thick || colIndex < thick || colIndex >= length - thick);
}

function drawCross(rowIndex, colIndex) {
    return (rowIndex === colIndex);
}
function drawDoubleSquare(rowIndex, colIndex, rows, length){
    var thick=1; var space=2;
    return (rowIndex < thick || rowIndex >= rows - thick || colIndex < thick || colIndex >= length - thick||(rowIndex>=thick+space&&colIndex>=thick+space&&rowIndex<rows-thick-space&& colIndex<length-thick-space) );
}
function drawQuaTram(rowIndex, colIndex, rows, length){
    var thick = 1;
    return (rowIndex < thick || rowIndex >= rows - thick || colIndex < thick || colIndex >= length - thick||colIndex+rowIndex==(length-1)/2||colIndex+rowIndex==length+(length-1)/2-1)||colIndex==((length-1)/2+rowIndex)|| colIndex==((length-1)/2+rowIndex)-(length-1);
}
function drawQuaChamLongNhau(rowIndex, colIndex, rows, length){
    var thick = 1;var space=3;
    return ((rowIndex+colIndex==(length-1)/2+space)&&(colIndex<(rows+1)/2)||rowIndex < thick || rowIndex >= rows - thick || colIndex < thick || colIndex >= length - thick||colIndex+rowIndex==(length-1)/2||colIndex+rowIndex==length+(length-1)/2-1)||colIndex==((length-1)/2+rowIndex)|| colIndex==((length-1)/2+rowIndex)-(length-1);

}

function  drawDoubleTriangel(rowIndex, colIndex, rows, length){
    var thick=1;
    return (rowIndex < thick || rowIndex >= rows - thick || colIndex < thick || colIndex >= length - thick|| colIndex==(rows-rowIndex-1)/2||colIndex==(length-colIndex)||rowIndex/2==colIndex||colIndex==(length+rowIndex)/2||rowIndex==(length-colIndex)*2);
}
function drawflag(rowIndex,colIndex,rows,length){
    var thick=1;
    return(rowIndex<thick||rowIndex>=rows-thick||colIndex<thick||colIndex>=length-thick||(colIndex== 4&&(rowIndex<5||rowIndex>10))||(colIndex==10&&(rowIndex<5||rowIndex>10))||(rowIndex==5&&(colIndex<5||colIndex>=10))||(rowIndex==10&&(colIndex<5||colIndex>=10)));
}
function  drawCaino(rowIndex,colIndex,rows,cols){
    var thick=1;
    return((rowIndex==colIndex||(rowIndex>=colIndex&&rowIndex+colIndex<=cols-1))||(rowIndex+colIndex==cols-1||(rowIndex+colIndex>=cols-1&&colIndex>=rowIndex))||rowIndex<thick||rowIndex>=rows-thick||colIndex<thick||colIndex>=cols-thick);
}
function drawHiHitle(rowIndex,colIndex,rows,cols){
    var thick=2;
    return(rowIndex<thick||rowIndex>=rows-thick||colIndex<thick||colIndex>=cols-thick||colIndex==cols/thick||colIndex==cols-thick/thick);
}
function drawLine(rowIndex, cols, drawFunction) {
    var str = "";
    for (var colIndex = 0; colIndex < cols; colIndex++) {
        str = str.concat(drawFunction(rowIndex, colIndex, rows, cols) ? '+ ' : '  ');
    }
    return str;
}


function drawEverything() {
    //TODO: Nhập dữ liệu từ người dùng

    //TODO: validate dữ liệu nếu thấy bất hợp lý thì throw error hoặc thoát chương trình

    initDraw();

    for (var i = 0; i < rows; i++) {
        console.log(drawLine(i, cols, drawHiHitle));
    }
}

drawEverything();