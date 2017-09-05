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
	console.log(resp);
  	countriesList.empty();
	resp.forEach(function(item){
	   	var img = $('<img>').attr('src', item.flag).css('width', '25px');
	   	var capital = $('<span>').text(item.capital);
	   	$('<li>').text(item.name)
	   			.appendTo(countriesList)
	   			.append(img)
	   			.append($('<span>').text(item.capital));
	});
}
