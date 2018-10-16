let myPlaces = [];
const geocoder = new google.maps.Geocoder;

let changeListeners = [];

export function subscribe(callbackFunction) {
  changeListeners.push(callbackFunction);
}

function publish(data) {
  changeListeners.forEach((changeListener) => { changeListener(data); })
}

export function addPlace(latLng) {
  // Invoke Google API in order to look up the city name.
  geocoder.geocode({ 'location': latLng }, function(results) {
    
    try {
      // In the callback, extract city name from the results...
      const cityName = results
        .find(result => result.types.includes('locality'))
        .address_components[0]
        .long_name;

      // Add it to our collection in the variable....
      myPlaces.push({ position: latLng, name: cityName });

      publish(myPlaces);
      
      // And synchronize it with localstorage
      localStorage.setItem('myPlaces', JSON.stringify(myPlaces)); 
    } catch (e) {
      console.log('No city found in this location :(');
    }
  });
}

export function getPlaces() {
  return myPlaces;
}

function initLocalStorage() {
  const placesFromLocalstorage = JSON.parse(localStorage.getItem('myPlaces'));
  if (Array.isArray(placesFromLocalstorage)) {
    myPlaces = placesFromLocalstorage;
    publish();
  }
}

initLocalStorage();
