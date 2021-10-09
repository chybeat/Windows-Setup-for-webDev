//Instructions for easily installation for WSL
let plugAddExt = [
	{
		mainProgram = "",
		extensions = [
			{
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
				uses = [
					{
						title = "",
						instruct = [
							{
								explain = "",
								image = "",
								steps =[
									"",
								]
							}
						]
					}
				],
				configs = [
					{
						title = "",
						instruct = [
							{
								explain = "",
								image = "",
								steps =[
									"",
								]
							}
						]
					}
				]
			}
		]
	}
]
//Instructions for install WSL with linux Ubuntu manually

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
