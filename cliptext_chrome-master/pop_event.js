// alert("hi")

// var hw = document.getElementById('hw');
// hw.addEventListener('click', function(){
//     // alert('Hello world');
// 	chrome.tabs.executeScript(null, { file: 'content.js' });

// })
	// window.findElementById('hw') 


// function check(){  // 유효성 검사
//      if(document.myform.id.value==""){
//         alert("ID를 입력하세요")
//         document.myform.id.focus();
//         return false;   // 함수 빠져나가도록
//      }else if(document.myform.pass.value==""){
//         alert("비밀번호를 입력 하세요")
//         document.myform.pass.focus();
//         return false;
//      }else{
//         alert("로그인 성공")
//    }
//   }

// var t = document.getElementById('target');
// t.addEventListener('submit', function(event){
//     if(document.getElementById('name').value.length === 0){
//         alert('Name 필드의 값이 누락 되었습니다');
//         event.preventDefault();
//     }
// });


// var analyze = document.getElementById('analyze');
// analyze.addEventListener('click', function(){
//     // alert('Hello world');
// 	// Inject the content script into the current page
// 	chrome.tabs.executeScript(null, { file: 'content.js' });
// })


// callback function
function onItemClick(info, tab){
	// Inject the content script into the current page
	chrome.tabs.executeScript(null, { file: 'content.js' });
}

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

		// append('text', str);
		// append('text',message.text);
		
		url = url + encodeURIComponent(form.outerHTML);
		url = url + encodeURIComponent('<script>document.forms[0].submit();</script>');
		chrome.tabs.create({url: url, active: true});
	}
});

var context = "selection";
var title_p = "Share with Cliptext!_popup";
var id = chrome.contextMenus.create({"title": title_p, "contexts": [context], "onclick": onItemClick});


