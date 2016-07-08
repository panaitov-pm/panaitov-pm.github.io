/*task1

var browser;

if(browser === 'IE'){
	alert('use ie');
}else if(browser === 'Chrome' || browser === 'FF' || browser === 'Safari' || browser === 'Opera'){
	alert('Browser is OK');
}else{
	alert('Who is here?');
}


task2

var a = +prompt('Pls enter A', '');

switch(a){
	case 0:
		alert(0); break;
	case 1:
		alert(1); break;
	case 2:
	case 3:
		alert('2, 3'); break;
	default:
		break;
}

for(var i = 0; i<=10; i++){
	i+=2;
	console.log(i);
}
*/
for (var i = 1, d=''; i<=7; i++){
	d+='#';
	console.log(d + '/n');
}