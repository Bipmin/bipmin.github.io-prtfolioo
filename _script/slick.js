
$(function () {
	$('.js_Buttom_title').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
		console.log("aa");

		if (isInView) {
			console.log("a");
			//要素の全体が見えるようになったときに実行する処理
			//document.getElementById("Buttom_title").classList.remove("gray");
			//document.getElementById("Buttom_title").classList.add("white");
		} else {
			console.log("-a");
			document.getElementById("Buttom_title").classList.remove("white");
			document.getElementById("Buttom_title").classList.add("gray");

		}
	});

	$('.js_Buttom_About').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
		console.log("bb");

		if (isInView) {
				console.log("a");
			//要素の全体が見えるようになったときに実行する処理
			document.getElementById("Buttom_About").classList.remove("gray");
				document.getElementById("Buttom_About").classList.add("white");
		} else {
			console.log("-a");
			document.getElementById("Buttom_About").classList.remove("white");
			document.getElementById("Buttom_About").classList.add("gray");

		}

	});

	$('.js_Buttom_Works').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
		console.log("cc");

		if (isInView) {
			console.log("a");
			//要素の全体が見えるようになったときに実行する処理
			document.getElementById("Buttom_Works").classList.remove("gray");
			document.getElementById("Buttom_Works").classList.add("white");
		} else {
			console.log("-a");
			document.getElementById("Buttom_Works").classList.remove("white");
			document.getElementById("Buttom_Works").classList.add("gray");

		}
	});

	$('.js_Buttom_Form').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			console.log("a");
			//要素の全体が見えるようになったときに実行する処理
			document.getElementById("Buttom_Form").classList.remove("gray");
			document.getElementById("Buttom_Form").classList.add("white");
		} else {
			console.log("-a");
			document.getElementById("Buttom_Form").classList.remove("white");
			document.getElementById("Buttom_Form").classList.add("gray");

		}
	});

});

