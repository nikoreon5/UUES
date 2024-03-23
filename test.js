(function() {
	console.log(Math.random());
	console.log($('div[class="news-home-item "]:contains("Автор: Андреева")')[0]);
	$('div[class="news-home-item "]:contains("Автор: Андреева")').remove();
	setTimeout(function () {
		console.log($('div[class="news-home-item "]:contains("Автор: Андреева")')[0]);
	},1500);
})();
