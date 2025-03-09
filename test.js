(function() {
	console.log(Math.random());
	console.log();
	$('div').remove();
	setTimeout(function () {
		console.log($('div'));
	},1500);
})();
