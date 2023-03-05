var arr1 = []
var arr2 = []
var arr3 = []
var arr4 = []
var arr5 = []
var arr6 = []

//初期値の設定
function TypingInit() {
	$('.js_typing_title').each(function (i) { //js_typingクラスを全て処理をおこなう
		arr1[i] = new ShuffleText(this);//動作させるテキストを配列に格納
	});

	$('.js_typing_Profile').each(function (i) { //js_typingクラスを全て処理をおこなう
		arr2[i] = new ShuffleText(this);//動作させるテキストを配列に格納
	});

	$('.js_typing_Biography').each(function (i) { //js_typingクラスを全て処理をおこなう
		arr3[i] = new ShuffleText(this);//動作させるテキストを配列に格納
	});
	$('.js_typing_ProfileText').each(function (i) { //js_typingクラスを全て処理をおこなう
		arr4[i] = new ShuffleText(this);//動作させるテキストを配列に格納
	});
	$('.js_typing_works').each(function (i) { //js_typingクラスを全て処理をおこなう
		arr5[i] = new ShuffleText(this);//動作させるテキストを配列に格納
	});
	$('.js_typing_form').each(function (i) { //js_typingクラスを全て処理をおこなう
		arr6[i] = new ShuffleText(this);//動作させるテキストを配列に格納
	});

}


////スクロールした際のアニメーションの設定
function TypingAnime_title() {
	$(".js_typing_title").each(function (i) {

			arr1[i].start();//配列で登録テキストのアニメーションをおこなう
			arr1[i].duration = 1000;//テキストが最終変化するまでの時間※規定値600
			$(this).addClass("endAnime");//１度アニメーションした場合はendAnimeクラスを追加
	});
}

function TypingAnime_Profile() {

	$(".js_typing_Profile").each(function (i) {

		arr2[i].start();//配列で登録テキストのアニメーションをおこなう
		arr2[i].duration = 600;//テキストが最終変化するまでの時間※規定値600
		$(this).addClass("endAnime");//１度アニメーションした場合はendAnimeクラスを追加
	});
}

function TypingAnime_ProfileText() {

	$(".js_typing_ProfileText").each(function (i) {

		arr4[i].start();//配列で登録テキストのアニメーションをおこなう
		arr4[i].duration = i * 200;//テキストが最終変化するまでの時間※規定値600
		$(this).addClass("endAnime");//１度アニメーションした場合はendAnimeクラスを追加
	});
}


function TypingAnime_Biography() {

	$(".js_typing_Biography").each(function (i) {

		arr3[i].start();//配列で登録テキストのアニメーションをおこなう
		arr3[i].duration = i * 200;//テキストが最終変化するまでの時間※規定値600
		$(this).addClass("endAnime");//１度アニメーションした場合はendAnimeクラスを追加
	});
}

function TypingAnime_works() {

	$(".js_typing_works").each(function (i) {

		arr5[i].start();//配列で登録テキストのアニメーションをおこなう
		arr5[i].duration = 600;//テキストが最終変化するまでの時間※規定値600
		$(this).addClass("endAnime");//１度アニメーションした場合はendAnimeクラスを追加
	});
}


function TypingAnime_form() {

	$(".js_typing_form").each(function (i) {

		arr6[i].start();//配列で登録テキストのアニメーションをおこなう
		arr6[i].duration = 600;//テキストが最終変化するまでの時間※規定値600
		$(this).addClass("endAnime");//１度アニメーションした場合はendAnimeクラスを追加
	});
}

$(function () {
	$('.js_typing_title').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
		TypingAnime_title();
});

	$('.js_typing_P').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
		TypingAnime_Profile();
	});

	$('.js_typing_PT').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
		TypingAnime_ProfileText();
	});


	$('.js_typing_B').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
		TypingAnime_Biography();
	});

	$('.js_typing_w').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
		TypingAnime_works();
	});

	$('.js_typing_f').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
		TypingAnime_form();
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

