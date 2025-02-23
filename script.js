
const apikeys = "c119d3f09dd9bd33fafcf7a5002e6bb6";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button")
const weathericon = document.querySelector(".weather-icon")

async function checkweather(city) {
const response = await fetch(apiurl+ city + `&appid=${apikeys}`);
    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }
    else{
        var data = await response.json();
        console.log(data); 
    
    
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "℃";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";

    if(data.weather[0].main == "Clouds"){
        weathericon.src = "./cloudy.png"
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src="./sunny1.png"
    }
    else if(data.weather[0].main == "Rain"){
         weathericon.src ="./rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
         weathericon.src ="./rain.png"
    }
    else if(data.weather[0].main == "Mist"){
         weathericon.src ="./mist.png"
    }
    document.querySelector('.weather').style.display="block";
    document.querySelector('.error').style.display ="none";
}
        }
    searchButton.addEventListener('click', ()=>{
        checkweather(searchBox.value);
    })