var generateBtn = document.getElementById('passwordForm_submit'),
	uppercase = document.getElementById('passwordForm_uppercase'),
	numbers = document.getElementById('passwordForm_number'),
	symbols = document.getElementById('passwordForm_special');

function strpbrk(haystack, char_list) {
  //  discuss at: http://phpjs.org/functions/strpbrk/
  // original by: Alfonso Jimenez (http://www.alfonsojimenez.com)
  // bugfixed by: Onno Marsman
  //  revised by: Christoph
  // improved by: Brett Zamir (http://brett-zamir.me)
  //   example 1: strpbrk('This is a Simple text.', 'is');
  //   returns 1: 'is is a Simple text.'

  for (var i = 0, len = haystack.length; i < len; ++i) {
    if (char_list.indexOf(haystack.charAt(i)) >= 0) {
      return haystack.slice(i);
    }
  }
  return false;
}

function newPassword(){
	var stringInit = "abcdefghjkmnpqrstuvwxyz",
	lenghtOfPassword = document.getElementById('passwordForm_caracternumber').value,
	password = "";

	if (uppercase.checked) {
		stringInit += "ABCDEFGHJKLMNPQRSTUVWXYZ";
	}

	if (numbers.checked) {
		stringInit += "123456789";
	}
	
	if (symbols.checked) {
		stringInit += "*$%!:;.,?&(-_)=#{[@]}";
	}

	for (i=0; i < lenghtOfPassword; i++) {
		password += stringInit.charAt(Math.random()*stringInit.length);
	}
	//console.log(password);
	return password;
}

generateBtn.onclick = function(e){
	e.preventDefault();
	newPassword();
	password = newPassword();
	console.log(password);
	if (uppercase.checked) {
		if (!strpbrk(password,"ABCDEFGHJKLMNPQRSTUVWXYZ")){
			newPassword();
		}
	}
	if (numbers.checked) {
		if (!strpbrk(password,"123456789")){
			newPassword();
		}
	}
	if (symbols.checked) {
		if (!strpbrk(password,"*$%!:;.,?&(-_)=#{[@]}")){
			newPassword();
		}
	}
}