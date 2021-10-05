const browsersData = {
	Chrome: {
		name: "Google Chrome Dev",
		href: "https://www.google.com/chrome/dev/",
		img: {
			class: "chrome",
			src: "assets/img/chromeDevLogo.svg",
		},
		linkInfo: "(Direct Download)",
		desc: "Google Chrome for developers was built for the open web. You can test cutting-edge web platform APIs and developer tools that are updated weekly.",
	},
	Firefox: {
		name: "Firefox Developer Edition",
		href: "https://download.mozilla.org/?product=firefox-devedition-stub&os=win&lang=es-ES",
		img: {
			class: "firefox",
			src: "assets/img/firefoxDevLogo.svg",
		},
		linkInfo: "(Go to web)",
		desc: "Firefox Developer Edition is the blazing fast browser that offers cutting edge developer tools and latest features included in the user (normal or non developer) browser.",
	},
	Opera: {
		name: "Opera developer",
		href: "https://www.opera.com/download#developer",
		img: {
			class: "firefox",
			src: "assets/img/OperaDeveloper.svg",
		},
		linkInfo: "(Go to web)",
		desc: "This version is the bleeding edge development from Opera; features will be piloted, and may be shelved, taken back to the drawing board, or taken forward to the Opera Next stream.",
	},
};

function addWebBrowsers(destination) {
	let dest = document.querySelector(destination);
	/*main list tag*/
	mainList = document.createElement("ol");

	for (var browser of Object.values(browsersData)) {
		/* Generate the li tag for current element list */
		li = document.createElement("li");

		/* Link info */
		link = document.createElement("a");
		text = document.createTextNode(browser.name);
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

		/*description container*/
		desc = document.createElement("span");
		desc.className = "description";
		text = document.createTextNode(browser.desc);
		desc.appendChild(text);

		//append link inner data (image and text)
		link.appendChild(span);

		secondLink = document.createElement("a");
		secondLink.title = "Download " + browser.name;
		secondLink.href = browser.href;
		secondLink.target = "_blank";
		secondLink.className = "button";
		text = document.createTextNode("Download " + browser.linkInfo);
		secondLink.appendChild(text);

		/* append link to list*/
		li.appendChild(link);
		li.appendChild(desc);
		li.appendChild(secondLink);

		mainList.appendChild(li);
	}
	dest.appendChild(mainList);
}

/*
**************** structure example start
<ol>
	<li>
		<a target="_blank" href="https://www.google.com/chrome/dev/">
			Google Chrome Dev
			<span class="logo inline">
				<img class="chrome" src="assets/imgs/chromeDevLogo.svg" />
			</span>
		</a>
	</li>
	<li>
		<a href="https://download.mozilla.org/?product=firefox-devedition-stub&os=win&lang=es-ES">
			Firefox Developer Edition (Direct Download)
			<span class="logo inline">
				<img class="firefox" src="assets/imgs/firefoxDevLogo.svg" />
			</span>
		</a>
	</li>
</ol>
**************** structure example end
*/
