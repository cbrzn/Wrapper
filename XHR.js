var wrapper = new XMLHttpRequest();
var text = "text2.txt";
var method = document.getElementById("request");
var params = 'Name=Cesar';


	function getText() {
		wrapper.onreadystatechange = function() {
	    	if (this.readyState == 4 && this.status == 200) {
			document.getElementById('Name').value = this.responseText;
	    	}
	  	};
		wrapper.open('GET', "text.txt");
		wrapper.send();
	}

	function getText2() {
		wrapper.open('POST', 'text2.txt');
	    wrapper.setRequestHeader('Content-Type', 'text/xml');
		wrapper.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			document.getElementById('Name').value = this.responseText;
	    	} else {
	    		console.log (wrapper.readyState);
	    	}
		};
		wrapper.send(params);
	}
  
