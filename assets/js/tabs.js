function openTab(evt, tabName) {
	let element;

	for (element of evt.currentTarget.parentNode.children) {
		if (element.nodeName == "DIV") {
			element.style.display = "none";
		} else {
			element.classList.remove("btn--primary");
			element.classList.add("btn--info");
		}
	}
	
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.classList.remove("btn--info");
	evt.currentTarget.classList.add("btn--primary");
}

// Remove links from tab buttons
for(a of document.getElementsByClassName("tablinks")) {
	a.href = "javascript:void(0);";
}

// Open the tabs for the current OS
for(let tabGroup of document.getElementsByClassName("tabcontainer")) {
	for(let tab of tabGroup.children) {
		if(navigator.platform.includes("Win")) {
			if(tab.classList.contains("windows")) {
				tab.click();
				break;
			} else if(tab.classList.contains("other")) {
				tab.click();
			}
		} else if(navigator.platform.includes("Mac")) {
			if(tab.classList.contains("macos")) {
				tab.click();
				break;
			} else if(tab.classList.contains("other")) {
				tab.click();
			}
		} else {
			if(tab.classList.contains("other")) {
				tab.click();
			}
		}
	}
}
