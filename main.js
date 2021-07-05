var servResponse = document.querySelector('#response');


document.forms.ourForm.onsubmit = function(e){
	e.preventDefault();

	// userInput = encodeURIComponent(userInput);
	var userInput = document.forms.ourForm.ourForm__inp.value;

	var xhr = new XMLHttpRequest();

	// xhr.open("GET", "form.php?" + "ourForm__inp" + "userInput");
	xhr.open("POST", "/form.php");

	xhr.setRequestHeader("Content-Type", 
		"application/x-www-form-urlencoded");


	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4 && xhr.status === 200) {
			servResponse.textContent = xhr.responseText;
		}
	};

	xhr.send("ourForm__inp=" + userInput); 

};
