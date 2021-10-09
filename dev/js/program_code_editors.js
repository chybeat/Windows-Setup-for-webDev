//Code editor programs
let codeEditors = [
	{
		name = "Sublime Text",
		desc = "The sophisticated text editor for code, markup and prose.",
		icon = "assets/img/sublimeTextLogo.svg",
		links = [
			{
				href = "https://www.sublimetext.com/download",
				text = "Download Sublime Text",
				title = "Visit the download page of Sublime Text",
				target = "_blank"
			},{
				href = "https://docs.sublimetext.io/",
				text = "Sublime Text Community Documentation",
				title = "Read the community effort at documenting the Sublime Text",
				target = "_blank"
			}
		],
		configs = [
			{
				title = "Sublime text context menu icon",
				desc = "To add <q>Open with Sublime Text</q> context menu option and icon, open PowerShell with administrative rights and paste the next code. Remember to change the path in <code class=\"inline\">$st_path = \"C:\\path\\to\\sublime_text_folder\\sublime_text.exe\"</code> to your Sublime Text installation path into quotes",
				code = "$st_path = \"C:\\path\\to\\sublime_text_folder\\sublime_text.exe\"<br><br>$reg_path = 'Registry::HKEY_CLASSES_ROOT\\*\\shell';Set-Location -LiteralPath $reg_path;new-Item 'sublimeText' | Out-Null;$reg_path = $reg_path + '\\sublimeText';Set-Location -LiteralPath $reg_path;New-ItemProperty -literalPath $reg_path -Name '(Default)' -Value 'Open with Sublime text' | Out-Null;New-ItemProperty -literalPath $reg_path -Name 'Icon' -Value \`\"$st_path\`\" | Out-Null;new-Item 'command' | Out-Null;$reg_path = $reg_path + '\\command';Set-Location -LiteralPath $reg_path;$val_path = \"\`\"\" + $st_path + \"\`\" \`\"%1\`\"\";New-ItemProperty -literalPath $reg_path -Name '(Default)' -Value $val_path | Out-Null"
			},{
				title = "Disable Sublime Text updates",
				desc = "To disable Sublime Text updates you need to add a firewall rule. Use a powershell with administrative privileges and type the next code. Remember to change the path in <q>-Program</q> option for your Sublime Text installation path",
				code = "New-NetFirewallRule -Action Block -Name 'Sublime Update Block' -Enabled True -Direction Outbound -DisplayName 'Sublime Text Update Block' -Description 'Block Licensce update check for Sublime text' -Protocol Any -Profile Any -Program \"C:\\Program Files\\{sublime_text_folder}\\sublime_text.exe\""
			}
		]
	},{
		name = "Visual Studio Code ",
		desc = "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.",
		icon = "assets/img/vscodeLogo.svg",
		links = [
			{
				href = "https://code.visualstudio.com/download",
				text = "Download Visual Studio Code",
				title = "Visit Visual Studio Code download page",
				target = "_blank"
			},{
				href = "https://marketplace.visualstudio.com/vscode",
				text = "Visual Studio Code extensions market place",
				title = "Visit the market place extensions for Visual Studio Code",
				target = "_blank"
			}
		],
		configs = [
			{
				title = "Configuration file",
				desc = "These are some configurations that you can use to get better experience with VSCode. You can configure Visual Studio Code from a JSON format file <code>settings.json</code> pressing <kbd>Ctrl</kbd> + <kbd>P</kbd> and typing <code>&gt;Preferences: Open Settings (JSON)</code>."
			},{
				title = "Accept Suggestion On Enter",
				desc = "Controls if suggestions should be accepted on 'Enter' - in addition to 'Tab'. Helps to avoid ambiguity between inserting new lines or accepting suggestions. The value 'smart' means only accept a suggestion with Enter when it makes a textual change",
				code = "\"editor.acceptSuggestionOnEnter\":\"off\",",
			},{
				title = "Cursor Move Smooth Animation",
				desc = "Use smooth transition in cursor movements",
				code = "\"editor.cursorSmoothCaretAnimation\": true,",
			},{
				title = "Format On Paste",
				desc = "Force VS Code to format text whenever its pasted into a file (requires a formatter, 		such as Prettier or Beautify)",
				code = "\"editor.formatOnPaste\": true,",
			},{
				title = "Format On Save",
				desc = "Force VS Code to format text when file is saved (requires a formatter, such as Prettier or Beautify)",
				code = "\"editor.formatOnSave\": true,",
			},{
				title = "Mouse Wheel Zoom",
				desc = "Enable window zooming using <kbd>Ctrl</kbd> + <kbd>Mouse wheel</kbd> (up or down)",
				code = "\"editor.mouseWheelZoom\": true,",
			},{
				title = "Insert Final Newline",
				desc = "Insert a final empty line at every files on save",
				code = "\"files.insertFinalNewline\": true,",
			},{
				title = "Trim Final Newlines",
				desc = "Remove all final empty lines from a file on save",
				code = "\"files.trimFinalNewlines\": true,",
			},{
				title = "Powershell run buttons",
				desc = "Show the Run and Run Selection buttons in the editor titlebar to test powershell scripts.",
				code = "\"Powershell.buttons.showPanelMovementButtons\": true,"
			},{
				title = "Starts Visual Studio witouth any tab",
				desc = "Controls which editor is shown at startup, if none are restored from the previous session.",
				code = "\"workbench.editor.showTabs\": true,"
			},{
				title = "Highlight Modified Tabs",
				desc = "Controls whether a top blue border is drawn on modified (dirty) editor tabs not saved or not. This value is ignored when <code>workbench.editor.showTabs</code> is disabled.",
				code = "\"workbench.editor.highlightModifiedTabs\": true,"
			},{
				title = "Enable tabs",
				desc = "Controls whether opened editors should show in tabs or not",
				code = "\"workbench.startupEditor\": \"none\","
			}
		]
	}
]
/*
	,{
		name = "",
		desc = "",
		icon = "",
		links = [
			{
				href = "",
				text = "",
				title = "",
				target = ""
			}
		],
		configs = [
			{
				title = "",
				desc = "",
				code = "",
				links = [
					{
						href = "",
						text = "",
						title = "",
						target = ""
					}
				]
			}
		]
	}
]
*/
function addCodeEditors(destination){
	let dest = document.querySelector(destination);

	for (var editor of Object.values(codeEditors)) {
		//Editor container
		editorContainer = document.createElement("article");
		editorContainer.id = attrValueText(editor.name)

		//Editor header
		editorHeader = document.createElement("header");

		//Editor link as container for editor header
		editorLink = document.createElement("a");
		editorLink.href = editor.links[0].href
		editorLink.title = "Visit " + editor.name + "download page"
		editorLink.target = editor.links[0].target

		//Editor Title for editor header
		editorTitle = document.createElement("h2");
		editorTitle.innerHTML = editor.name;
		
		//Editor logo for editor header
		editorLogoContainer = document.createElement("span");
		editorLogoContainer.className = "logo inline"
		editorLogo = document.createElement("img");
		editorLogo.src = editor.icon;
		editorLogo.title = editor.name + " logo";
		editorLogoContainer.appendChild(editorLogo);
		

		// -- Adding all to link container for editor header--
		//Adding Title to link container
		editorLink.appendChild(editorTitle)
		//Adding Logo yo link container
		editorLink.appendChild(editorLogoContainer);

		//Adding Logo to editor header
		editorHeader.appendChild(editorLink);

		//Editor description
		editorDesc = document.createElement("p");
		editorDesc.innerHTML = editor.desc

		//Editor links
		//Links description paragrahp 
		linksDescP = document.createElement("h3");
		linksDescP.innerHTML = "Useful links for " + editor.name;

		//Link list container
		linksListContainer = document.createElement("ul");
		for(link of Object.values(editor.links)){
			//Editor link as container for editor header
			linkContainer = document.createElement("li");
			linkTag = document.createElement("a")
			linkTag.href = link.href;
			linkTag.innerHTML = link.text;
			linkTag.title = link.title;
			linkTag.target = link.target;

			//Adding link to link list container
			linkContainer.appendChild(linkTag);

			//Adding Link Container to list
			linksListContainer.appendChild(linkContainer);
		}
		
		//Editor configurations
		configsDescP = document.createElement("h3");
		configsDescP.innerHTML = "Some configurations for " + editor.name;
		if(typeof(editor.configs) != "undefined" && typeof(editor.configs) == "object"){
			configsContainer = document.createElement("ul")
			for(config of Object.values(editor.configs)){
				//Configuration container
				configDataContainer = document.createElement("li");

				//Configuration title
				if(typeof(config.title) != "undefined" && typeof(config.title) == "string"){
					configTitle = document.createElement("h4")
					configTitle.innerHTML= config.title
					//Add Title to configuration container
					configDataContainer.appendChild(configTitle)
				}

				//Configuration descrition
				configDesc = document.createElement("p")
				configDesc.innerHTML= config.desc
				//Add configuration description to configuration container
				configDataContainer.appendChild(configDesc)

				//Configuration code
				if(typeof(config.code) != "undefined" && typeof(config.code) == "string"){
					configCode = document.createElement("code");
					configCode.className = "oneline";
					configCode.innerHTML= config.code;
					//Add configuration code to configuration container
					configDataContainer.appendChild(configCode)
				}


				configsContainer.appendChild(configDataContainer)
			}
		}
		
		// --- Adding all to Editor container --
		//Adding header to Editor container
		editorContainer.appendChild(editorHeader);
		//Adding editor descritprion
		editorContainer.appendChild(editorDesc);

		//Adding links description paragraph
		editorContainer.appendChild(linksDescP);
		//Adding Link List
		editorContainer.appendChild(linksListContainer);

		//Adding links description paragraph
		editorContainer.appendChild(configsDescP);

		//Adding configurations List
		editorContainer.appendChild(configsContainer);

		dest.appendChild(editorContainer);
	}

}

/*
<article>
	<ol>
		<li>
			<!-- Start of VsCode  Plugins-->
			<p>Extension to install:</p>
			<ul>
				<li>
					<p>
						<span class="logo inline"
							><img class="remoteWSL" src="assets/img/remoteWSLIcon.png" /></span
						><strong><u>Remote WSL</u>:</strong
						><a
							target="_blank"
							href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl"
							>https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl</a
						>
					</p>
					<p>
						The Remote - WSL extension lets you use VS Code on Windows to build Linux
						applications that run on the Windows Subsystem for Linux (WSL). You get all the
						productivity of Windows while developing with Linux-based tools, runtimes, and
						utilities.
					</p>
					<p>
						<strong>Install: </strong>Launch VS Code Quick Open <strong>Ctrl + P</strong>, paste
						the following command, and press enter.
						<code>ext install ms-vscode-remote.remote-wsl</code>
					</p>
					<p>
						<strong>Use:</strong>You can launch a new instance of VS Code connected to WSL by
						opening a WSL terminal, navigating to the folder of your choice, and typing
						<code>code .</code>. From Visual Studio Code by selecting the green remote indicator
						in the lower left corner of the status bar and selecting the option you want.
					</p>
				</li>
				<li>
					<p>
						<span class="logo inline"
							><img class="PowerShell-icon" src="assets/img/VisualStudioIcon.png" /></span
						><strong><u>Powershell</u>:</strong
						><a
							target="_blank"
							href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell"
							>https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell</a
						>
					</p>
					<p>
						<strong>Install: </strong>Launch VS Code Quick Open pressing
						<strong>Ctrl + P</strong>, paste the following command, and press enter.
						<code>ext install powershell</code>
					</p>
					<p>
						<strong>Configuration: </strong><u>Package management update</u>: Launch Powershell,
						paste the following command, and press enter.
						<code class="oneline"
							>powershell.exe -NoLogo -NoProfile -Command
							'[Net.ServicePointManager]::SecurityProtocol =
							[Net.SecurityProtocolType]::Tls12; Install-Module -Name PackageManagement -Force
							-MinimumVersion 1.4.6 -Scope CurrentUser -AllowClobber -Repository
							PSGallery'</code
						>
						Accept any change and update (NuGet and/or PackageManagement) if asked.
					</p>
				</li>
				<li>
					<p>
						<span class="logo inline"
							><img class="remoteWSL" src="assets/img/prettierLogo.svg" /></span
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
				<li>Live Server</li>
				<li>Path Intellisense</li>
				<li>Autorename Tag</li>
				<li>Material icon Theme</li>
				<h1>Buscar!!!</h1>
				<li>¿¿Sass scss??</li>
				<li>SASS SCSS compiler /build</li>
				<li>CSS Linter</li>
				<li>SASS / SCSS Linter</li>
				<li>PHP linter</li>
				<li>
					SQL Linter
					<h2>Buscar par sublime tambien</h2>
				</li>
				<li>Javascript / JSON Linter</li>
				<li>Minify / prettify</li>
			</ul>
		</li>
		<!-- End of VsCodse -->
		https://code.visualstudio.com/docs/languages/javascript -> read for linter
	</ol>
</article>
*/
