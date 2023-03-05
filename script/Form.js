$(document).ready(function () {
    $('.js-input').keyup(function () {
        if ($(this).val()) {
            $(this).addClass('not-empty');
        } else {
            $(this).removeClass('not-empty');
        }
    })
});


$(document).ready(function () {

    //var url = location.href
    //alert(url);

    //if (url = ! "file:///D:/_Hp/prtfolio%20-%20%E3%82%B3%E3%83%94%E3%83%BC/index.html") {
    //    alert("aa");
    //    $('.js-input').val("");
    //    $('input').val("");
    //    alert("bb");

    //}

});

history.replaceState(null, null, null);
window.addEventListener('popstate', function (e) {
    alert('ブラウザバックを検知しました。');
});

$(document).ready(function () {
    $(window).on("beforeunload", function (e) {
        let navigationType = window?.performance?.getEntriesByType("navigation")[0].type;
        // let navigationType = e.currentTarget.performance.navigation.type;  // この書き方は非推奨

        switch (navigationType) {
            case "navigate":
                console.log(navigationType + " : ページ遷移");
                alert("aa");
                break;
            case "reload":
                console.log(navigationType + " : ページ更新");
                alert("aa");
                break;
            case "back_forward":
                console.log(navigationType + " : 戻る・進む");
                alert("aa");
                break;
            case "prerender":
                console.log(navigationType + " : prerender");
                break;
        }
    });

});
