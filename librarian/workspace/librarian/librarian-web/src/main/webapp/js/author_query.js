var data_file = "http://localhost:8080/librarian-web/authors";
var http_request = new XMLHttpRequest();

http_request.onreadystatechange = function(){

   if (http_request.readyState == 4){
      var authorData = JSON.parse(http_request.responseText);

      var table = document.getElementById('queryList');
      table.innerHTML = generateTableHtml(authorData);
   }
};

http_request.open("GET", data_file, true);
http_request.send();

function generateTableHtml(data) {
	var monthNames = ["January", "February", "March", "April", "May", "June", 
	                  "July", "August", "September", "October", "November", "December"];
	var tableRows = "<tr><th> ID </th><th> Name </th><th> Nationality </th><th> Birth date </th></tr>";

	for (i = 0; i < data.length; i++) {
		var date0 = new Date(data[i].birthDate);
		if(date0 < new Date('10/15/1582')){
			date0.setDate(date0.getDate() - 10);
		}

		tableRows += 
			'<tr><td>' + data[i].authorID + '</td>' +
			'<td>' + data[i].name + ' </td>' +
			'<td>' + data[i].nationality + '</td>' +
			'<td>' + date0.getUTCFullYear() + '. ' + monthNames[date0.getMonth()] + ' ' + date0.getDate() + '.</td></tr>';
		}
		
		return tableRows;
}

$("document").ready(function(){
	$("#services").click(function(){
		$("#serviceSelection").stop().fadeToggle(2000);
	});
	
});