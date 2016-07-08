/**
 * Created by Web on 28.06.2016.
 */
var login = prompt('Please, enter your login', 'admin');
if(login == 'admin'){
    var pass = prompt('Please, enter your password');
		if(pass == 'passw0rd'){
			alert('Welcome home!');
		}else if(pass == null){
			alert('Canceled');
		}else{
			alert('Wrong password');
		}
}else if(login == null){
	alert('Canceled');
}else{
	alert('Access denied');
}