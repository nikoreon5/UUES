(function() {
	console.log(Math.random());
	console.log($('div[class="news-home-item "]:contains("Автор: Андреева")'));
	$('div[class="news-home-item "]:contains("Автор: Андреева")').remove();
	setTimeout(function () {
		console.log($('div[class="news-home-item "]:contains("Автор: Андреева")'));
	},1500);
})();
