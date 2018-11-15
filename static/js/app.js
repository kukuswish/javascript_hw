// from data.js
var tableData = data;
var infoTable = d3.select("#ufo-table tbody");
// YOUR CODE HERE!

function filteredOutput(filBy=tableData){
	var filData = [];

}


tableData.forEach( (a,b) => {
	var rows = infoTable.append('tr');
	rows.append('td').html(a.datetime);
	rows.append('td').html(a.city);
	rows.append('td').html(a.state);
	rows.append('td').html(a.country);
	rows.append('td').html(a.shape);
	rows.append('td').html(a.durationMinutes);
	rows.append('td').html(a.comments);
});
console.log(tableData);

filteredOutput();

