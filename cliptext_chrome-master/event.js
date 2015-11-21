

//이거하면 우클릭
// callback function
function onItemClick(info, tab){
	// Inject the content script into the current page
	chrome.tabs.executeScript(null, { file: 'content.js' });
}
function onItemClick2(info, tab){
	// Inject the content script into the current page
	chrome.tabs.executeScript(null, { file: 'content2.js' });
}

var context = "selection";
var title = "Term Frequency";
var id = chrome.contextMenus.create({"title": title, "contexts": [context], "onclick": onItemClick});

// var context2 = "selection2";
var title2 = "Log-Freuquency";
var id = chrome.contextMenus.create({"title": title2, "contexts": [context], "onclick": onItemClick2});

var title3 = "Inverse Document Frequency";
var id = chrome.contextMenus.create({"title": title3, "contexts": [context], "onclick": onItemClick});

var title4 = "TF-IDF";
var id = chrome.contextMenus.create({"title": title4, "contexts": [context], "onclick": onItemClick});

var title5 = "HTML-Tag";
var id = chrome.contextMenus.create({"title": title5, "contexts": [context], "onclick": onItemClick});

var title6 = "Extra Method...";
var id = chrome.contextMenus.create({"title": title6, "contexts": [context], "onclick": onItemClick});


// var getName =function(){
// 	var obj = document.getElementsByName('alg');
// 	for(val i=0; i<obj.length;i++){
// 		alert(obj[i].value + " : "+ obj[i].checked);
// 	}

// }

// //form, onclick
// var test = document.getElementById('test_btn');
// test.addEventListener('click', function(){
// 	var obj = document.getElementsByName('alg');
// 	for(val i=0; i<obj.length;i++){
// 		alert(obj[i].value + " : "+ obj[i].checked);
// 	// chrome.tabs.executeScript(null, { file: 'content.js' });
// })


// //form, onclick, radio box test
var testBtn = document.getElementById('test_btn');
testBtn.addEventListener('click', function(){

	// chrome.tabs.executeScript(null, { file: 'content.js' });

	var obj = document.getElementsByName("alg");
	for(var i=0; i<obj.length;i++){
		// alert(obj[i].value + " : "+ obj[i].checked);
		if(obj[i].checked)
		{
			// confirm(obj[i].value);
			// alert(obj[i].value);
			chrome.tabs.executeScript(null, { file: 'content.js' });
		}
	}
	// Inject the content script into the current page
 //    document.getElementById("u_score_value").value =
 //    document.getElementById("mw-content-text").firstChild.data;
	// chrome.tabs.executeScript(null, { file: 'content.js' });
})


//in the popup page, onclick
var analyze = document.getElementById('analyze');
analyze.addEventListener('click', function(){
    // alert('Hello world');
	// Inject the content script into the current page
	chrome.tabs.executeScript(null, { file: 'content.js' });
})

//do according to radio box
var selection =1;
if(selection == 0){
	var analyze = document.getElementById('submit_button');
analyze.addEventListener('click', function(){
	chrome.tabs.executeScript(null, { file: 'content.js' });
	})
}else if(selection == 1){
	var analyze = document.getElementById('submit_button');
analyze.addEventListener('click', function(){
	chrome.tabs.executeScript(null, { file: 'content2.js' });
	})
}else{
	var analyze = document.getElementById('submit_button');
analyze.addEventListener('click', function(){
	chrome.tabs.executeScript(null, { file: 'content.js' });
	})
}



//라디오박스 정보 메시지에 추가, in the str
// str="";
// var obj = document.getElementsByName("alg");
// for(var i=0; i<obj.length;i++){
// 	if(obj[i].checked==true)
// 	{
// 		str=obj[i].value;
// 		// append('radioBox' , abj[i].value.toString());
// 		// confirm(obj[i].value);
// 		// alert(obj[i].value);
// 	}
// }


// Perform the callback when a message is received from the content script
chrome.runtime.onMessage.addListener(function(message){
	if (message.action == 'submit the form'){
		//message should contain the selected text and url - ensure that this is the correct message
		var url = "data:text/html;charset=utf8,";
		
		function append(key, value){
			var input = document.createElement('textarea');
			input.setAttribute('name', key);
			input.textContent = value;
			form.appendChild(input);
		}
		
		var form = document.createElement('form');
		form.method = 'POST';
		form.action = 'http://www.cliptext.co/clipr.php';

		// form.action = 'http://localhost:8080/clipr.php';
		// form.action = 'http://localhost/cliptext/clipr.php';
		form.style.visibility = "hidden";
		append('url', message.url);
		append('text', message.selectedText);

		
		//append new info in message
		// append('radioBox',str );

		
		url = url + encodeURIComponent(form.outerHTML);
		url = url + encodeURIComponent('<script>document.forms[0].submit();</script>');
		chrome.tabs.create({url: url, active: true});
	}
});

// var context = "selection";
// var title = "Share with Cliptext!0";
// var id = chrome.contextMenus.create({"title": title, "contexts": [context], "onclick": onItemClick});

// var context2 = "selection2";
// var title2 = "Share with Cliptext!2";
// var id = chrome.contextMenus.create({"title": title2, "contexts": [context], "onclick": onItemClick});