
//Title + 50
// wordsTitle = document.getElementById('firstHeading').textContent.replace(/\s{2,}/g, '').replace(/\n/g, ' ').split(' ');
// wordSortTable = {};
// for(i = 0; i < wordsTitle.length; i++){
//     var current = wordsTitle[i].toLowerCase();
//     wordSortTable[current] = wordSortTable[current] == undefined ? 50 : wordSortTable[current]+50;
// }


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
str = 'WordCounter.js\n';
for(var i = 0; i < wordSort.length; i++){
    str += wordSort[i][1] +", "+ wordSort[i][0] + "\n";
}
alert(str);