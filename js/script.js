var urlCountry = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');


//			countries
$('#search-country').click(searchCountries);




function searchCountries() {
 	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
		url: urlCountry + countryName,
		method: 'GET',
		success: showCountriesList
	});
}


function showCountriesList(resp) {
  	countriesList.empty();
	resp.forEach(function(item){
	//Here is the code that will execute on each successive item in the collection. A single item is hidden under an item variable.
	   	$('<li>').text(item.name).appendTo(countriesList);
	});
}


/*


var urlCountry = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

var urlFlag = 'https://restcountries.eu/data/';
var flagList = $('#flags');

console.log(flagList)
 

//			countries


$(function() {
    $('#search-country').click(Country.printInfo());
});




function Country(country, flag) {
	this.country = function searchCountries() {
	 	var country = $('#country-name').val();
		if(!countryName.length) countryName = 'Poland';
		$.ajax({
		  	url: urlCountry + countryName,
			method: 'GET',
		  	success: showCountriesList
	  	});
	}
	this.flag = function searchFlag() {
		$.ajax({
			url: urlFlag + this.country + '.svg',
			method: 'GET',
			successive: alert("yes")
			});
	}
}


Country.prototype.printInfo = function() {
	var print = `${this.country} ma taką flagę ${this.flag}$.`;
};



function searchCountries() {
 	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
	  	url: urlCountry + countryName,
		method: 'GET',
	  	success: showCountriesList
  	});
}


function showCountriesList(resp) {
  	countriesList.empty();
	resp.forEach(function(countryItem) {
   		//Here is the code that will execute on each successive item in the collection. A single item is hidden under an item variable.
   		$('<li>').text(countryItem.name).appendTo(countriesList);
	});
}

 

function showFlag(respFlag) {
  	flagList.empty();
	respFlag.forEach(function(flagItem) {
   		//Here is the code that will execute on each successive item in the collection. A single item is hidden under an item variable.
   		$('<li>').text(flagItem.text).appendTo(flagList);

	});
}




*/