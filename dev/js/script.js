function attrValueText(text) {
	let searchRegExp = /[^A-Za-z-_0-9]/gm;
	let whiteSpecaRegExp = /\s/g;
	text = text.replace(whiteSpecaRegExp, "-").toLowerCase();
	var result = text.trim().replace(searchRegExp, "");
	return result;
}

function smoothScroll(offset) {
	let offsetTop = 0;
	let destination;
	scroll(0, offsetTop);
	//Obtain hash value from URL and declare destination to scroll to
	if (window.location.hash != "") {
		destination = document.querySelector(window.location.hash);
		if (destination != null) {
			scroll({
				top: destination.offsetTop,
				behavior: "smooth",
			});
		}
	}
	for (anchor of document.querySelectorAll("a")) {
		let link = anchor.href;
		if (link.match(window.location.origin + window.location.pathname + "#")) {
			anchor.addEventListener("click", function (event) {
				event.preventDefault();
				window.location.hash = this.hash;
				scroll({
					top: document.querySelector(this.hash).offsetTop,
					behavior: "smooth",
				});
			});
		}
	}
}

//Function to replace last coincidence
String.prototype.replaceLast = function (what, replacement) {
	var pcs = this.split(what);
	var lastPc = pcs.pop();
	return pcs.join(what) + replacement + lastPc;
};

window.onload = function () {
	scroll(0, 0);
	//every article that needs to be filled
	addWebBrowsers("#webBrowsers"); //Web Brosers data from program_web_browser.js
	addOnTo(browsersData);

	addWsl2("#wsl"); //Windows subsystem Linux 2 data from program_wsl2.js
	addWinUtils("#winUtils"); //Windows utilities and configs from program_win_utils.js
	addOnTo(winUtils);

	addCodeEditors("#codeEditors"); //Code editors and configs from program_code_editors.js
	//	addPlugins("#plugins"); //Addons, plugins or extensions and its configs from program_addons.js
	addOnTo(codeEditors);

	addPlugins("#plugins"); //Addons, plugins or extensions and its configs from program_addons.js
	smoothScroll();
};
