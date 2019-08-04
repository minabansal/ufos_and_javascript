// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

function buildTable (data){
	tbody.html("");
data.forEach(function(alienData) {	
  console.log(data);
  var row = tbody.append("tr");
  Object.entries(alienData).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
  });
}
 
buildTable(tableData);

var filterButton = d3.select("#filter-btn")

filterButton.on("click", function(){

	var inputElement = d3.select("#datetime");
	var inputValue = inputElement.property("value");
	var inputElementCity = d3.select("#city")
	var inputValueCity = inputElementCity.property("value");
	var inputElementState = d3.select("#state")
	var inputValueState = inputElementState.property("value");
	var inputElementCountry = d3.select("#country")
	var inputValueCountry = inputElementCountry.property("value");
	 var inputElementShape = d3.select("#shape")
	 var inputValueShape = inputElementShape.property("value");


	if(inputValue){
		var filteredData = tableData.filter(row => row.datetime === inputValue);
	} 
	else {
		var filteredData = tableData
	}

	if(inputValueCity){
		var filteredData1 = filteredData.filter(row => row.city === inputValueCity);
	} 
	else {
		var filteredData1 = filteredData
	}

	if(inputValueState){
		var filteredData2 = filteredData1.filter(row => row.state === inputValueState);
	} 
	else {
		var filteredData2 = filteredData1
	}
	if(inputValueCountry){
		var filteredData3 = filteredData2.filter(row => row.country === inputValueCountry;
	} 
	else {
		var filteredData3 = filteredData2
	}
	if(inputValueShape){
		var filteredData4 = filteredData2.filter(row => row.shape === inputValueShape;
	} 
	else {
		var filteredData4 = filteredData3
	}

	console.log(inputValue);
	console.log(inputValueCity);
	console.log(inputValueState);
	 console.log(inputValueCountry);
	console.log(inputValueShape);
	console.log(tableData);

	
	

  console.log(filteredData4);
  buildTable(filteredData4);
	
});

