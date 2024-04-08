const apikey = "ff208e3dfe1171b644b69465df73cd11";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

const weathericon = document.querySelector(".weather-icon")


async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".city-name").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";   //Humidity
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";     //Wind Speed  

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "assets/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "assets/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "assets/Rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "assets/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "assets/mist.png";
        }
        else if (data.weather[0].main == "Snow") {
            weathericon.src = "assets/snow.png";
        }
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
}


searchBtn.addEventListener('click', () => {
    checkweather(searchBox.value);

})

