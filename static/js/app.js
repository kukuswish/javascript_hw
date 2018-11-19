// from data.js
var tableData = data;
var infoTable = d3.select("#ufo-table tbody");
var subSelect = d3.select("#subFilter");
// YOUR CODE HERE!

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

function filteredOutput(filBy=''){
	var filData = [];

	switch(filBy){
		default:
			filData=tableData;
			break;
	}
	filData.forEach( (a,b) => {
		var rows = infoTable.append('tr');
		rows.attr('data-dt',a.datetime);
		rows.attr('data-state',a.state);
		rows.attr('data-city',a.city);
		rows.attr('data-country',a.country);
		rows.attr('data-shape',a.shape);
			
		rows.append('td').html(a.datetime);
		rows.append('td').html(a.city);
		rows.append('td').html(a.state);
		rows.append('td').html(a.country);
		rows.append('td').html(a.shape);
		rows.append('td').html(a.durationMinutes);
		rows.append('td').html(a.comments);
	});

	console.log(filBy);
}

function showFilter(){
	console.log(tableData);
	var dateL = tableData.map( a => a.datetime).filter(onlyUnique);
	var cityL = tableData.map( a => a.city ).filter(onlyUnique);
	var countryL = tableData.map( a => a.country ).filter(onlyUnique);
	var stateL = tableData.map( a => a.state ).filter(onlyUnique);
	var shapeL = tableData.map( a => a.shape ).filter(onlyUnique);
	
	dateL.forEach(function(a){
		d3.select("#dtFilter").append('option').attr('value',a).text(a);
	});
	
	cityL.forEach(function(a){
		d3.select("#cityFilSel").append('option').attr('value',a).text(a);
	});

	countryL.forEach(function(a){
		d3.select("#countryFilSel").append('option').attr('value',a).text(a);
	});

	stateL.forEach(function(a){
		d3.select("#stateFilSel").append('option').attr('value',a).text(a);
	});

	shapeL.forEach(function(a){
		d3.select("#shapeFilSel").append('option').attr('value',a).text(a);
	});
}

subSelect.on("change", function(){

	d3.selectAll('.subFilSel').property('value', 'all');
	d3.selectAll(".subFils .subfil").classed('hide', true);
	if(this.value != 'all'){
		d3.select("#"+this.value+'Fil').classed('hide',false);
	}
});

filteredOutput();
showFilter();

