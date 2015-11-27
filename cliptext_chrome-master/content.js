
wordsChunk = document.getElementsByTagName('body')[0].textContent
wordsChunk = wordsChunk.replace(/\s{2,}/g, '').replace(/\n/g, ' ').split(' ');

wordSortTable = {};

for(i = 0; i < wordsChunk.length; i++){
    var current = wordsChunk[i].toLowerCase();
    wordSortTable[current] = wordSortTable[current] == undefined ? 1 : wordSortTable[current]+1;
}
wordSort = [];
for(var name in wordSortTable){
   if(name.length == 1 && name.match(/\W/g))
    continue;
   wordSort.push([name, wordSortTable[name]]);
}
wordSort.sort(function(a, b) {return b[1] - a[1]});
wordSort = wordSort.slice(0, 40);
// str = 'WordCount.js\n';
str = '\n';
for(var i = 0; i < wordSort.length; i++){
    // str += wordSort[i][1] +", "+ wordSort[i][0] + "\n";
    str += wordSort[i][0] +":"+ wordSort[i][1] + "<br>";
}
// alert(str);

// Send a message containing the selected text and page url back to the event (background) page
chrome.runtime.sendMessage({
	'action': 'submit the form',
	'url': window.location.href ,
	'selectedText' : str


});