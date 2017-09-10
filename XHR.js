var wrapper = new XMLHttpRequest();

function getText() {
	wrapper.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    	document.getElementById("text").innerHTML = this.responseText;
    	}
  	};

	wrapper.open("GET", "text.txt", true);
	wrapper.send();
}

function getText2() {
	wrapper.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
		document.getElementById("text").innerHTML = this.responseText;
	  	}
	};

	wrapper.open("GET", "text2.txt");
	wrapper.send();
}