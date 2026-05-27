function generateQR() {
	text = document.getElementById("string-input").value
	if (text == "" || !text) {
		document.getElementById("string-input").value = "Please input a string here!"
	}
	document.getElementById("qr-display").innerHTML = ""
	new QRCode(document.getElementById("qr-display"), {
		text: text,
		width: 128,
		height: 128
	})
}
