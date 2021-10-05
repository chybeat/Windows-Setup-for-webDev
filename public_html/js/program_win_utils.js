let winUtils=[{name:name="Node.js",logo:logo="assets/img/nodejsLogo.svg",desc:desc="Node.js® is a JavaScript software environment (server) build with Chrome JavaScript V8 engine.",links:links=[{href:href="https://nodejs.org/en/download/",text:text="Visit Node.js download page",target:target="_blank"}]},{name:name="Ruby",logo:logo="assets/img/rubyLogo.svg",desc:desc="Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.",links:links=[{href:href="https://rubyinstaller.org/downloads/",text:text="Visit the RubyInstallers download page",target:target="_blank"}],configs:configs=[{instruction:instruction="Run from Ruby Command-Line the next coommands",steps:steps=[{explain:explain="Update Ruby",code:code="gem update --system",altern:altern="(Use to update ruby files to latests versions)"}]}]},{name:name="Windows terminal",logo:logo="assets/img/windowsTerminalLogo.svg",desc:desc="Windows Terminal is a new, modern, feature-rich, productive terminal application for command-line users. It includes many of the features most frequently requested by the Windows command-line community including support for tabs, rich text, theming, styling and more.",links:links=[{href:href="ms-windows-store://pdp/?ProductId=9N0DX20HK701",text:text="Install From Microsoft Store (Recomended)",target:target="_blank"},{href:href="https://github.com/microsoft/terminal",text:text="Download and install manually from Github",target:target="_blank"}],configs:configs=[{instruction:instruction="After install follow these recomnedations:",steps:steps=[{explain:explain="Click to down triangle in tittle bar, and choose Settings or press <kbd>Ctrl</kbd> + <kbd>,</kbd>"},{explain:explain="In <q>Startup</q> set <q>Default profile</q> to Ubuntu-XX.XX.",altern:altern="(The version of linux Ubuntu may be change for you)"},{explain:explain="In <q>Appearance</q> set the tab width mode to <q>Title length</q>."},{explain:explain="In <q>Actions</q> check the shortcuts to learn about it or update."},{explain:explain="In <q>Profiles</q> area click on <q>Windows PowerShell</q>, then go to <q>Appearance</q> tab and choose the color scheme <q>Campbell Powershell</q> for last change the font face to <q>Consolas</q>."},{explain:explain="In <q>Profiles</q> area click on <q>Command Prompt</q>, click on <q>Appearance</q> tab and choose the color scheme <q>Campbell</q> then change the font face to <q>Consolas</q>."},{explain:explain="In <q>Profiles</q> area, click in <q>Ubuntu</q> click on <q>Appearance</q> tab and choose the color scheme <q>Campbell</q> then change the font face to <q>Cascadia code</q>.",altern:altern="(The suggested appearence changes makes diferent all terminal consoles)"}]}]},{name:name="HeidiSQL",logo:logo="assets/img/heidySqlLogo.svg",desc:desc="HeidiSQL is a free software lets you see and edit data and structures from computers running one of the database systems MariaDB, MySQL, Microsoft SQL, PostgreSQL and SQLite.",links:links=[{href:href="https://www.heidisql.com/download.php",text:text="Visit Heidy SQL Download Page",target:target="_blank"}]},{name:name="Mysql Comunity",logo:logo="assets/img/mysqlLogo.svg",desc:desc="MySQL Community Edition is a RDBMS freely downloadable version of the world's most popular open source database based on SQL.",links:links=[{href:href="https://dev.mysql.com/downloads/windows/installer/8.0.html",text:text="Visit MySQL Community Downloads page",target:target="_blank"}],configs:configs=[{instruction:instruction="** Verify and uninstall if <q>Mysql installer - Community</q> is installed on your system, and be carefully <strong>not use the web version</string> of the installer (mysql-installer-web-community-X.X.X.msi)"}]},{name:name="Git (GitBash)",logo:logo="assets/img/gitBashLogo.svg",desc:desc="Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",links:links=[{href:href="https://git-scm.com/download/win",text:text="Visit Git Download page",target:target="_blank"}],configs:configs=[{instruction:instruction="Setup the username, email and other configurations for Git Bash.",steps:steps=[{explain:explain="Get and check the current configuration settings",code:code="git config --global --list",altern:altern="If not global configuration exists a <q>fatal: unable to read config file <q>/home/{currentuser}/.gitconfig</q>: No such file or directory</q> message appears."},{explain:explain="Set <q>user.name<q> or not configuration file exist, use next code to set your name",code:code='git config --global user.name "User name"',altern:altern="Remember set your name into quotes"},{explain:explain="Set <q>user.email<q> or not configuration file exists set your email white next code",code:code='git config --global user.email "your@email.com"',altern:altern="Remember to set your email between quotes"},{explain:explain="Open a file from git bash with Visual studio code just type the command:",code:code="code path/to/filename.txt"},{explain:explain="Set the Visual Studio Code as default editor in Git Bash",code:code='git config --global core.editor "code --wait"',altern:altern="Remeber set the quotes"},{explain:explain="To test Visual Studio Code as your default editor, the next command open global .gitconfig file into Visual Studio Code.",code:code="git config --global -e"},{explain:explain="To set Visual Studio Code as your difftool, you need to go into global git config file. Which you can access through previous mentioned command <code>git config --global -e</code> then you need to add those entries (or replace existing ones) and save the changes.",code:code='<pre>[diff]&#10;&#09;tool = vscode&#10;[difftool "vscode"]&#10;&#09;cmd = code --wait --diff $LOCAL $REMOTE</pre>'}]}]},{name:name="Sourcetree",logo:logo="assets/img/sourcetreeLogo.svg",desc:desc="Sourcetree simplifies how you interact with your Git repositories so you can focus on coding. Visualize and manage your repositories through Sourcetree's simple Git GUI.",links:links=[{href:href="https://www.sourcetreeapp.com/",text:text="",target:target="_blank"}],configs:configs=[{instruction:instruction="",steps:steps=[{explain:explain="",code:code="",altern:altern="",image:image=""}]}]}];function addWinUtils(destination){let dest=document.querySelector(destination);for(var util of Object.values(winUtils)){if(article=document.createElement("article"),header=document.createElement("header"),titleLink=document.createElement("a"),titleLink.href=util.links[0].href,titleLink.target=util.links[0].target,titleLink.title=util.links[0].text,utilNameTitle=document.createElement("h3"),utilNameTitle.innerHTML=util.name,containerLogo=document.createElement("span"),containerLogo.className="logo inline",logo=document.createElement("img"),logo.src=util.logo,logo.alt="Logo "+util.name,containerLogo.appendChild(logo),titleLink.appendChild(utilNameTitle),titleLink.appendChild(containerLogo),header.appendChild(titleLink),util.links.length>1)for(link=1;link<util.links.length;link++)optLink=document.createElement("a"),optLink.className="oneline",optLink.href=util.links[link].href,optLink.target=util.links[link].target,optLink.title=util.links[link].text,optLink.innerHTML="(Optional) "+util.links[link].text,header.appendChild(optLink);if(article.appendChild(header),desc=document.createElement("p"),desc.innerHTML=util.desc,article.appendChild(desc),void 0!==util.configs&&"object"==typeof util.configs){for(var config of(utilConfigList=document.createElement("ul"),Object.values(util.configs)))if(html_config=document.createElement("p"),html_config.innerHTML=config.instruction,utilConfigList.appendChild(html_config),void 0!==config.steps&&"object"==typeof config.steps){for(var step of(configSteps=document.createElement("ol"),Object.values(config.steps)))html_step=document.createElement("li"),html_step.innerHTML=step.explain,void 0!==step.code&&"string"==typeof step.code&&(html_stepCode=document.createElement("code"),html_stepCode.className="oneline",html_stepCode.innerHTML=step.code,html_step.appendChild(html_stepCode)),void 0!==step.altern&&"string"==typeof step.altern&&(html_stepAltern=document.createElement("i"),html_stepAltern.className="oneline",html_stepAltern.innerHTML=step.altern,html_step.appendChild(html_stepAltern)),void 0!==step.image&&"string"==typeof step.image&&(html_stepImg=document.createElement("img"),console.log("Whats up with images???"),html_stepImg.scr=step.image,html_step.appendChild(html_stepImg)),configSteps.appendChild(html_step);utilConfigList.appendChild(configSteps)}article.appendChild(utilConfigList)}dest.appendChild(article)}}