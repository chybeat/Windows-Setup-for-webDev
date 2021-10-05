const browsersData={Chrome:{name:"Google Chrome Dev",href:"https://www.google.com/chrome/dev/",img:{class:"chrome",src:"assets/img/chromeDevLogo.svg"},linkInfo:"(Direct Download)",desc:"Google Chrome for developers was built for the open web. You can test cutting-edge web platform APIs and developer tools that are updated weekly."},Firefox:{name:"Firefox Developer Edition",href:"https://download.mozilla.org/?product=firefox-devedition-stub&os=win&lang=es-ES",img:{class:"firefox",src:"assets/img/firefoxDevLogo.svg"},linkInfo:"(Go to web)",desc:"Firefox Developer Edition is the blazing fast browser that offers cutting edge developer tools and latest features included in the user (normal or non developer) browser."},Opera:{name:"Opera developer",href:"https://www.opera.com/download#developer",img:{class:"firefox",src:"assets/img/OperaDeveloper.svg"},linkInfo:"(Go to web)",desc:"This version is the bleeding edge development from Opera; features will be piloted, and may be shelved, taken back to the drawing board, or taken forward to the Opera Next stream."}};function addWebBrowsers(destination){let dest=document.querySelector(destination);for(var browser of(mainList=document.createElement("ol"),Object.values(browsersData)))li=document.createElement("li"),link=document.createElement("a"),text=document.createTextNode(browser.name),link.title=browser.name,link.href=browser.href,link.target="_blank",link.appendChild(text),img=document.createElement("img"),img.src=browser.img.src,img.className=browser.img.class,span=document.createElement("span"),span.className="logo inline",span.appendChild(img),desc=document.createElement("span"),desc.className="description",text=document.createTextNode(browser.desc),desc.appendChild(text),link.appendChild(span),secondLink=document.createElement("a"),secondLink.title="Download "+browser.name,secondLink.href=browser.href,secondLink.target="_blank",secondLink.className="button",text=document.createTextNode("Download "+browser.linkInfo),secondLink.appendChild(text),li.appendChild(link),li.appendChild(desc),li.appendChild(secondLink),mainList.appendChild(li);dest.appendChild(mainList)}