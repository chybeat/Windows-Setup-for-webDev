//Instructions for easily installation for WSL
let winUtils = [
	{
		name = "Node.js",
		logo = "assets/img/nodejsLogo.svg",
		desc = "Node.js® is a JavaScript software environment (server) build with Chrome JavaScript V8 engine.",
		links = [
			{
				href = "https://nodejs.org/en/download/",
				text = "Visit Node.js download page",
				target = "_blank"
			}
		]
	},{
		name = "Ruby",
		logo = "assets/img/rubyLogo.svg",
		desc = "Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.",
		links = [
			{
				href = "https://rubyinstaller.org/downloads/",
				text = "Visit the RubyInstallers download page",
				target = "_blank"
			}
		],
		configs = [
			{
				instruction = "Run from Ruby Command-Line the next coommands",
				steps = [
					{
						explain = "Update Ruby",
						code = "gem update --system",
						altern = "(Use to update ruby files to latests versions)",
					}
				]
			}
		]
	},{
		name = "Windows terminal",
		logo = "assets/img/windowsTerminalLogo.svg",
		desc = "Windows Terminal is a new, modern, feature-rich, productive terminal application for command-line users. It includes many of the features most frequently requested by the Windows command-line community including support for tabs, rich text, theming, styling and more.",
		links = [
			{
				href = "ms-windows-store://pdp/?ProductId=9N0DX20HK701",
				text = "Install From Microsoft Store (Recomended)",
				target = "_blank"
			},{
				href = "https://github.com/microsoft/terminal",
				text = "Download and install manually from Github",
				target = "_blank"
			}

		],
		configs = [
			{
				instruction = "After install follow these recomnedations:",
				steps = [
					{
						explain = "Click to down triangle in tittle bar, and choose Settings or press <kbd>Ctrl</kbd> + <kbd>,</kbd>",
					},{
						explain = "In <q>Startup</q> set <q>Default profile</q> to Ubuntu-XX.XX.",
						altern = "(The version of linux Ubuntu may be change for you)",
					},{
						explain = "In <q>Appearance</q> set the tab width mode to <q>Title length</q>.",
					},{
						explain = "In <q>Actions</q> check the shortcuts to learn about it or update.",
					},{
						explain = "In <q>Profiles</q> area click on <q>Windows PowerShell</q>, then go to <q>Appearance</q> tab and choose the color scheme <q>Campbell Powershell</q> for last change the font face to <q>Consolas</q>.",
					},{
						explain = "In <q>Profiles</q> area click on <q>Command Prompt</q>, click on <q>Appearance</q> tab and choose the color scheme <q>Campbell</q> then change the font face to <q>Consolas</q>.",
					},{
						explain = "In <q>Profiles</q> area, click in <q>Ubuntu</q> click on <q>Appearance</q> tab and choose the color scheme <q>Campbell</q> then change the font face to <q>Cascadia code</q>.",
						altern = "(The suggested appearence changes makes diferent all terminal consoles)"
					}
				]
			}
		]
	},{
		name = "HeidiSQL",
		logo = "assets/img/heidySqlLogo.svg",
		desc = "HeidiSQL is a free software lets you see and edit data and structures from computers running one of the database systems MariaDB, MySQL, Microsoft SQL, PostgreSQL and SQLite.",
		links = [
			{
				href = "https://www.heidisql.com/download.php",
				text = "Visit Heidy SQL Download Page",
				target = "_blank"
			}
		],
	},{
		name = "Mysql Comunity",
		logo = "assets/img/mysqlLogo.svg",
		desc = "MySQL Community Edition is a RDBMS freely downloadable version of the world's most popular open source database based on SQL.",
		links = [
			{
				href = "https://dev.mysql.com/downloads/windows/installer/8.0.html",
				text = "Visit MySQL Community Downloads page",
				target = "_blank"
			}
		],
		configs = [
			{
				instruction = "** Verify and uninstall if <q>Mysql installer - Community</q> is installed on your system, and be carefully <strong>not use the web version</string> of the installer (mysql-installer-web-community-X.X.X.msi)",
			}
		]
	},{
		name = "Git (GitBash)",
		logo = "assets/img/gitBashLogo.svg",
		desc = "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
		links = [
			{
				href = "https://git-scm.com/download/win",
				text = "Visit Git Download page",
				target = "_blank"
			}
		],
		configs = [
			{
				instruction = "Setup the username, email and other configurations for Git Bash.",
				steps = [
					{
						explain = "Get and check the current configuration settings",
						code = "git config --global --list",
						altern = "If not global configuration exists a <q>fatal: unable to read config file <q>/home/{currentuser}/.gitconfig</q>: No such file or directory</q> message appears.",
					},{
						explain = "Set <q>user.name<q> or not configuration file exist, use next code to set your name",
						code = "git config --global user.name \"User name\"",
						altern = "Remember set your name into quotes",
					},{
						explain = "Set <q>user.email<q> or not configuration file exists set your email white next code",
						code = "git config --global user.email \"your@email.com\"",
						altern = "Remember to set your email between quotes",
					},{
						explain = "Open a file from git bash with Visual studio code just type the command:",
						code = "code path/to/filename.txt",
					},{
						explain = "Set the Visual Studio Code as default editor in Git Bash",
						code = "git config --global core.editor \"code --wait\"",
						altern = "Remeber set the quotes"
					},{
						explain = "To test Visual Studio Code as your default editor, the next command open global .gitconfig file into Visual Studio Code.",
						code = "git config --global -e",
					},{
						explain = "To set Visual Studio Code as your difftool, you need to go into global git config file. Which you can access through previous mentioned command <code>git config --global -e</code> then you need to add those entries (or replace existing ones) and save the changes.",
						code = "<pre>[diff]&#10;&#09;tool = vscode&#10;[difftool \"vscode\"]&#10;&#09;cmd = code --wait --diff $LOCAL $REMOTE</pre>",
					}
				]
			},
		]

	},{
		name = "Sourcetree",
		logo = "assets/img/sourcetreeLogo.svg",
		desc = "Sourcetree simplifies how you interact with your Git repositories so you can focus on coding. Visualize and manage your repositories through Sourcetree's simple Git GUI.",
		links = [
			{
				href = "https://www.sourcetreeapp.com/",
				text = "Visit Sourcetree Home Page",
				target = "_blank"
			}
		],
		configs = [
			{
				instruction = "May be you like to setup soircetree too, this is possible in <q>Tools</q> menu and selecting options",
				steps = [
					{
						explain = "Setup User name and Email: In first tab (General) you can setup your name and email",
					},{
						explain = "To setup Github, bitbucket and/or other accounts go to <q>Authentication</q> tab to select and connect your services. ",
					}
				]
			}
		]
	},{
		name = "GitHub Desktop",
		logo = "assets/img/githubDesktopLogo.svg",
		desc = "Focus on what matters instead of fighting with Git. Whether you're new to Git or a seasoned user, GitHub Desktop simplifies your development work flow.",
		links = [
			{
				href = "https://desktop.github.com/",
				text = "Visit Desktop Github Home page",
				target = "_blank"
			}
		],
	},{
		name = "XAMPP",
		logo = "assets/img/xamppLogo.svg",
		desc = "XAMPP is a completely free, easy to install Apache distribution containing MariaDB, PHP, and Perl. The XAMPP open source package has been set up to be incredibly easy to install and use. <strong>(<u>Warning</u>: Use XAMPP only for development, not in production environments)</strong>",
		links = [
			{
				href = "https://www.apachefriends.org/es/index.html",
				text = "Visit the XAMPP Home Page",
				target = "_blank"
			}
		],
		configs = [
			{
				instruction = "Maybe you want to configure any or all of the next configurations. You need to search for a files and change some parameters.",
				steps = [
					{
						explain = "<q>httpd.conf</q> file to change the <code>DocumentRoot</code> and <code>&lt;Directory \"c:/path/to/files\"&gt;</code> paths. That's the folders where you will serve your documents.",
					},{
						explain = "<q>config.inc.php</q> to change the mysql/mariaDB login to request DB server user and password. Search and set the <q>auth_type</q> to <q>cookie</q>",
						code = "$cfg['Servers'][$i]['auth_type'] = 'cookie';"
					},{
						explain = "Download a <a target=\"_blank\" href=\"downloads/cert_localhost.cmd\" download>command line</a> script to create an https certificate for https://localhost (instructions in spanish)",
					},{
						explain = "Download special <a target=\"_blank\" href=\"downloads/folder_cert.cmd\" download>command line</a> script for create an https certificate for a folders from above <q>DocumentRoot</q> with a personalized domain (instructions in spanish)."
					},{
						explain = "If you want add PHP to your system path, use PowerShell with administrator privileges, paste next code where	<q>c:\\path\\to\\php_folder</q> is the folder where php.exe file location.",
						code = "Set-ItemProperty -Path 'Registry::HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Control\\Session Manager\\Environment' -Name PATH -Value ((Get-ItemProperty -Path 'Registry::HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Control\\Session Manager\\Environment' -Name PATH).path + \";c:\\path\\to\\php_folder\\\")"
					}
				]
			}
		]
	}
		
]


/*
	{
		name = "",
		logo = "",
		desc = "",
		links = [
			{
				href = "",
				text = "",
				target = "_blank"
			}
		],
		configs = [
			{
				instruction = "",
				steps = [
					{
						explain = "",
						code = "",
						altern = "",
						image = ""
					}
				]
			}
		]
	}
		
*/

function addWinUtils (destination){
	let dest = document.querySelector(destination);
	// main list tag
	for (var util of Object.values(winUtils)) {
		// Generate the container for current util in list
		article = document.createElement("article");

		//creating the header for current util
		header = document.createElement("header");

		//Title with link to download page
		titleLink = document.createElement("a");
		titleLink.href = util.links[0].href;
		titleLink.target = util.links[0].target;
		titleLink.title = util.links[0].text;

		//util name title
		utilNameTitle = document.createElement("h3");
		utilNameTitle.innerHTML = util.name;
		

		//util logo container
		containerLogo = document.createElement("span")
		containerLogo.className = "logo inline";
		
		//util logo img
		logo = document.createElement("img");
		logo.src = util.logo;
		logo.alt = "Logo " + util.name;
		containerLogo.appendChild(logo);

		// Adding title 
		titleLink.appendChild(utilNameTitle);
		titleLink.appendChild(containerLogo);

		// Addiing header
		header.appendChild(titleLink)
		
		
		//Adding optional Links
		if(util.links.length > 1){
			for(link = 1; (link < util.links.length ); link++){
				optLink = document.createElement("a");
				optLink.className = ("oneline");
				optLink.href = util.links[link].href;
				optLink.target = util.links[link].target;
				optLink.title = util.links[link].text;
				optLink.innerHTML = "(Optional) " + util.links[link].text;
				header.appendChild(optLink);
			}
		}
		article.appendChild(header);

		// Adding Description
		desc = document.createElement("p");
		desc.innerHTML = util.desc
		article.appendChild(desc);


		// Adding configurations and instructions

		if(typeof(util.configs) != "undefined" && typeof(util.configs) == "object"){
			// Adding the continer for configuration for current utility
			utilConfigList = document.createElement("ul");

			for (var config of Object.values(util.configs)) {
				html_config = document.createElement("p");
				html_config.innerHTML = config.instruction;
				utilConfigList.appendChild(html_config);
				if(typeof(config.steps) != "undefined" && typeof(config.steps) == "object"){
					configSteps= document.createElement("ol");
					for( var step of Object.values(config.steps)){
						html_step = document.createElement("li");
						html_step.innerHTML=step.explain
						// Adding code for step if exists
						if(typeof(step.code) != "undefined" && typeof(step.code) == "string"){
							html_stepCode = document.createElement("code");
							html_stepCode.className = ("oneline")
							html_stepCode.innerHTML = step.code;
							html_step.appendChild(html_stepCode);
						}
						// Adding alternate for step if exists
						if(typeof(step.altern) != "undefined" && typeof(step.altern) == "string"){
							html_stepAltern = document.createElement("i");
							html_stepAltern.className = ("oneline")
							html_stepAltern.innerHTML = step.altern;
							html_step.appendChild(html_stepAltern);
						}
						if(typeof(step.image) != "undefined" && typeof(step.image) == "string"){
							html_stepImg = document.createElement("img");
							console.log("Whats up with images???")
							//html_stepImg.className = ("oneline")
							html_stepImg.scr = step.image;
							html_step.appendChild(html_stepImg);
						}
					// Adding step to config list
					configSteps.appendChild(html_step);
					}
					utilConfigList.appendChild(configSteps)
				}
			}
			article.appendChild(utilConfigList);
		}
		dest.appendChild(article);
	}
}
