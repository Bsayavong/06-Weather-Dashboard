// Utilize querySelector to match & specify selectors.
var userFormEl = document.querySelector('#user-form');
var cityButtonsEl = document.querySelector('#city-buttons');
var cityInputEl = document.querySelector('#city-name');
var resultsWeather = document.querySelector('#card-weather');

// Set my personal API key issued by openweathermap.org
var APIKey = "dedb21bd4963056e942f0933ce6bbbcd";
var cityStoredList = [];

// Write out my function to store previously searched cities to local storage for future use.
function storeCity (saveName) {
  cityStoredList = JSON.parse(localStorage.getItem("cityList"));
  if (cityStoredList.indexOf(saveName) == -1) {
    cityStoredList.push(saveName);
    createBtn (saveName);
  }
  localStorage.setItem("cityList", JSON.stringify(cityStoredList));
};