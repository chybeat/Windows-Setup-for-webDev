//Code editor programs
const codeEditors = [
	{
		name: "Sublime Text",
		desc: "The sophisticated text editor for code, markup and prose.",
		icon: "assets/img/codeEditor-sublimeTextLogo.svg",
		links: [
			{
				href: "https://www.sublimetext.com/download",
				text: "Download Sublime Text",
				title: "Visit the download page of Sublime Text",
				target: "_blank",
			},
			{
				href: "https://docs.sublimetext.io/",
				text: "Sublime Text Community Documentation",
				title: "Read the community effort at documenting the Sublime Text",
				target: "_blank",
			},
		],
		configs: [
			{
				title: "Sublime text context menu icon",
				desc: 'To add <q>Open with Sublime Text</q> context menu option and icon, open PowerShell with administrative rights and paste the next code. Remember to change the path in <code class="inline">$st_path = "C:\\path\\to\\sublime_text_folder\\sublime_text.exe"</code> to your Sublime Text installation path into quotes',
				code: "$st_path = \"C:\\path\\to\\sublime_text_folder\\sublime_text.exe\"<br><br>$reg_path = 'Registry::HKEY_CLASSES_ROOT\\*\\shell';Set-Location -LiteralPath $reg_path;new-Item 'sublimeText' | Out-Null;$reg_path = $reg_path + '\\sublimeText';Set-Location -LiteralPath $reg_path;New-ItemProperty -literalPath $reg_path -Name '(Default)' -Value 'Open with Sublime text' | Out-Null;New-ItemProperty -literalPath $reg_path -Name 'Icon' -Value `\"$st_path`\" | Out-Null;new-Item 'command' | Out-Null;$reg_path = $reg_path + '\\command';Set-Location -LiteralPath $reg_path;$val_path = \"`\"\" + $st_path + \"`\" `\"%1`\"\";New-ItemProperty -literalPath $reg_path -Name '(Default)' -Value $val_path | Out-Null",
			},
			{
				title: "Disable Sublime Text updates",
				desc: "To disable Sublime Text updates you need to add a firewall rule. Use a powershell with administrative privileges and type the next code. Remember to change the path in <q>-Program</q> option for your Sublime Text installation path",
				code: "New-NetFirewallRule -Action Block -Name 'Sublime Update Block' -Enabled True -Direction Outbound -DisplayName 'Sublime Text Update Block' -Description 'Block Licensce update check for Sublime text' -Protocol Any -Profile Any -Program \"C:\\Program Files\\{sublime_text_folder}\\sublime_text.exe\"",
			},
		],
	},
	{
		name: "Visual Studio Code",
		desc: "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.",
		icon: "assets/img/codeEditor-vscodeLogo.svg",
		links: [
			{
				href: "https://code.visualstudio.com/download",
				text: "Download Visual Studio Code",
				title: "Visit Visual Studio Code download page",
				target: "_blank",
			},
			{
				href: "https://marketplace.visualstudio.com/vscode",
				text: "Visual Studio Code extensions market place",
				title: "Visit the market place extensions for Visual Studio Code",
				target: "_blank",
			},
		],
		shortcuts: [
			{
				keys: ["CTRL", "B"],
				desc: "Show hide the side bar (Explorer, Search, Source control, Run and Debug, etc.)",
			},
			{
				keys: ["CTRL", ","],
				desc: "Open the Visual Studio Code settings",
			},
			{
				keys: ["CTRL", "T"],
				desc: "Searchbar for files, clases, functions variables, etc. in opened documents",
			},
		],
		configs: [
			{
				title: "Configuration file",
				desc: "These are some configurations that you can use to get better experience with VSCode. You can configure Visual Studio Code from a JSON format file <code>settings.json</code> pressing <kbd>Ctrl</kbd> + <kbd>P</kbd> and typing <code>&gt;Preferences: Open Settings (JSON)</code>.",
			},
			{
				title: "Accept Suggestion On Enter",
				desc: "Controls if suggestions should be accepted on 'Enter' - in addition to 'Tab'. Helps to avoid ambiguity between inserting new lines or accepting suggestions. The value 'smart' means only accept a suggestion with Enter when it makes a textual change",
				code: '"editor.acceptSuggestionOnEnter":"off",',
			},
			{
				title: "Cursor Move Smooth Animation",
				desc: "Use smooth transition in cursor movements",
				code: '"editor.cursorSmoothCaretAnimation": true,',
			},
			{
				title: "Format On Paste",
				desc: "Force VS Code to format text whenever its pasted into a file (requires a formatter, 		such as Prettier or Beautify)",
				code: '"editor.formatOnPaste": true,',
			},
			{
				title: "Format On Save",
				desc: "Force VS Code to format text when file is saved (requires a formatter, such as Prettier or Beautify)",
				code: '"editor.formatOnSave": true,',
			},
			{
				title: "Mouse Wheel Zoom",
				desc: "Enable window zooming using <kbd>Ctrl</kbd> + <kbd>Mouse wheel</kbd> (up or down)",
				code: '"editor.mouseWheelZoom": true,',
			},
			{
				title: "Insert Final Newline",
				desc: "Insert a final empty line at every files on save",
				code: '"files.insertFinalNewline": true,',
			},
			{
				title: "Trim Final Newlines",
				desc: "Remove all final empty lines from a file on save",
				code: '"files.trimFinalNewlines": true,',
			},
			{
				title: "Set default terminal",
				desc: "Set the default command line terminal used in VSCode. This shows the code as demo, paste the code in settings.js, then use the pencil in left side before the line number you paste, and choice your preference",
				code: '"terminal.integrated.defaultProfile.windows": "Testing",',
			},

			{
				title: "Powershell run buttons",
				desc: "Show the Run and Run Selection buttons in the editor titlebar to test powershell scripts.",
				code: '"Powershell.buttons.showPanelMovementButtons": true,',
			},
			{
				title: "Starts Visual Studio witouth any tab",
				desc: "Controls which editor is shown at startup, if none are restored from the previous session.",
				code: '"workbench.editor.showTabs": true,',
			},
			{
				title: "Highlight Modified Tabs",
				desc: "Controls whether a top blue border is drawn on modified (dirty) editor tabs not saved or not. This value is ignored when <code>workbench.editor.showTabs</code> is disabled.",
				code: '"workbench.editor.highlightModifiedTabs": true,',
			},
			{
				title: "Shrink Tabs size",
				desc: "If activate wrap tabs, maybe you can prevent wrapped tabs from growing too large by configuring this: (default: 'fit')",
				code: '"workbench.editor.tabSizing": "shrink",',
			},
			{
				title: "Wrap Tabs",
				desc: "Lets editor tabs wrap instead of showing a scrollbar.",
				code: '"workbench.editor.wrapTabs": true,',
			},
			{
				title: "Enable tabs",
				desc: "Controls whether opened editors should show in tabs or not",
				code: '"workbench.startupEditor": "none",',
			},
		],
	},
];
/*
<ul>Shortcuts
	<li>CTRL+B para ocultar/mostrar barra lateral, (La que tiene archivos, buscar, git, extensiones)</li>
	<li>CTRL + , para mostrar preferencias (settings</li>
	<li>CTRL + T muestra los archivos abiertos, o ubica clases funciones y variables dentro de los archivos</li>

</ul>
*/

/*
	,{
		name: "",
		desc: "",
		icon: "",
		links: [
			{
				href: "",
				text: "",
				title: "",
				target: ""
			}
		],
		shortcuts: [
			{
				keys:[""],
				desc:""
				
			}
		],
		configs: [
			{
				title: "",
				desc: "",
				code: "",
				links: [
					{
						href: "",
						text: "",
						title: "",
						target: ""
					}
				]
			}
		]
	}
]
*/
function addCodeEditors(destination) {
	let dest = document.querySelector(destination);

	for (var editor of Object.values(codeEditors)) {
		//Editor container
		editorContainer = document.createElement("article");
		editorContainer.id = attrValueText(editor.name);

		//Editor header
		editorHeader = document.createElement("header");

		//Editor link as container for editor header
		editorLink = document.createElement("a");
		editorLink.href = editor.links[0].href;
		editorLink.title = "Visit " + editor.name + "download page";
		editorLink.target = editor.links[0].target;

		//Editor Title for editor header
		editorTitle = document.createElement("h2");
		editorTitle.innerHTML = editor.name;

		//Editor logo for editor header
		editorLogoContainer = document.createElement("span");
		editorLogoContainer.className = "logo inline";
		editorLogo = document.createElement("img");
		editorLogo.src = editor.icon;
		editorLogo.title = editor.name + " logo";
		editorLogoContainer.appendChild(editorLogo);

		// -- Adding all to link container for editor header--
		//Adding Title to link container
		editorLink.appendChild(editorTitle);
		//Adding Logo yo link container
		editorLink.appendChild(editorLogoContainer);

		//Adding Logo to editor header
		editorHeader.appendChild(editorLink);

		//Editor description
		editorDesc = document.createElement("p");
		editorDesc.innerHTML = editor.desc;

		//Adding header to Editor container
		editorContainer.appendChild(editorHeader);
		//Adding editor descritprion
		editorContainer.appendChild(editorDesc);

		//Editor links
		if (typeof editor.links != "undefined" && typeof editor.links == "object") {
			//Links description paragrahp
			linksDescP = document.createElement("h3");
			linksDescP.innerHTML = "Useful links for " + editor.name;

			//Link list container
			linksListContainer = document.createElement("ul");
			for (link of Object.values(editor.links)) {
				//Editor link as container for editor header
				linkContainer = document.createElement("li");
				linkTag = document.createElement("a");
				linkTag.href = link.href;
				linkTag.innerHTML = link.text;
				linkTag.title = link.title;
				linkTag.target = link.target;

				//Adding link to link list container
				linkContainer.appendChild(linkTag);

				//Adding Link Container to list
				linksListContainer.appendChild(linkContainer);
			}
			//Adding links description paragraph
			editorContainer.appendChild(linksDescP);
			//Adding Link List
			editorContainer.appendChild(linksListContainer);
		}

		// Editor Shortcuts
		if (typeof editor.shortcuts != "undefined" && typeof editor.shortcuts == "object") {
			shortcutsTitle = document.createElement("h3");
			shortcutsTitle.innerHTML = "Useful keyboard shortcuts for " + editor.name;
			mainShortcutsContainer = document.createElement("ul");
			for (short of Object.values(editor.shortcuts)) {
				//Container for shortcut
				shortcutContainer = document.createElement("li");

				//Keys cointainer and data
				keysContainer = document.createElement("span");
				keysContainer.className = "inline";
				for (key of Object.values(short.keys)) {
					keyBinding = document.createElement("kbd");
					keyBinding.innerHTML = key;
					keysContainer.appendChild(keyBinding);
					plusText = document.createTextNode(" + ");
					keysContainer.appendChild(plusText);
				}
				//Cleaning excesive spances an plus characters
				keysContainer.innerHTML = keysContainer.innerHTML.replaceLast("+", "").trim();

				//Adding keys to shortcut coninter
				shortcutContainer.appendChild(keysContainer);

				//Description for shortcut
				shortDesc = document.createElement("p");
				shortDesc.appendChild(document.createTextNode(short.desc));

				//Adding decription to Container
				shortcutContainer.appendChild(shortDesc);

				//Adding desc and keys to main shortcut container
				mainShortcutsContainer.appendChild(shortcutContainer);
			}
			//Adding Shortcut title
			editorContainer.appendChild(shortcutsTitle);
			//Adding Shortcut Container
			editorContainer.appendChild(mainShortcutsContainer);
		}

		//Editor configurations
		if (typeof editor.configs != "undefined" && typeof editor.configs == "object") {
			configsDescTitle = document.createElement("h3");
			configsDescTitle.innerHTML = "Some configurations for " + editor.name;
			configsContainer = document.createElement("ul");
			for (config of Object.values(editor.configs)) {
				//Configuration container
				configDataContainer = document.createElement("li");

				//Configuration title
				if (typeof config.title != "undefined" && typeof config.title == "string") {
					configTitle = document.createElement("h4");
					configTitle.innerHTML = config.title;
					//Add Title to configuration container
					configDataContainer.appendChild(configTitle);
				}

				//Configuration descrition
				configDesc = document.createElement("p");
				configDesc.innerHTML = config.desc;
				//Add configuration description to configuration container
				configDataContainer.appendChild(configDesc);

				//Configuration code
				if (typeof config.code != "undefined" && typeof config.code == "string") {
					configCode = document.createElement("code");
					configCode.className = "oneline";
					configCode.innerHTML = config.code;
					//Add configuration code to configuration container
					configDataContainer.appendChild(configCode);
				}

				configsContainer.appendChild(configDataContainer);
			}
			//Adding Configurations description Title
			editorContainer.appendChild(configsDescTitle);
			//Adding configurations List
			editorContainer.appendChild(configsContainer);
		}

		// --- Adding all to HTML --
		dest.appendChild(editorContainer);
	}
}
