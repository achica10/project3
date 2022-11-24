function initMap() {
  var usa = { lat:37.0902, lng:-95.7129};
  var map = new google.maps.Map(document.getElementById("map"), {
    center: usa,
	zoom: 4,
  });

  new google.maps.Marker({
    position: new google.maps.LatLng(42.3706,-87.9360),
    map,
    label: "Six Flags Great America",
	animation: google.maps.Animation.DROP
  });
  
  new google.maps.Marker({
    position: new google.maps.LatLng(41.4808,-82.6834),
    map,
    label: "Cedar Point",
	animation: google.maps.Animation.DROP
  });
  
  new google.maps.Marker({
    position: new google.maps.LatLng(40.7914,-86.7713),
    map,
    label: "Indiana Beach",
	animation: google.maps.Animation.DROP
  });

}

