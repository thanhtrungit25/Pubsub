import { getPlaces, subscribe } from './dataService.js';

function renderCities(placesArray) {
  console.log('renderCities', placesArray);
  
  const cityListElement = document.getElementById('citiesList');

  cityListElement.innerHTML = '';

  // populate it, one place at a time using forEach function
  placesArray.forEach((place) => {
    const cityElement = document.createElement('div');
    cityElement.innerHTML = place.name;

    cityListElement.appendChild(cityElement);
  });
}

renderCities(getPlaces());

subscribe(renderCities);