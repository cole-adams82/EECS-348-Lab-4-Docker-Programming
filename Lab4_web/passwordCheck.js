function validate_passwords() {
	const password1 = document.getElementById("password1").value;
	const password2 = document.getElementById("password2").value;
	
	if (password1.length < 8) {
		alert("First Password must be 8 or more characters.");
		return;
	}
	if (password2.length < 8) {
		alert("Second Password must be 8 or more characters.");
		return;
	}
	if (password1 !== password2) {
		alert("Passwords do not match.");
		return;
	}
	alert("Passwords are valid.");
}