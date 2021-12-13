//NBext var is an instructions to open the Extension viewe panel
let openExtensionView =
	"Bring up the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of VS Code or the View: Extensions command <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd>).";

//General plugins information
const plugAddExt = [
	{
		name: "Live Server - Web Extension",
		mainProgram: ["Google Chrome Dev", "Firefox Developer Edition", "Opera Developer"],
		desc: "This browser add-on is an extension for a developer tool in VS Code editor (Live Server). With this add-on installed, along with the VS Code extension, it gives you a functionality to automatically update your website on save; for other files than just .htm and .html.<br><br>So specifically, with this add-on, live reload will also work with the following server-side files within the spectrum of: PHP, .NET and NodeJS.",
		icon: "assets/img/addOn-liveReloadExtension-Logo.svg",
		links: [
			{
				specific: true,
				program: ["Google Chrome Dev", "Opera Developer"],
				href: "https://chrome.google.com/webstore/detail/live-server-web-extension/fiegdmejfepffgpnejdinekhfieaogmj",
				text: "Google Chrome Extension",
				title: "Visit the Live Server Web Extension on chome web store",
			},
			{
				specific: true,
				program: "Firefox Developer Edition",
				href: "https://addons.mozilla.org/en-US/firefox/addon/live-server-web-extension/",
				text: "Firefox Complement",
				title: "Visit the Live Server Web Extension on Firefox Browser Add-ons",
			},
		],
		settings: [
			{
				title: "Direct Setup",
				explain:
					"If you doesn't coding a server side language (PHP, .NET or NodeJS) you no need to configure the extension in browser, just activate the visual studio code extension makes the refresh on browser. For server side language follow the next steps",
				steps: [
					"Install Visual Studio Code from Microsoft. (code editor)",
					"Install VS Code Live Server. (extension to code editor)",
					"Install the browser add-on (Chrome or Firefox.)",
					"Install and run a server on your machine(PHP, .NET or NodeJS)",
					"Place your app on the server and open your project there.",
					'Enter the neccesary fields (screenshot below)<ol type="a"><li><strong>Actual Server Address:</strong> is the address where your server is located and the port.</li><li><strong>Live Server Address:<strong> is the address where Visual Studio code extension is running.',
					"Push the <i>Go Live-button</i> in your editor's statusbar.",
					"Visit the <i>Actual Server Address<i>",
				],
				image: "assets/img/addOn-LiveReloadExtension-DirectSetup.png",
			},
		],
	},
	{
		name: "Remote - WSL",
		mainProgram: "Visual Studio Code",
		desc: "The Remote - WSL extension lets you use Visual Studio Code on Windows to build Linux applications that run on the Windows Subsystem for Linux (WSL). You get all the productivity of Windows while developing with Linux-based tools, runtimes, and utilities.",
		icon: "assets/img/addOn-remoteWSL-logo.png",
		links: [
			{
				href: "https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl",
				text: "Visit Remote - WSL MaketPlace",
				title: "Go to Remote WSL Marketplace page",
			},
		],
		uses: [
			{
				title: "Install from marketplace",
				image: "assets/img/addOn-remoteWSL-install.png",
				steps: [
					"Launch Visual Studio Code.",
					openExtensionView,
					'Paste the following text and press enter:<code class="oneline">ms-vscode-remote.remote-wsl</code>',
					'Click on "install" button',
				],
			},
			{
				title: "Open Visual Studio Code from WSL terminal",
				explain:
					"Launch a new instance of Visual Studio Code connected to WSL by opening a WSL terminal, navigating to the folder of your choice, and typing the code below. First time you launch from terminal a Visual Studio Code server may will be installed.",
				code: "code .",
				image: "assets/img/addOn-remoteWSL-use-open-vscode-from-linux-terminal.png",
			},
			{
				title: "Open a WSL instance from Visual Studio Code",
				explain:
					"It's possible to open an instance WSL From Visual Studio Code. select the green remote indicator in the lower left corner of the status bar and selecting the option you want.",
				image: "assets/img/addOn-remoteWSL-use-open-wsl-from-vscode.png",
				steps: [
					"Select the green remote indicator in the lower left corner of the status bar",
					"Select the option you want",
				],
			},
		],
	},
	{
		name: "Powershell",
		mainProgram: "Visual Studio Code",
		desc: "Develop PowerShell modules, commands and scripts in Visual Studio Code!",
		icon: "assets/img/addOn-powershellExtension-logo.svg",
		links: [
			{
				href: "https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell",
				text: "Visit Powershell Extension marketplace site",
				title: "Powershell Extension marketplace site",
			},
		],
		uses: [
			{
				title: "Install from market place",
				explain: "You can intall the powershell extension from market place, just follow the next steps:",
				steps: [
					"Launch Visual Studio Code.",
					openExtensionView,
					'Paste the following text and press enter:<code class="oneline">ms-vscode.PowerShell</code>',
					'Click on "install" button',
				],
			},
		],
		settings: [
			{
				title: "Package management update",
				explain:
					"The PowerShell extension, can shows a message advertising about PackageManagemnt issues and requires update. Follow next steps to fix.",
				steps: [
					"Launch Powershell with administrator privileges.",
					"paste the following command, and press enter.<code class=\"oneline\">powershell.exe -NoLogo -NoProfile -Command '[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Install-Module -Name PackageManagement -Force -MinimumVersion 1.4.6 -Scope CurrentUser -AllowClobber -Repository PSGallery'</code>",
					"Accept any change and update (NuGet and/or PackageManagement) if asked",
				],
			},
		],
	},
];

function addOnTo(sourceInfo) {
	// get programs name
	let software = new Array();
	for (var source of Object.values(sourceInfo)) {
		software.push(source.name);
	}

	if (software.length > 0) {
		for (var prog of Object.values(software)) {
			let addonsStated = false;
			for (var ext of Object.values(plugAddExt)) {
				// if the extension has the mainprogram name the extension info will be added to the main program tag container.

				if (ext.mainProgram.includes(prog)) {
					let progIdDest = document.querySelector("#" + attrValueText(prog));

					if (!addonsStated) {
						//Addon generic title
						let genTitle = document.createElement("h3");
						genTitle.innerHTML = "VS Code Extensions";
						progIdDest.appendChild(genTitle);
						addonsStated = true;
					}
					// Adding data to main HTML destination (program or addon section)
					progIdDest.appendChild(extHtml(ext, prog));
				}
			}
		}
	}
}

//code to add all addons in addons container
function addPlugins(destination) {
	let dest = document.querySelector(destination);
	for (var ext of Object.values(plugAddExt)) {
		dest.appendChild(extHtml(ext, "allSoftware"));
	}
}

function extHtml(extData, host) {
	//be carefull returns html Object!

	//obtaining the addon link information specific for the host software
	var link;
	if (extData.links.length > 1 && host != "allSoftware") {
		for (var addonLinkInfo of Object.values(extData.links)) {
			if (addonLinkInfo.program.includes(host)) {
				link = addonLinkInfo;
			}
		}
	} else {
		link = extData.links[0];
	}

	//Extension container
	let mainExtContainer = document.createElement("div");
	mainExtContainer.className = "ext-addon";

	//Extension Name link
	let extName = document.createElement("h4");

	//Extension Icon
	var extIconConainter = document.createElement("span");
	extIconConainter.className = "logo inline";

	let extIcon = document.createElement("img");
	extIcon.src = extData.icon;
	extIcon.alt = "Icon " + extData.name;
	extIconConainter.appendChild(extIcon);

	//adding name and icon into title container
	if (host != "allSoftware") {
		let tittleText = document.createTextNode(extData.name);
		let extLink = document.createElement("a");
		extLink.title = extData.name + " for " + host;
		extLink.target = "_blank";
		extLink.href = link.href;
		extLink.appendChild(extIconConainter);
		extLink.appendChild(tittleText);
		extName.appendChild(extLink);
		mainExtContainer.appendChild(extName);
	} else {
		let tittleText = document.createTextNode(extData.name);
		extName.appendChild(extIconConainter);
		extName.appendChild(tittleText);
		//!! Sepecial add a addon host software reference (Only for all addons list) to extension main container
		let hostContainer = document.createElement("span");
		hostContainer.className = "explicative";

		hostContainerText = "For ";
		if (typeof extData.mainProgram == "object") {
			hostContainerText += extData.mainProgram.toString().replaceLast(",", " and ").replace(",", ", ");
		} else {
			hostContainerText += extData.mainProgram.toString();
		}
		hostContainer.innerText = hostContainerText;

		extName.appendChild(hostContainer);
	}

	//Extension description
	let extDescContainer = document.createElement("p");
	extDescContainer.innerHTML = extData.desc;

	//Adding title and description to the addon container
	mainExtContainer.appendChild(extName);
	mainExtContainer.appendChild(extDescContainer);

	//Adding Link button
	if (host != "allSoftware") {
		let buttonText = "Download " + extData.name + " for " + host;
		let tittleText = document.createTextNode(buttonText);
		let extButtonLink = document.createElement("a");
		extButtonLink.title = buttonText;
		extButtonLink.target = "_blank";
		extButtonLink.className = "button";
		extButtonLink.href = link.href;
		extButtonLink.appendChild(tittleText);
		mainExtContainer.appendChild(extButtonLink);
	} else {
		for (linkData of extData.links) {
			if ("object" == typeof linkData.program) {
				for (prog of linkData.program) {
					var extButtonLink = document.createElement("a");
					let buttonText = document.createTextNode("Download for " + prog);
					extButtonLink.title = linkData.title;
					extButtonLink.target = "_blank";
					extButtonLink.className = "button";
					extButtonLink.href = link.href;
					extButtonLink.appendChild(buttonText);
					mainExtContainer.appendChild(extButtonLink);
				}
			} else {
				let extButtonLink = document.createElement("a");
				let buttonText = document.createTextNode(linkData.text);
				extButtonLink.title = linkData.title;
				extButtonLink.target = "_blank";
				extButtonLink.className = "button";
				extButtonLink.href = link.href;
				extButtonLink.appendChild(buttonText);
				mainExtContainer.appendChild(extButtonLink);
			}
		}
	}
	//Adding uses or how to use
	if (extData.uses) {
		let usesContainer = document.createElement("div");
		usesContainer.className = "how-to-use";
		let usesTitle = document.createElement("h5");
		usesTitle.innerText = "How to...";

		//adding Main "how to..." title to how to uses container
		usesContainer.appendChild(usesTitle);

		var usesList = document.createElement("ul");

		for (use of extData.uses) {
			let useItemContainer = document.createElement("li");
			//title
			let useTitle = document.createElement("h6");
			useTitle.innerText = use.title;
			useItemContainer.appendChild(useTitle);

			//explanation
			if (use.explain) {
				let useExplain = document.createElement("p");
				useExplain.innerHTML = use.explain;
				useItemContainer.appendChild(useExplain);
			}

			if (use.image) {
				let useImage = document.createElement("img");
				useImage.src = use.image;
				useImage.className = "img-guide";
				useImage.alt = attrValueText("how to use " + use.title);
				useItemContainer.appendChild(useImage);
			}

			if (use.code) {
				let useCode = document.createElement("code");
				useCode.innerText = use.code;
				useItemContainer.appendChild(useCode);
			}

			if (use.steps) {
				let stepsList = document.createElement("ol");
				for (step of use.steps) {
					let stepContainer = document.createElement("li");
					stepContainer.innerHTML = step;
					stepsList.appendChild(stepContainer);
				}
				useItemContainer.appendChild(stepsList);
			}
			usesList.appendChild(useItemContainer);
		}
		//adding uses cotainer to main extension container
		usesContainer.appendChild(usesList);
		mainExtContainer.appendChild(usesContainer);
	}
	//Adding settings
	if (extData.settings) {
		let setsContainer = document.createElement("div");
		setsContainer.className = "settings";
		let setsTitle = document.createElement("h6");
		setsTitle.innerText = "Settings for " + extData.name;
		//adding title to how to use container
		setsContainer.appendChild(setsTitle);
		var setsList = document.createElement("ul");

		for (set of extData.settings) {
			let setItemContainer = document.createElement("li");

			//title
			let setTitle = document.createElement("h6");
			setTitle.innerText = set.title;
			setItemContainer.appendChild(setTitle);

			//explanation
			if (set.explain) {
				let setExplain = document.createElement("p");
				setExplain.innerHTML = set.explain;
				setItemContainer.appendChild(setExplain);
			}

			if (set.image) {
				let setImage = document.createElement("img");
				setImage.src = set.image;
				setImage.className = "img-guide";
				setImage.alt = attrValueText("setting " + set.title);
				setItemContainer.appendChild(setImage);
			}

			if (set.code) {
				let setCode = document.createElement("code");
				setCode.innerText = set.code;
				setItemContainer.appendChild(setCode);
			}

			if (set.steps) {
				let stepsList = document.createElement("ol");
				for (step of set.steps) {
					let stepContainer = document.createElement("li");
					stepContainer.innerHTML = step;
					stepsList.appendChild(stepContainer);
				}
				setItemContainer.appendChild(stepsList);
			}
			setsList.appendChild(setItemContainer);
		}

		//adding settings container to main extension container
		mainExtContainer.appendChild(setsContainer);
		mainExtContainer.appendChild(setsList);
	}

	return mainExtContainer;
}

/*
	{
		name : "",
		mainProgram : "",
		desc : "",
		icon : "",
		links : [
			{
				specific : true,
				program : "",
				href : "",
				text : "",
				title : "",
			}
		],
		uses : [
			{
				title : "",
				explain : "",
				code : "",
				image : "",
				steps : [
					"",
				]
			},
			{
				title : "",
				explain : "",
				code : "",
				image : "",
				steps : [
					"",
				]
			}
		],
		settings : [
			{
				title : "",
				explain : "",
				code : "",
				image : "",
				steps : [
					"",
				]
			},
			{
				title : "",
				explain : "",
				code : "",
				image : "",
				steps : [
					"",
				]
			}

		]
	}
*/

/*

<!-- Start of VsCode  Plugins-->
<p>Extension to install:</p>
<ul>
	<li>
		<p>
			<span class="logo inline"
				><img class="prettier" src="assets/img/prettierLogo.svg" /></span
			><strong><u>Prettier - Code formatter</u>:</strong
			><a target="_blank" href="https://prettier.io/">https://prettier.io/</a>
		</p>
		<p>
			Prettier is an opinionated code formatter. It enforces a consistent style by parsing
			your code and re-printing it with its own rules that take the maximum line length
			into account, wrapping code when necessary.
		</p>
		<p>
			<strong>Install: </strong>Launch VS Code Quick Open <strong>Ctrl + P</strong>, paste
			the following command, and press enter.
			<code>ext install esbenp.prettier-vscode</code>
		</p>
		<p>
			<strong>Use:</strong> Create a
			<a target="blank" href="https://prettier.io/docs/en/configuration.html">
				configuration file</a
			>
			to improve the use/execution of Prettier. You can read the documentation
			<a target="blank" href="https://prettier.io/docs/en/configuration.html">here</a>
			for more information.
		</p>
		<p>
			<strong>Configuration:</strong> Press <strong>Ctrl + P</strong> to pen Command
			Palette, type
			<code>&gt;Preferences: Open Settings (JSON)</code>
			and paste the code:
			<code class="oneline">"editor.defaultFormatter": "esbenp.prettier-vscode",</code>
			For better "readability" and avoid a lot of lines for code, paste nex code in
			preferences (JSON) file (Recomend for development and prettier
			<code class="oneline">"prettier.printWidth": 140,</code>
			default is 80).
		</p>
	</li>
	<li>
		<p>
			<span class="logo inline"
				><img class="colorHighlight-icon" src="assets/img/colorHighlight.png" /></span
			><strong><u>Color Highlight</u>:</strong
			><a
				target="_blank"
				href="https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight"
				>https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight</a
			>
		</p>
		<p>Styles css/web colors found in your document.</p>
		<p>
			<strong>Install: </strong>Launch VS Code Quick Open pressing
			<strong>Ctrl + P</strong>, paste the following command, and press enter.
			<code>ext install naumovs.color-highlight</code>
		</p>
		<p>
			<strong>Configuration: </strong> Press <strong>Ctrl + P</strong> to pen Command
			Palette, type
			<code>&gt;Preferences: Open Settings (JSON)</code>
			to enter the configurations:
		</p>
		<p>
			<code>"color-highlight.matchWords": true,</code>
			- If a color word is found apply the highlight
		</p>
		<p>
			<code>"color-highlight.markRuler": true,</code>
			- Show colored square in scroll bar to indentify where a color is set.
		</p>
	</li>
	<li>
		<p>
			<span class="logo inline"
				><img
					class="bracketPairColorizer-icon"
					src="assets/img/bracketPairColorizer.png" /></span
			><strong><u>Bracket pair colorizer</u>:</strong
			><a
				target="_blank"
				href="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer"
				>https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer</a
			>
		</p>
		<p>
			This extension allows matching brackets to be identified with colours. The user can
			define which characters to match, and which colours to use.
		</p>
		<p>
			<strong>Install: </strong>Launch VS Code Quick Open pressing
			<strong>Ctrl + P</strong>, paste the following command, and press enter.
			<code>ext install CoenraadS.bracket-pair-colorizer</code>
		</p>
		<p>
			<strong>Configuration: </strong> Press <strong>Ctrl + P</strong> to pen Command
			Palette, type
			<code>&gt;Preferences: Open Settings (JSON)</code>
			to enter the configurations:
		</p>
		<p>
			<code> "bracketPairColorizer.showBracketsInGutter": true,</code>
			- View brackets near line counter (left side of the code)
		</p>
		<p>
			<code>"color-highlight.markRuler": true,</code>
			- Show colored square in scroll bar to indentify where a color is set.
		</p>
	</li>
	<li>
		<p>
			<span class="logo inline"
				><img
					class="cssFlexboxCheatsheet-icon"
					src="assets/img/cssFlexboxCheatsheet.png" /></span
			><strong><u>CSS Flexbox Cheatsheet</u>:</strong
			><a
				target="_blank"
				href="https://marketplace.visualstudio.com/items?itemName=dzhavat.css-flexbox-cheatsheet"
				>https://marketplace.visualstudio.com/items?itemName=dzhavat.css-flexbox-cheatsheet</a
			>
		</p>
		<p>VS Code extension that lets you open a flexbox cheatsheet directly in the editor.</p>
		<p>
			iii <strong>Install: </strong>Launch VS Code Quick Open pressing
			<strong>Ctrl + P</strong>, paste the following command, and press enter.
			<code>ext install dzhavat.css-flexbox-cheatsheet</code>
		</p>
		<p>
			These settings are from lastest settings file: {"workbench.colorTheme": "Visual Studio Dark",
			"liveServer.settings.fullReload": true, "liveSassCompile.settings.formats": [
			{ "format": "compressed", "extensionName": ".css", "savePath": null } ],
			"liveSassCompile.settings.autoprefix": [], "es6-css-minify.autoprefixer": { },
			"es6-css-minify.minifyOnSave": "yes", "php.suggest.basic": false, "[javascript]": {
			"editor.defaultFormatter": "esbenp.prettier-vscode" }, "[html]": {
			"editor.defaultFormatter": "esbenp.prettier-vscode" }, "prettier.tabWidth": 4,
			"prettier.useTabs": true }
		</p>
	</li>
	
	<h1>Buscar!!!</h1>
	Auto Rename Tag
	
	<li>Better Comments</li>
	<li>CSS Linter</li>
	<li>Code Spell Checker</li>
	<li>Color Highlight</li>
	<li>Git Graph</li>
	<li>Git Lens</li>
	<li>Image Preview</li>
	<li>Import Cost</li>
	<li>Javascript / JSON Linter</li>
	<li>Live Server</li>
	<li>Live Server</li>
	<li>Markdown Preview Enhanced</li>
				settings.js     "markdown-preview-enhanced.previewTheme": "github-dark.css",
	<li>Material icon Theme</li>   settings.js  "workbench.iconTheme": "material-icon-theme",

	<li>Minify / prettify</li>
	<li>PHP linter</li>
	<li>Path Intellisense</li>
	<li>Prettier</li>
	<li>SASS / SCSS Linter</li>
	<li>SASS SCSS compiler /build</li>
	<li>Sort Lines</li>
	<li>SQL Linter</li>
	<li>Thunder Client</li>
	<li>¿¿Sass scss??</li>
	

	Linux
	(tree) para ver un arbol de carpetas desde linux sudo apt install tree , despues $sudo apt-get update
	(net-tools) sudo apt install net-tools

	<li></li>
	</ul>


<!-- End of VsCodse -->
https://code.visualstudio.com/docs/languages/javascript -> read for linter

*/

/*
function htmlWSL (destination,object,ListType){
	let dest = document.querySelector(destination);
	//main list tag
	mainList = document.createElement(ListType);
	
	for (var wslInst of Object.values(object)) {
		// Generate the li tag for current element list 
		li = document.createElement("li");

		//title container 
		title = document.createElement("h3");
		text = document.createTextNode(wslInst.title);
		title.appendChild(text);
		li.appendChild(title);

		//info container 
		info = document.createElement("p");
		info.innerHTML=wslInst.info;
		li.appendChild(info);

		//code container 
		if(typeof(wslInst.code) != "undefined" && typeof(wslInst.code) == "string"){
			code = document.createElement("code");
			code.className = "oneline";
			code.innerHTML=wslInst.code;
			li.appendChild(code);
		}else if(typeof(wslInst.code) != "undefined" && typeof(wslInst.code) == "object"){
			codeList = document.createElement("ol");
			for (var cl of Object.values(wslInst.code)) {
				liCode = document.createElement("li");
				p =  document.createElement("p");
				p.innerHTML=cl.info;
				liCode.appendChild(p);
				if(typeof(cl.text) != "undefined"){
					code = document.createElement("code");
					code.className = "oneline";
					code.innerHTML = cl.text;
					liCode.appendChild(code);
				}
				codeList.appendChild(liCode);
			}
			li.appendChild(codeList);
		}

		if(typeof(wslInst.links) != "undefined"){
			for (var wslLinks of Object.values(wslInst.links)) {
				link = document.createElement("a");
				link.appendChild(document.createTextNode(wslLinks.text));
				link.title = wslLinks.text;
				if(typeof(wslLinks.target) != "undefined"){
					link.target = wslLinks.target;
				}
				link.className = "oneline"
				link.href = wslLinks.href;
				li.appendChild(link);
			}
		}
		
		mainList.appendChild(li);

	}
	dest.appendChild(mainList);
}
*/
