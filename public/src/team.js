//an auto generated file
$(document).ready(function(){
$('#header').load('/header.html', function(){
$.getScript("/src/headerLoader.js");
$.ajax({
url: '/file?path=team',
type: 'GET',
success: (data) => {
data = JSON.parse(data)
console.log(data)
data.forEach(function(fileName){
if(fileName.includes(".html") && fileName=="team.html")
$.ajax({
url: '/data/team/' + fileName,
type: 'GET',
success: (data) => {
console.log(data)
$("#test").append(data);$("head").append($("<link rel='stylesheet' type='text/css' href='/style/general.css'>"));
},
error: (err) => {
console.log(err);
}
});
});
},
error: (err) => {
console.log(err);
}
});
});
});