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
				title = "Format On Paste",
				desc = "Force VS Code to format text whenever its pasted into a file (requires a formatter, 		such as Prettier or Beautify)",
				code = "\"editor.formatOnPaste\": true,",
			},{
				title = "Format On Save",
				desc = "Force VS Code to format text when file is saved (requires a formatter, such as Prettier or Beautify)",
				code = "\"editor.formatOnSave\": true,",
			},{
				title = "Accept Suggestion On Enter",
				desc = "Controls if suggestions should be accepted on 'Enter' - in addition to 'Tab'. Helps to avoid ambiguity between inserting new lines or accepting suggestions. The value 'smart' means only accept a suggestion with Enter when it makes a textual change",
				code = "\"editor.acceptSuggestionOnEnter\":\"off\",",
			},{
				title = "Mouse Wheel Zoom",
				desc = "Enable window zooming using <kbd>Ctrl</kbd> + <kbd>Mouse wheel</kbd> (up or down)",
				code = "\"editor.mouseWheelZoom\": true,",
			},{
				title = "Cursor Move Smooth Animation",
				desc = "Use smooth transition in cursor movements",
				code = "\"editor.cursorSmoothCaretAnimation\": true,",
			},{
				title = "Trim Final Newlines",
				desc = "Remove all final empty lines from a file on save",
				code = "\"files.trimFinalNewlines\": true,",
			},{
				title = "Insert Final Newline",
				desc = "Insert a final empty line at every files on save",
				code = "\"files.insertFinalNewline\": true,",
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
			},{
				title = "Powershell run buttons",
				desc = "Show the Run and Run Selection buttons in the editor titlebar to test powershell scripts.",
				code = "\"Powershell.buttons.showPanelMovementButtons\": true,"
			}
		]
	}
]
/*

*/


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

function htmlWSL (destination,object,ListType){
	let dest = document.querySelector(destination);
	//main list tag
	mainList = document.createElement(ListType);
	
	for (var wslInst of Object.values(object)) {
		//Generate the li tag for current element list
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
/*
			<article>
				<h3>Code/text Editors</h3>
				<ol>
					<li>
						<p>Packages to install:</p>
						<ul>
							<li>
								<p>
									<strong><u>Package control</u>:</strong>
								</p>
								<p>Open "<strong>view</strong>" menu and click on <strong>"show console"</strong>.</p>
								<a class="img-guide" href="assets/img/st3_showconsole.jpg"
									><img src="assets/img/st3_showconsole.jpg"
								/></a>
								<p>
									Insert the next code in console:
									<code class="oneline"
										>import urllib.request,os,hashlib; h =
										'817937144c34c84c88cd43b85318b2656f9c3fac02f8f72cbc18360b2c26d139'; pf =
										'Package Control.sublime-package'; ipp = sublime.installed_packages_path();
										urllib.request.install_opener( urllib.request.build_opener(
										urllib.request.ProxyHandler()) ); by = urllib.request.urlopen(
										'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh =
										hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead
										of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join(
										ipp, pf), 'wb' ).write(by)</code
									>
								</p>
								<p>
									For more information refer to
									<a target="_blank" href="https://packagecontrol.io/installation"
										>https://packagecontrol.io/installation</a
									>
								</p>
							</li>
						</ul>
						<p>
							All next packages needs to be installed from package installer in Package Control (<strong
								>SHIFT + CTRL + P</strong
							>
							&gt;
							<strong>Package Control: Install pacakge</strong>), and typing the package name
						</p>
						<ul>
							<li>
								<p>
									<strong><u>AdvancedNewFile</u>:</strong
									><a target="_blank" href="https://github.com/skuroda/Sublime-AdvancedNewFile#usage"
										>https://github.com/skuroda/Sublime-AdvancedNewFile#usage</a
									>
								</p>
								<p>
									Advanced file creation for Sublime Text 2 and Sublime Text 3 (<strong
										>Ctrl + Alt + N</strong
									>)
								</p>
								<a class="img-guide" href="assets/img/st3_AdvancedNewFile.jpg"
									><img src="assets/img/st3_AdvancedNewFile.jpg"
								/></a>
								<p>
									<strong>Use:</strong> (<strong>Ctrl + Alt + N</strong>) bring up the AdvancedNewFile
									input. Then, enter the path, along with the file name into the input field. Upon
									pressing enter, the file will be created. In addition, if the directories specified
									do not yet exists, they will also be created. By default, the path to the file being
									created will be filled shown in the status bar as you enter the path information.
								</p>
								<p>
									For more advanced usage of this plugin, be sure to look at
									<a target="_blank" href="https://github.com/skuroda/Sublime-AdvancedNewFile">
										Advanced Path Usage</a
									>.
								</p>
							</li>
							<li>
								<p>
									<strong><u>AutoFileName</u>:</strong
									><a target="_blank" href="https://github.com/liamcain/AutoFileName#usage"
										>https://github.com/BoundInCode/AutoFileName#usage</a
									>
								</p>
								<p>
									<a class="img-guide" href="assets/img/st3_AutoFileName.jpg"
										><img src="assets/img/st3_AutoFileName.jpg" /></a
									>Whether your making a
									<code>img</code>
									tag in html, setting a image in css, or linking a
									<code>.js</code> file to your html (or whatever else people use filename paths for
									these days), you can now autocomplete the filename. Plus, it uses the built-in
									autocomplete, so no need to learn another pesky shortcut.
								</p>
							</li>
							<li>
								<p>
									<strong><u>Autoprefixer</u>:</strong
									><a
										target="_blank"
										href="https://github.com/sindresorhus/sublime-autoprefixer#getting-started"
										>https://github.com/sindresorhus/sublime-autoprefixer#getting-started</a
									>
								</p>
								<p>
									Use: In .scss or .css open command pallete (<strong>Shift + Ctrl + P</strong>) and
									type Autoprefix CSS, and press enter. For best compatibility in autoprefixer, set in
									user settings this config:
									<code>{"browsers": ["last 5 versions","> .5%"],}</code>
								</p>
								<a class="img-guide" href="assets/img/st3_autoprefixer.gif"
									><img src="assets/img/st3_autoprefixer.gif"
								/></a>
								<p>
									This plugin uses the
									<a target="_blank" href="https://github.com/postcss/autoprefixer">Autoprefixer</a>
									module to prefix properties and values according to the
									<a target="_blank" href="https://caniuse.com">Can I Use</a>
									database. Works with CSS and SCSS, but not other preprocessors. Requires
									<a target="_blank" href="https://nodejs.org/en/download/">Node.js</a>
									10+ installed
								</p>
							</li>
							<li>
								<p>
									<strong><u>BracketHighlighter</u>:</strong
									><a target="_blank" href="https://facelessuser.github.io/BracketHighlighter/usage/"
										>https://facelessuser.github.io/BracketHighlighter/usage/</a
									>
								</p>
								<a class="img-guide" href="assets/img/st3_BracketHihglighter.jpg"
									><img src="assets/img/st3_BracketHihglighter.jpg"
								/></a>
								<p>
									Set in Sublime Text user preferences (<strong>Preferences &gt; Settings</strong>),
									next lines to avoid conflicts with BracketHighlighter and Sublime Text key bindings.
								</p>
								<code
									>"match_brackets": false,<br />
									"match_brackets_angle": false,<br />
									"match_brackets_braces": false,<br />
									"match_brackets_content": false,<br />
									"match_brackets_square": false,<br />
									"match_tags": false</code
								>
								<p>
									BracketHighlighter matches a variety of brackets such as: <code>[]</code>,
									<code>()</code>, <code>{}</code>, <code>""</code>, <code>''</code>,
									<code class="highlight"><span class="nt">&lt;tag&gt;;&lt;/tag&gt;;</span></code
									>, and even custom brackets.
								</p>
								<p>
									This was originally forked from pyparadigm's
									<em>SublimeBrackets</em> and <em>SublimeTagmatcher</em> (both are no longer
									available). I forked his repositories to fix a number issues I add some features I
									had wanted. I also wanted to improve the efficiency of the matching. Moving forward,
									I have thrown away all of the code and have completely rewritten the entire code
									base to allow for more flexibility, faster matching, and a more feature rich
									experience.
								</p>
							</li>
							<li>
								<p>
									<strong><u>Compass</u>:</strong
									><a target="_blank" href="https://packagecontrol.io/packages/Compass"
										>https://packagecontrol.io/packages/Compass</a
									>
								</p>
								<a class="img-guide" href="assets/img/st3_BracketHihglighter.jpg"
									><img src="assets/img/st3_BracketHihglighter.jpg"
								/></a>
								<p>
									Adds a Build System for Compass Watch when opening SASS Files. (<a
										href="#sassPackage"
										>Sublime-Text-2-SASS-Package</a
									>
									or similar SASS Package needed).
									<u
										>Create a project and place the Sublime Text Project file in your project's
										folder root</u
									>. Example: yourproject/project.sublime-project
									<strong
										>A Sublime Text Project File in the root of your project is necessary.</strong
									>
								</p>
								<p>
									<strong><u>REMEMBER</u></strong> A config.rb file is created when save/build a SASS
									file, move the file to project root and edit to match the folders tree and set the
									"output_style" (:nested, :expanded, :compact, :compressed). More information at
									<a
										target="blank"
										href="http://compass-style.org/help/documentation/configuration-reference/"
										>Compass documentation</a
									>
								</p>
							</li>
							<li>
								<p>
									<strong><u>Emmet</u>:</strong
									><a
										target="_blank"
										href="https://github.com/emmetio/sublime-text-plugin#emmet-2-for-sublime-text-editor"
										>https://github.com/emmetio/sublime-text-plugin#emmet-2-for-sublime-text-editor</a
									>
								</p>
								<a class="img-guide" href="assets/img/st3_emmet.png"
									><img src="assets/img/st3_emmet.png"
								/></a>
								<p>
									Emmet is a plugin for many popular text editors which greatly improves HTML & CSS
									workflow. Read the
									<a target="blank" href="https://docs.emmet.io/cheat-sheet/">Cheat sheet</a>
									for use
								</p>
							</li>
							<li>
								<p>
									<strong><u>HTML-CSS-JS Prettify</u>:</strong
									><a target="_blank" href="https://github.com/victorporof/Sublime-HTMLPrettify"
										>https://github.com/victorporof/Sublime-HTMLPrettify</a
									>
								</p>
								<p>
									This is a Sublime Text 3 Plugin for reducing (Minify) or prettify (ident) the code
									size of HTML5, CSS3 and Javascript files.
								</p>
								<a class="img-guide" href="assets/img/st3_prettify.png"
									><img src="assets/img/st3_prettify.png"
								/></a>
								<p>
									If you get an error about Node.js not being found or similar, you don't have node in
									the right path. Try setting the absolute path to node in
									HTMLPrettify.sublime-settings. To get absolute path type in command line
									<code>where node</code>
								</p>
								<ul>
									<li>
										Go to <strong>Preferences</strong> &gt; <strong>Package settings</strong> &gt;
										<strong>HTML-CSS-JS Prettify</strong>
										&gt;
										<strong>Plugin options - User</strong>
									</li>
									<li>
										add
										<code>"node_path": { "windows": "C:/path/to/node.exe", },</code>
									</li>
								</ul>
								<p>
									SASS identation shows Linter warnings about identation, configure each SASS/SCSS
									file in 2 spaces and add next line:
								</p>
								<ul>
									<li>
										Go to <strong>Preferences</strong> &gt; <strong>Package settings</strong> &gt;
										<strong>HTML-CSS-JS Prettify</strong>
										&gt;
										<strong>Plugin options - User</strong>
									</li>
									<li>
										add
										<code> "use_editor_indentation": true,</code>
									</li>
								</ul>
								<p><strong>Use:</strong></p>
								<ul>
									<li>
										In order to minify code in current file press
										<strong>Shift + Alt + Ctrl + M</strong>
										. If you press
										<strong>Shift + Ctrl + M</strong> or click on the <strong>Tools</strong> menu
										and click <strong>Minify Current File</strong> a .min file be added onto the
										current directory where you are working. Alternatively, Right Click on the
										Editor area or the sidebar and click 'Minify HTML5 File'.
									</li>
									<li>
										To Beautify code (ident, space, arrange, etc) use
										<strong>Shift + Ctrl + H</strong>.
									</li>
								</ul>
							</li>
							<li>
								<p>
									<strong><u>Language - Spanish</u>:</strong
									><a target="_blank" href="https://packagecontrol.io/packages/Language%20-%20Spanish"
										>https://packagecontrol.io/packages/Language%20-%20Spanish</a
									>
								</p>
								<p>
									Add Spanish spelling languages to your Sublime Text editor. Based on dictionaries
									Spanish from titoBouzout and superbob.
								</p>
								<a class="img-guide" href="assets/img/st3_languageSpanish.png"
									><img src="assets/img/st3_languageSpanish.png"
								/></a>
								<ol>
									<li>Install the package : “Language - Spanish”</li>
									<li>
										Choose the language (View &gt;; Dictionary &gt;; Language - Spanish &gt;; es_Es)
									</li>
									<li>
										Be sure spelling is activated (Press
										<strong>F6</strong> or go to <strong>View &gt; Spell Check</strong>)
									</li>
									<li>
										Verify/add on Sublime Text preferences (<strong
											>&gt; settings &gt; User File</strong
										>) the line:
										<code>"dictionary": "Packages/Language - Spanish/es_ES.dic",</code>
									</li>
								</ol>
							</li>
							<li>
								<p>
									<strong><u>LiveReload</u>:</strong
									><a target="_blank" href="https://github.com/alepez/LiveReload-Sublime Text3"
										>https://github.com/alepez/LiveReload-Sublime Text3</a
									>
								</p>
								<p>Enables reload page after compass SASS compilation and/or file saving.</p>
								<a class="img-guide" href="assets/img/st3_livereload.png"
									><img src="assets/img/st3_livereload.png"
								/></a>
								<ol>
									<li>Install From Package Control</li>
									<li>
										Open Google Chrome, search and install liveReload extension
										<a
											target="_blank"
											href="https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei"
											>here</a
										>
									</li>
									<li>
										To use it with local files, be sure to enable "<strong
											>Allow access to file URLs</strong
										>" checkbox in Chrome's menu
										<strong>Tools &gt; Extensions &gt; LiveReload </strong>
										after installation.
									</li>
									<li>
										Open FireFox, search and install liveReload extension
										<a
											target="_blank"
											href="https://addons.mozilla.org/es/firefox/addon/livereload-web-extension/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search"
											>here</a
										>.
									</li>
									<li>
										Open sublime text an edit:<br />
										Preferences -> package settings -> LiveReload -> Settings - User<br />
										Preferences -> package settings -> LiveReload -> Settings - Default<br /><code
											>{"enabled_plugins":["CompassPlugin","SimpleReloadPluginDelay"]}</code
										><br />
										*The "enabled_plugins" names are the .py filename of each plugin
									</li>
								</ol>
								<p>
									To activate in Sublime Text (if not runing) goto
									<strong
										>Preferences &gt; package settings &gt; LiveReload &gt; plugin-ins
										enable/disable</strong
									>. Then select Enable/Disable 400ms an activate from navigator clicking on the
									extension icon
								</p>
							</li>
							<li>
								<p>
									<strong><u>Minify</u>:</strong
									><a target="_blank" href="https://packagecontrol.io/packages/Minify"
										>https://packagecontrol.io/packages/Minify</a
									>
								</p>
								<p>
									Minify the code (like HTML-CSS-JS Prettify) and create a new file pressing
									<strong>Ctrl + Alt + M</strong>, but uses another sintax in js-breatify probably
									minifying code better than others
								</p>
								<a class="img-guide" href="assets/img/st3_minify.png"
									><img src="assets/img/st3_minify.png"
								/></a>
								<p>
									To best perform change/add the next lines in minify user settings:
									<strong>Preferences &gt; Package settings &gt; Minify &gt; Settings - User</strong>
								</p>
								<code
									>"html-minifier_options": "--collapse-boolean-attributes --collapse-whitespace
									--html5 --minify-css --minify-js --process-conditional-comments --remove-comments
									--remove-empty-attributes --remove-redundant-attributes
									--remove-script-type-attributes --remove-style-link-type-attributes
									--quote-character '",</code
								>
								<p>* Force to remove line breaks on .html code</p>
							</li>
							<li>
								<p>
									<strong><u>Powershell</u>:</strong
									><a target="_blank" href="https://packagecontrol.io/packages/PowerShell"
										>https://packagecontrol.io/packages/PowerShell</a
									>
								</p>
								<p>Adds support for the MS PowerShell programming language syntax.</p>
								<a class="img-guide" href="assets/img/st3_powershell.png"
									><img src="assets/img/st3_powershell.png"
								/></a>
							</li>
							<li>
								<p id="sassPackage">
									<strong><u>SASS</u>:</strong
									><a target="_blank" href="https://packagecontrol.io/packages/Sass"
										>https://packagecontrol.io/packages/Sass</a
									>
								</p>
								<p>
									Includes completions for CSS properties and values, as well as relevant Sass
									functions. Highlights code using up to date specifications for properties and values
									to help you catch typos. Syntax highlighting should be very similar to CSS and LESS
									(which is maintained in parallel).
								</p>
								<a class="img-guide" href="assets/img/st3_Sass.png"
									><img src="assets/img/st3_Sass.png"
								/></a>
							</li>
							<li>
								<p>
									<strong><u>Sidebar Enhancements</u>:</strong
									><a target="_blank" href="https://packagecontrol.io/packages/SideBarEnhancements"
										>https://packagecontrol.io/packages/SideBarEnhancements</a
									>
								</p>
								<p>
									Provides enhancements to the operations on Sidebar of Files and Folders for Sublime
									Text.
								</p>
								<a class="img-guide" href="assets/img/st3_sidebarEnhancements.png"
									><img src="assets/img/st3_sidebarEnhancements.png"
								/></a>
							</li>
							<li>
								<!-- Start of Sublime Text linter package -->
								<p>
									<strong><u>SublimeLinter</u>:</strong
									><a target="_blank" href="http://www.sublimelinter.com"
										>http://www.sublimelinter.com</a
									>
								</p>
								<p>
									Welcome to SublimeLinter, a linter framework for Sublime Text 3. Linters are not
									included, they must be installed via Package Control.
								</p>
								<a class="img-guide" href="assets/img/st3_SublimeLinter.png"
									><img src="assets/img/st3_SublimeLinter.png"
								/></a>
								<p>Next are the basic linters for CSS, SASS, SCSS, JavaScript, JSON and PHP.</p>
								<ul>
									<li>
										<p>
											Package name:
											<code class="oneline">sublimelinter-csslint</code>Requires:
											<a
												target="_blank"
												href="https://github.com/SublimeLinter/SublimeLinter-csslint"
												>csslint</a
											><code>npm install -g csslint</code>
										</p>
									</li>
									<li>
										<p>
											Package name:
											<code class="oneline">sublimelinter-jshint</code>Requires:
											<a
												target="_blank"
												href="https://github.com/SublimeLinter/SublimeLinter-jshint"
												>jshint</a
											><code>npm install -g jshint</code>. To use ES6 with jshint create a file
											called <strong>settings.jshintrc</strong>, whit this code:
											<code>{"esversion": 6}</code>, save where you want (safe directory or
											online), then add next code to <strong>Preferences</strong> &gt;
											<strong>Package settings</strong>
											&gt;
											<strong>SublimeLinter</strong> &gt; <strong>Settings</strong
											><code class="oneline"
												>"linters": {"jshint": {"args":["--config",
												"path/to/settings/file/settings.jshintrc"]}},}</code
											>
										</p>
									</li>
									<li>
										<p>
											Package name:
											<code class="oneline">sublimelinter-json</code>
											if you want a strict use of linter (not allow comments after coma or end
											files) add next code to
											<strong>Preferences</strong> &gt;
											<strong>Package settings</strong>
											&gt;
											<strong>SublimeLinter</strong> &gt; <strong>Settings</strong
											><code class="oneline">"linters": {"json": {"strict": true},}</code>
										</p>
									</li>
									<li>
										<p>
											Package name:
											<code class="oneline">sublimelinter-contrib-sass-lint</code>Requires:
											<a
												target="_blank"
												href="https://github.com/skovhus/SublimeLinter-contrib-sass-lint"
												>sass-lint</a
											><code>npm install -g sass-lint</code>to set ident spaces to 4 add next code
											to <strong>Preferences</strong> &gt;
											<strong>Package settings</strong>
											&gt;
											<strong>SublimeLinter</strong> &gt; <strong>Settings</strong
											><code class="oneline"
												>"linters": { "sass-lint": { "rules": {"indentation": [2, {"size":
												4}]}},}</code
											>
										</p>
									</li>
									<li>
										<p>
											Package name:
											<code class="oneline">sublimelinter-php</code>Requires:
											<a target="_blank" href="https://github.com/SublimeLinter/SublimeLinter-php"
												>PHP</a
											>
											The path to php.exe is required to linter PHP code, go to
											<strong>Preferences</strong> &gt;
											<strong>Package settings</strong>
											&gt;
											<strong>SublimeLinter</strong> &gt; <strong>Settings</strong> an add at same
											level of <code>"linters:"{}</code
											><code class="oneline">
												"paths": { "windows": ["&ltc:/path/to/php_folder&gt;",]},</code
											>
										</p>
									</li>
								</ul>
							</li>
							<!-- End of Sublime Text linter package -->
							<li>
								<p>
									<strong><u>SublimeOnSaveBuild</u>:</strong
									><a target="_blank" href="https://github.com/alexnj/SublimeOnSaveBuild"
										>https://github.com/alexnj/SublimeOnSaveBuild</a
									>
								</p>
								<p>This is a simple plugin for Sublime Text to trigger a build on each save.</p>
								<a class="img-guide" href="assets/img/st3_sublimeOnSaveBuild.jpg"
									><img src="assets/img/st3_sublimeOnSaveBuild.jpg"
								/></a>
								<p><strong>Tips:</strong></p>
								<ul>
									<li>
										<p>
											Create a JavaScript Build for Sublime Text on
											<strong>Tools</strong> &gt; <strong>Build System</strong> &gt;
											<strong>New Buld System</strong>
											with this code:
										</p>
										<code
											>{ "cmd": ["C:/Program Files/nodejs/node.exe", "$file"], "selector":
											"source.js" }</code
										>
										<p>
											*To find nodejs path use
											<code>where node</code> from command line
										</p>
										<p>
											and save to
											<code>%AppData%\Sublime Text 3\Packages\User\JavaScript.sublime-build</code>
										</p>
									</li>
									<li>
										Set <strong>Tools</strong> &gt; <strong>Build System</strong> &gt;
										<strong> Atomatic</strong> To choose the file type build on first save on file.
									</li>
									<li>
										To activate on every save go to
										<strong>Preferences</strong> &gt; <strong>Package settings</strong> &gt;
										<strong>SublimeOnSaveBuild</strong> &gt; <strong>Preferences</strong> &gt;
										<strong>Settings - User</strong> and insert this code:
										<code>{"build_on_save": 1}</code>
									</li>
								</ul>
							</li>
						</ul>
						<!-- End of Sublime packages list -->
					</li>
					<!-- End of Sublime Text 3 Plugins-->











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
									These settings are from lastest settings file: { "editor.formatOnSave": true,
									"editor.formatOnPaste": true, "editor.acceptSuggestionOnEnter":"off",
									"editor.mouseWheelZoom": true, "editor.cursorSmoothCaretAnimation": true,
									"files.trimFinalNewlines": true, "files.insertFinalNewline": true,
									"workbench.colorTheme": "Visual Studio Dark", "workbench.startupEditor": "none",
									"workbench.editor.showTabs": true, "powershell.buttons.showPanelMovementButtons":
									true, "liveServer.settings.fullReload": true, "liveSassCompile.settings.formats": [
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
