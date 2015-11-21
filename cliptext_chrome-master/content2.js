

// Send a message containing the selected text and page url back to the event (background) page
chrome.runtime.sendMessage({
	'action': 'submit the form',
	'url': window.location.href ,
	'selectedText' : window.document.getElementsByTagName('html')[0].innerText
	// 'selectedText' : window.getSelection().toString();
	// 'selectedText' : window.document.getElementsByTagName('html')[0].innerText
	// 'selectedText' : window.document.childNodes[1].innerText

	// 'selectedText' : window.document.childNodes[1].innerHTML


});