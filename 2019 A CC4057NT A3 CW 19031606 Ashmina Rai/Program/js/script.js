function validateForm() {
	var fname = document.forms["myform"]['fname'].value;
	var lname = document.forms["myform"]['lname'].value;
	var message = document.forms["myform"]['message'].value;
	var email = document.forms["myform"]["email"].value;

	if (fname== "") {
		alert("Please fill your first Name");
		return false;
	}
	else if (lname == "") {
		alert("Please fill yout Last name");

		return false;
	}
	else if (message == "") {
		alert("Please write your message");
		return false;
	}
	else if(email == ""){
		alert("Please write your e-mail")
		return false;
	}
	else{
		alert("Thankyou for your feedback")
		return false;
	}
}