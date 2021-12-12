//Instructions for easily installation for WSL
let wslInstEasy = [
	{
		title: "One Easy way",
		info: "Try on PowerShell (with administrative privileges) the command bellow. The command enable the required optional components, download the latest linux kernel, set WSL 2 as your default, and install a Linux distribution for you <i>(Ubuntu by default, see below to change the distro)</i>.",
		code: "wsl --install",
		links: [
			{
				href: "https://docs.microsoft.com/en-us/windows/wsl/install",
				text: "Microsoft documentation page install WSL",
				target: "_blank",
			},
		],
	},
	{
		title: "Another Way",
		info: 'If the last command fails, may be you need especify the linux distribution: <code class="oneline">wsl --install -d Ubuntu</code> To see a list of available Linux distributions available for download, enter <code class="oneline">wsl -l -o</code>',
		links: [
			{
				href: "https://docs.microsoft.com/en-us/windows/wsl/install#change-the-default-linux-distribution-installed",
				text: "Change the default linux distribution",
				target: "_blank",
			},
		],
	},
];
//Instructions for install WSL with linux Ubuntu manually
let wslInstructions = [
	{
		title: "Activation of Windows Subsystem for Linux",
		info: "Run next command from PowerShell with administrative rights.",
		code: "dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart",
	},
	{
		title: "Activate the Virtual Machine Platform.",
		info: "May need to enable this CPU option in computer BIOS/UEFI. Run next command from PowerShell with administrative rights.",
		code: "ism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart",
	},
	{
		title: "Hypervisor launch type",
		info: 'Is probably that "hypervisor launch type" is not configured, but is required to working with WSL2, you can see the actual runing <code>bcdedit</code> in command prompt or pwoershell with administrator privileges.<br><br>If "hypervisorlaunchtype off" are displayed, then run:',
		code: "BCDEDIT /Set {current} hypervisorlaunchtype auto",
	},
	{
		title: "Restart computer",
		info: "<kbd>&#9888;</kbd>At this point a computer restart is required.<kbd>&#9888;</kbd>",
	},
	{
		title: "Download Windows Subsystem for Linux 2 kernel update",
		info: "Download from link bellow the WSL2 kernel Update. Then install it. Read the information from micrsoft",
		links: [
			{
				href: "https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi",
				text: "Download WSL2 kernel update",
			},
			{
				href: "https://docs.microsoft.com/en-us/windows/wsl/install-manual",
				text: "Manual installation steps for older versions of WSL",
				target: "_blank",
			},
		],
	},
	{
		title: "Activate WSL2",
		info: "Run this command from PowerShell with administrative rights.",
		code: "wsl --set-default-version 2",
	},
	{
		title: "Get Linux Ubuntu",
		info: "Open the Microsoft Store and search your favorite Linux distribution or download the Ubuntu 20.04 LTS package (link bellow).<br><br>Then open downloaded file (Ubuntu_2004.2020.424.0_x64.appx) or run from PowerShell with administrative rights this code:",
		code: "Add-AppxPackage c:\\path\\to\\Ubuntu_2004.2020.424.0_x64.appx",
		links: [
			{
				href: "https://aka.ms/wslubuntu2004",
				text: "Download Ubuntu 20.04 LTS",
			},
		],
	},
];

// Set of utilities and configurations for  Linux Ubuntu
let linuxConfig = [
	{
		title: "New username and password",
		info: "To set the username and password just open Linux terminal for first time, wait for username request, then set a password.",
	},
	{
		title: "Change password for user 'root'",
		info: "By default Ubuntu blocks the change to root user like using 'su root' command, but is not imposible to do that. A good practice is set a password to avoid the use of root user in your system.",
		code: [
			{
				info: "Switch to root user: ",
				text: "sudo -i",
			},
			{
				info: "Set new password",
				text: "passwd",
			},
			{
				info: "Close or exit from root user ",
				text: "exit",
			},
		],
	},
	{
		title: "Set home (~) directory:",
		info: "Not recomended but useful is change the location for home directory, specially if you install Windows regulary. Follow the next steps to make it:",
		code: [
			{
				info: "Run in terminal:",
				text: "sudo nano /etc/passwd",
			},
			{
				info: "Search in the file for this line:",
				text: "&lt;username&gt;:x:1000:1000:,,,:/home/&lt;username&gt;:/bin/bash",
			},
			{
				info: "then change	<code>/home/&lt;username&gt;</code> for wanted folder. Example:",
				text: "&lt;username&gt;:x:1000:1000:,,,:/mnt/d/develop:/bin/bash",
			},
			{
				info: "Save file and exit from nano pressing <kbd>CTRL</kbd> + <kbd>X</kbd>, <kbd>Y</kbd> then <kbd>Enter ⏎</kbd> to save changes, then press <kbd>Enter ⏎</kbd> again to accep the filename.",
			},
			{
				info: "Exit from terminal",
				text: "logout",
			},
			{
				info: "To verify, enter again to Linux terminal and write",
				text: "cd ~",
			},
			{
				info: "Then sun command:",
				text: "pwd",
			},
			{
				info: "Verify the folder showing are the writed before. Example:",
				text: "/mnt/d/develop",
			},
		],
	},
	{
		title: "Install net-tools",
		info: "Some net tools to check net status or connections, may be are not included in Ubuntu for WSL. To install just open the terminal and run commands the next command ",
		code: [
			{
				info: "install net-tools",
				text: "sudo apt install net-tools",
			},
			{
				info: "To test run:",
				text: "netstat",
			},
		],
	},
	{
		title: "Install inetutils-traceroute",
		info: "Some internet tools may be not installed in the package or Linux distro, to install just enter the follow commands",
		code: [
			{
				info: "install inetutils-traceroute",
				text: "sudo apt install inetutils-traceroute",
			},
			{
				info: "To test run:",
				text: "traceroute",
			},
		],
	},
	{
		title: "Install other tools",
		info: "Use these commands to install another usefull tools on ubunto",
		code: [
			{
				info: "install find utilities to find and search files or text",
				text: "sudo apt install findutils",
			},
			{
				info: "Install tree to visualize the directory and files list in tree format",
				text: "sudo apt install tree",
			},
			{
				info: "Install zip compressor",
				text: "sudo apt install zip",
			},
			{
				info: "Install htop (process viewer / killer)",
				text: "sudo apt install htop",
			},
		],
	},
	{
		title: "Update Linux",
		info: "The update needs 2 commands, one for retrieve the avaliable updates and other to make the update",
		code: [
			{
				info: "To get the available updates type",
				text: "sudo apt update",
			},
			{
				info: "To update/upgrade Linux enter the command:",
				text: "sudo apt upgrade",
			},
			{
				info: "Then, shows the packages to be upgraded, and ask about continue",
			},
			{
				info: "At the end of update just restart Linux terminal and the update being concluded.",
			},
		],
	},
	{
		title: "Install Node.js",
		info: "To install Node.js®, the JavaScript runtime for linux, just type the commnand:",
		code: "sudo apt install nodejs",
	},
	{
		title: "Install Node Package Manager (npm)",
		info: "To install npm just type the commnand:",
		code: "sudo apt install npm",
	},
];
/*
 */

function addWsl2(destination) {
	dest = document.querySelector(destination);
	title = document.createElement("h3");
	title.appendChild(document.createTextNode("Automatic installation and activation for Windows Subsystem for Linux"));
	dest.appendChild(title);
	htmlWSL(destination, wslInstEasy, "ol");

	//Title for manually activation
	title = document.createElement("h3");
	title.appendChild(document.createTextNode("Manually installation and activation for Windows Subsystem for Linux"));
	dest.appendChild(title);
	desc = document.createElement("p");
	desc.innerHTML =
		"If automatic installation fails or you want, is possible to activate WSL manually (or automated) following the next steps using Powershell.";
	dest.appendChild(desc);
	htmlWSL(destination, wslInstructions, "ol");

	title = document.createElement("h3");
	title.appendChild(document.createTextNode("Commands and configurations for Linux"));
	dest.appendChild(title);
	htmlWSL(destination, linuxConfig, "ul");
}

function htmlWSL(destination, object, ListType) {
	let dest = document.querySelector(destination);
	/*main list tag*/
	mainList = document.createElement(ListType);

	for (var wslInst of Object.values(object)) {
		/* Generate the li tag for current element list */
		li = document.createElement("li");

		/*title container */
		title = document.createElement("h3");
		text = document.createTextNode(wslInst.title);
		title.appendChild(text);
		li.appendChild(title);

		/*info container */
		info = document.createElement("p");
		info.innerHTML = wslInst.info;
		li.appendChild(info);

		/*code container */
		if (typeof wslInst.code != "undefined" && typeof wslInst.code == "string") {
			code = document.createElement("code");
			code.className = "oneline";
			code.innerHTML = wslInst.code;
			li.appendChild(code);
		} else if (typeof wslInst.code != "undefined" && typeof wslInst.code == "object") {
			codeList = document.createElement("ol");
			for (var cl of Object.values(wslInst.code)) {
				liCode = document.createElement("li");
				p = document.createElement("p");
				p.innerHTML = cl.info;
				liCode.appendChild(p);
				if (typeof cl.text != "undefined") {
					code = document.createElement("code");
					code.className = "oneline";
					code.innerHTML = cl.text;
					liCode.appendChild(code);
				}
				codeList.appendChild(liCode);
			}
			li.appendChild(codeList);
		}

		if (typeof wslInst.links != "undefined") {
			for (var wslLinks of Object.values(wslInst.links)) {
				link = document.createElement("a");
				link.appendChild(document.createTextNode(wslLinks.text));
				link.title = wslLinks.text;
				if (typeof wslLinks.target != "undefined") {
					link.target = wslLinks.target;
				}
				link.className = "oneline";
				link.href = wslLinks.href;
				li.appendChild(link);
			}
		}

		mainList.appendChild(li);
	}
	dest.appendChild(mainList);
}
