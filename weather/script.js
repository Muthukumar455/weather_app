function getWeather() {
    var city = document.getElementById("cityInput").value;
    var apiKey = "6fd92ec61e6b306df65ea569b79ee736"; 
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";
  
    fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        displayWeather(data);
      })
      .catch(function(error) {
        console.log("Error fetching weather data:", error);
      });
  }
  
  function displayWeather(data) {
    var weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = "";
  
    var cityName = data.name;
    var temperature = data.main.temp;
    var description = data.weather[0].description;
  
    var weatherHtml = "<h2>Weather in " + cityName + "</h2>";
    weatherHtml += "<p>Temperature: " + temperature + "°C</p>";
    weatherHtml += "<p>Description: " + description + "</p>";
  
    weatherInfo.innerHTML = weatherHtml;
  }
 