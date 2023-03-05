

////スクロールした際のアニメーションの設定
function TypingAnime_title() {
	$("#parent").addClass("bgextend");
	$("#parent").addClass("bgLRextend");
	$("#co").addClass("bgappear");
}



$(function () {
	$('.js_typing_title').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
		TypingAnime_title();
	});


});


// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	TypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	TypingInit(); //初期設定
	TypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

