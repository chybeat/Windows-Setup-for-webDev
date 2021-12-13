let openExtensionView="Bring up the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of VS Code or the View: Extensions command <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd>).";const plugAddExt=[{name:"Live Server - Web Extension",mainProgram:["Google Chrome Dev","Firefox Developer Edition","Opera Developer"],desc:"This browser add-on is an extension for a developer tool in VS Code editor (Live Server). With this add-on installed, along with the VS Code extension, it gives you a functionality to automatically update your website on save; for other files than just .htm and .html.<br><br>So specifically, with this add-on, live reload will also work with the following server-side files within the spectrum of: PHP, .NET and NodeJS.",icon:"assets/img/addOn-liveReloadExtension-logo.svg",links:[{specific:!0,program:["Google Chrome Dev","Opera Developer"],href:"https://chrome.google.com/webstore/detail/live-server-web-extension/fiegdmejfepffgpnejdinekhfieaogmj",text:"Google Chrome Extension",title:"Visit the Live Server Web Extension on chome web store"},{specific:!0,program:"Firefox Developer Edition",href:"https://addons.mozilla.org/en-US/firefox/addon/live-server-web-extension/",text:"Firefox Complement",title:"Visit the Live Server Web Extension on Firefox Browser Add-ons"}],settings:[{title:"Direct Setup",explain:"If you doesn't coding a server side language (PHP, .NET or NodeJS) you no need to configure the extension in browser, just activate the visual studio code extension makes the refresh on browser. For server side language follow the next steps",steps:["Install Visual Studio Code from Microsoft. (code editor)","Install VS Code Live Server. (extension to code editor)","Install the browser add-on (Chrome or Firefox.)","Install and run a server on your machine(PHP, .NET or NodeJS)","Place your app on the server and open your project there.",'Enter the neccesary fields (screenshot below)<ol type="a"><li><strong>Actual Server Address:</strong> is the address where your server is located and the port.</li><li><strong>Live Server Address:<strong> is the address where Visual Studio code extension is running.',"Push the <i>Go Live-button</i> in your editor's statusbar.","Visit the <i>Actual Server Address<i>"],image:"assets/img/addOn-LiveReloadExtension-DirectSetup.png"}]},{name:"Remote - WSL",mainProgram:"Visual Studio Code",desc:"The Remote - WSL extension lets you use Visual Studio Code on Windows to build Linux applications that run on the Windows Subsystem for Linux (WSL). You get all the productivity of Windows while developing with Linux-based tools, runtimes, and utilities.",icon:"assets/img/addOn-remoteWSL-logo.png",links:[{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl",text:"Visit Remote - WSL MaketPlace",title:"Go to Remote WSL Marketplace page"}],uses:[{title:"Install from marketplace",image:"assets/img/addOn-remoteWSL-install.png",steps:["Launch Visual Studio Code.",openExtensionView,'Paste the following text and press enter:<code class="oneline">ms-vscode-remote.remote-wsl</code>','Click on "install" button']},{title:"Open Visual Studio Code from WSL terminal",explain:"Launch a new instance of Visual Studio Code connected to WSL by opening a WSL terminal, navigating to the folder of your choice, and typing the code below. First time you launch from terminal a Visual Studio Code server may will be installed.",code:"code .",image:"assets/img/addOn-remoteWSL-use-open-vscode-from-linux-terminal.png"},{title:"Open a WSL instance from Visual Studio Code",explain:"It's possible to open an instance WSL From Visual Studio Code. select the green remote indicator in the lower left corner of the status bar and selecting the option you want.",image:"assets/img/addOn-remoteWSL-use-open-wsl-from-vscode.png",steps:["Select the green remote indicator in the lower left corner of the status bar","Select the option you want"]}]},{name:"Powershell",mainProgram:"Visual Studio Code",desc:"Develop PowerShell modules, commands and scripts in Visual Studio Code!",icon:"assets/img/addOn-powershellExtension-logo.svg",links:[{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell",text:"Visit Powershell Extension marketplace site",title:"Powershell Extension marketplace site"}],uses:[{title:"Install from market place",explain:"You can intall the powershell extension from market place, just follow the next steps:",steps:["Launch Visual Studio Code.",openExtensionView,'Paste the following text and press enter:<code class="oneline">ms-vscode.PowerShell</code>','Click on "install" button']}],settings:[{title:"Package management update",explain:"The PowerShell extension, can shows a message advertising about PackageManagemnt issues and requires update. Follow next steps to fix.",steps:["Launch Powershell with administrator privileges.","paste the following command, and press enter.<code class=\"oneline\">powershell.exe -NoLogo -NoProfile -Command '[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Install-Module -Name PackageManagement -Force -MinimumVersion 1.4.6 -Scope CurrentUser -AllowClobber -Repository PSGallery'</code>","Accept any change and update (NuGet and/or PackageManagement) if asked"]}]}];function addOnTo(e){let t=new Array;for(var o of Object.values(e))t.push(o.name);if(t.length>0)for(var n of Object.values(t)){let e=!1;for(var i of Object.values(plugAddExt))if(i.mainProgram.includes(n)){let t=document.querySelector("#"+attrValueText(n));if(!e){let o=document.createElement("h3");o.innerHTML="VS Code Extensions",t.appendChild(o),e=!0}t.appendChild(extHtml(i,n))}}}function addPlugins(e){let t=document.querySelector(e);for(var o of Object.values(plugAddExt))t.appendChild(extHtml(o,"allSoftware"))}function extHtml(e,t){var o;if(e.links.length>1&&"allSoftware"!=t)for(var n of Object.values(e.links))n.program.includes(t)&&(o=n);else o=e.links[0];let i=document.createElement("div");i.className="ext-addon";let a=document.createElement("h4");var l=document.createElement("span");l.className="logo inline";let s=document.createElement("img");if(s.src=e.icon,s.alt="Icon "+e.name,l.appendChild(s),"allSoftware"!=t){let n=document.createTextNode(e.name),s=document.createElement("a");s.title=e.name+" for "+t,s.target="_blank",s.href=o.href,s.appendChild(l),s.appendChild(n),a.appendChild(s),i.appendChild(a)}else{let t=document.createTextNode(e.name);a.appendChild(l),a.appendChild(t);let o=document.createElement("span");o.className="explicative",hostContainerText="For ","object"==typeof e.mainProgram?hostContainerText+=e.mainProgram.toString().replaceLast(","," and ").replace(",",", "):hostContainerText+=e.mainProgram.toString(),o.innerText=hostContainerText,a.appendChild(o)}let r=document.createElement("p");if(r.innerHTML=e.desc,i.appendChild(a),i.appendChild(r),"allSoftware"!=t){let n="Download "+e.name+" for "+t,a=document.createTextNode(n),l=document.createElement("a");l.title=n,l.target="_blank",l.className="button",l.href=o.href,l.appendChild(a),i.appendChild(l)}else for(linkData of e.links)if("object"==typeof linkData.program)for(prog of linkData.program){var d=document.createElement("a");let e=document.createTextNode("Download for "+prog);d.title=linkData.title,d.target="_blank",d.className="button",d.href=o.href,d.appendChild(e),i.appendChild(d)}else{let e=document.createElement("a"),t=document.createTextNode(linkData.text);e.title=linkData.title,e.target="_blank",e.className="button",e.href=o.href,e.appendChild(t),i.appendChild(e)}if(e.uses){let t=document.createElement("div");t.className="how-to-use";let o=document.createElement("h5");o.innerText="How to...",t.appendChild(o);var c=document.createElement("ul");for(use of e.uses){let e=document.createElement("li"),t=document.createElement("h6");if(t.innerText=use.title,e.appendChild(t),use.explain){let t=document.createElement("p");t.innerHTML=use.explain,e.appendChild(t)}if(use.image){let t=document.createElement("img");t.src=use.image,t.className="img-guide",t.alt=attrValueText("how to use "+use.title),e.appendChild(t)}if(use.code){let t=document.createElement("code");t.innerText=use.code,e.appendChild(t)}if(use.steps){let t=document.createElement("ol");for(step of use.steps){let e=document.createElement("li");e.innerHTML=step,t.appendChild(e)}e.appendChild(t)}c.appendChild(e)}t.appendChild(c),i.appendChild(t)}if(e.settings){let t=document.createElement("div");t.className="settings";let o=document.createElement("h6");o.innerText="Settings for "+e.name,t.appendChild(o);var m=document.createElement("ul");for(set of e.settings){let e=document.createElement("li"),t=document.createElement("h6");if(t.innerText=set.title,e.appendChild(t),set.explain){let t=document.createElement("p");t.innerHTML=set.explain,e.appendChild(t)}if(set.image){let t=document.createElement("img");t.src=set.image,t.className="img-guide",t.alt=attrValueText("setting "+set.title),e.appendChild(t)}if(set.code){let t=document.createElement("code");t.innerText=set.code,e.appendChild(t)}if(set.steps){let t=document.createElement("ol");for(step of set.steps){let e=document.createElement("li");e.innerHTML=step,t.appendChild(e)}e.appendChild(t)}m.appendChild(e)}i.appendChild(t),i.appendChild(m)}return i}