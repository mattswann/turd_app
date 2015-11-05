
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -37.8136, lng: 144.9631},
    zoom: 8
  });
}


$('#form').submit(function(event) {
  event.preventDefault();
  elizaStep();
})


var eliza = new ElizaBot();
var elizaLines = new Array();

var displayCols = 60;
var displayRows = 20;

function elizaReset() {
	eliza.reset();
	elizaLines.length = 0;
	elizaStep();
}

function elizaStep() {
	var f = document.forms.e_form;
	var userinput = f.e_input.value;
	if (eliza.quit) {
		f.e_input.value = '';
		if (confirm("This session is over.\nStart over?")) elizaReset();
		f.e_input.focus();
		return;
	}
	else if (userinput != '') {
		var usr = 'YOU:   ' + userinput;
		var rpl ='ELIZA: ' + eliza.transform(userinput);
		elizaLines.push(usr);
		elizaLines.push(rpl);
		// display nicely
		// (fit to textarea with last line free - reserved for extra line caused by word wrap)
		var temp  = new Array();
		var l = 0;
		for (var i=elizaLines.length-1; i>=0; i--) {
			l += 1 + Math.floor(elizaLines[i].length/displayCols);
			if (l >= displayRows) break
			else temp.push(elizaLines[i]);
		}
		elizaLines = temp.reverse();
		f.e_display.value = elizaLines.join('\n');
	}
	else if (elizaLines.length == 0) {
		// no input and no saved lines -> output initial
		var initial = 'ELIZA: ' + eliza.getInitial();
		elizaLines.push(initial);
		f.e_display.value = initial + '\n';
	}
	f.e_input.value = '';
	f.e_input.focus();
}


// var map;
// var infowindow;
//
// function initMap() {
// var melbourne = {lat: -37.8136, lng: 144.9631};
//
// map = new google.maps.Map(document.getElementById('map'), {
// center: melbourne,
// zoom: 18
// });
//
// infowindow = new google.maps.InfoWindow();
//
// var service = new google.maps.places.PlacesService(map);
// service.nearbySearch({
// location: melbourne,
// radius: 500,
// types: ['store']
// }, callback);
// }
//
// function callback(results, status) {
// if (status === google.maps.places.PlacesServiceStatus.OK) {
// for (var i = 0; i < results.length; i++) {
//   createMarker(results[i]);
// }
// }
// }
//
// function createMarker(place) {
// var placeLoc = place.geometry.location;
// var marker = new google.maps.Marker({
// map: map,
// position: place.geometry.location
// });
//
// google.maps.event.addListener(marker, 'click', function() {
// infowindow.setContent(place.name);
// infowindow.open(map, this);
// });
// }
