function get_number(value) {
	const n = parseInt(value, 10);
	
	if (Number.isNaN(n)) {
		return 0;
	}
	
	if (n < 0) return 0;
	if (n > 255) return 255;
	return n;
}

function add_px(value) {
	const n = parseInt(value, 10);
	
	if (Number.isNaN(n)) {
		return "0px";
	}
	
	return Math.max(0,n) + "px";
}

function change_paragraph_styles() {
	const p = document.getElementById("paragraph");
	
	const rB = get_number(document.getElementById("border_R").value);
	const gB = get_number(document.getElementById("border_G").value);
	const bB = get_number(document.getElementById("border_B").value);
	const wB = add_px(document.getElementById("border_width").value);
	
	p.style.borderColor = "rgb(" + rB + "," + gB + "," + bB + ")";
	p.style.borderWidth = wB;
	
	const rBg = get_number(document.getElementById("bg_R").value);
	const gBg = get_number(document.getElementById("bg_G").value);
	const bBg = get_number(document.getElementById("bg_B").value);
	
	p.style.backgroundColor = "rgb(" + rBg + "," + gBg + "," + bBg + ")";
	
	const rText = get_number(document.getElementById("text_R").value);
	const gText = get_number(document.getElementById("text_G").value);
	const bText = get_number(document.getElementById("text_B").value);

	p.style.color = "rgb(" + rText + "," + gText + "," + bText + ")";
}