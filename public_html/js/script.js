function attrValueText(o){let t=/[^A-Za-z-_0-9]/gm,e=/\s/g;var n;return(o=o.replace(e,"-").toLowerCase()).trim().replace(t,"")}function smoothScroll(o){let t=0,e;for(anchor of(scroll(0,0),""!=window.location.hash&&(e=document.querySelector(window.location.hash),null!=e&&scroll({top:e.offsetTop,behavior:"smooth"})),document.querySelectorAll("a"))){let o;anchor.href.match(window.location.origin+window.location.pathname+"#")&&anchor.addEventListener("click",(function(o){o.preventDefault(),window.location.hash=this.hash,scroll({top:document.querySelector(this.hash).offsetTop,behavior:"smooth"})}))}}String.prototype.replaceLast=function(o,t){var e=this.split(o),n=e.pop();return e.join(o)+t+n},window.onload=function(){scroll(0,0),addWebBrowsers("#webBrowsers"),addOnTo(browsersData),addWsl2("#wsl"),addWinUtils("#winUtils"),addOnTo(winUtils),addCodeEditors("#codeEditors"),addOnTo(codeEditors),addPlugins("#plugins"),smoothScroll()};