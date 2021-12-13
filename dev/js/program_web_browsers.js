const browsersData = [
	{
		name: "Google Chrome Dev",
		href: "https://www.google.com/chrome/dev/",
		img: {
			class: "chrome",
			src: "assets/img/webBrowser-chromeDev.svg",
		},
		linkInfo: "(Direct Download)",
		desc: "Google Chrome for developers was built for the open web. You can test cutting-edge web platform APIs and developer tools that are updated weekly.",
	},
	{
		name: "Firefox Developer Edition",
		href: "https://download.mozilla.org/?product=firefox-devedition-stub&os=win&lang=es-ES",
		img: {
			class: "firefox",
			src: "assets/img/webBrowser-firefoxDev.svg",
		},
		linkInfo: "(Go to web)",
		desc: "Firefox Developer Edition is the blazing fast browser that offers cutting edge developer tools and latest features included in the user (normal or non developer) browser.",
	},
	{
		name: "Opera Developer",
		href: "https://www.opera.com/computer/beta",
		img: {
			class: "firefox",
			src: "assets/img/webBrowser-operaDeveloper.svg",
		},
		linkInfo: "(Go to web)",
		desc: "This version is the bleeding edge development from Opera; features will be piloted, and may be shelved, taken back to the drawing board, or taken forward to the Opera Next stream.",
	},
];
/*
{
	name: "",
	href: "",
	img: {
		class: "",
		src: "",
	},
	linkInfo: "",
	desc: "",
},
*/

function addWebBrowsers(destination) {
	let dest = document.querySelector(destination);
	/*main list tag*/
	mainList = document.createElement("ol");

	for (var browser of Object.values(browsersData)) {
		/* Generate the li tag for current element list */
		li = document.createElement("li");
		li.id = attrValueText(browser.name);

		/* Link info */
		let linkContainer = document.createElement("h3");
		let link = document.createElement("a");
		let text = document.createTextNode(browser.name);
		link.title = browser.name;
		link.href = browser.href;
		link.target = "_blank";
		link.appendChild(text);

		/*img info*/
		img = document.createElement("img");
		img.src = browser.img.src;
		img.className = browser.img.class;

		/*span img container*/
		span = document.createElement("span");
		span.className = "logo inline";
		span.appendChild(img);

		//append link inner data (image and text)
		link.appendChild(span);

		linkContainer.appendChild(link);

		/*description container*/
		desc = document.createElement("span");
		desc.className = "description";
		text = document.createTextNode(browser.desc);
		desc.appendChild(text);

		secondLink = document.createElement("a");
		secondLink.title = "Download " + browser.name;
		secondLink.href = browser.href;
		secondLink.target = "_blank";
		secondLink.className = "button";
		text = document.createTextNode("Download " + browser.linkInfo);
		secondLink.appendChild(text);

		/* append link to list*/
		li.appendChild(linkContainer);
		li.appendChild(desc);
		li.appendChild(secondLink);

		mainList.appendChild(li);
	}
	dest.appendChild(mainList);
}
