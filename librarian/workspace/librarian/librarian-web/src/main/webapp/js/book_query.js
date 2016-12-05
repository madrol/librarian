var data_file = "http://localhost:8080/librarian-web/books";
var http_request = new XMLHttpRequest();

http_request.onreadystatechange = function(){

   if (http_request.readyState == 4  ){
      var authorData = JSON.parse(http_request.responseText);

      var table = document.getElementById('queryList');
      table.innerHTML = generateTableHtml(authorData);
   }
};

http_request.open("GET", data_file, true);
http_request.send();

function generateTableHtml(data){
	var tableRows = "<tr><th> ID </th><th> Title </th></tr>";

	for(i = 0; i < data.length; i++){
		tableRows += 
			'<tr><td>' + data[i].bookId + '</td>' +
			'<td>' + data[i].title + '</td></tr>';
	}
	return tableRows;
}

$("document").ready(function(){
	$("#services").click(function(){
		$("#serviceSelection").stop().fadeToggle(2000);
	});
});