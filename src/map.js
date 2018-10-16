import { addPlace, getPlaces, subscribe } from './dataService.js';

let googleMap;

function init() {
  googleMap = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 0, lng: 0 }, zoom: 3
  });

  googleMap.markerList = [];
  googleMap.addListener('click', addMarker);
}

function addMarker(event) {
  addPlace(event.latLng);
}

function renderMarkers(placesArray) {
  console.log('renderMarkers', placesArray);
  
  googleMap.markerList.forEach(m => m.setMap(null)); // remove all markers
  googleMap.markerList = [];

  // add new markers basing on 'myPlaces' array elements
  placesArray.forEach((place) => {
    const marker = new google.maps.Marker({
      position: place.position,
      map: googleMap
    });

    googleMap.markerList.push(marker);
  });
}

init();
renderMarkers(getPlaces());
subscribe(renderMarkers);