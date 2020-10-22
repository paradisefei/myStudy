onmessage = function(e) {
    console.log(e.data);
    var num = 0;
	for (var i = 0; i < e.data; i++) {
		num += Math.sqrt(i);
    }
    postMessage(num);

    close();
}
