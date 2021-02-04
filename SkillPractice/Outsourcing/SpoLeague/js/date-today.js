
var dayList = ['일', '월', '화', '수', '목', '금', '토'];

var today = new Date();
document.querySelector('#date-today').innerHTML = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;