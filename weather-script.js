const apiKey = "d01a59d2132611fbd78425bb9fd51559"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q= "

const weatherIcon = document.querySelector(".weather-icon");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{

        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "℃";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    
        if(data.weather[0].main == "Clear"){
            weatherIcon.src= "images/sunny.png";
        }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src= "images/sunny3.png";
    }
    else if(data.weather[0].main == "Clouds"){
        
        weatherIcon.src= "images/cloud.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        
        weatherIcon.src= "images/sunny dizzel.png";
    }
    else if(data.weather[0].main == "Mist"){
        
        weatherIcon.src= "images/sunny1.png";
    }
    
    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none";
    }



}
searchBtn.addEventListener("click", () =>{
   
    checkWeather(searchBox.value);
});