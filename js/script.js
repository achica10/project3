function initMap() {
  var chicago = { lat:41.8781, lng:-87.6298};
  var map = new google.maps.Map(document.getElementById("map"), {
    center: chicago,
	zoom: 8,
  });


}

