let apiDetails = {
    baseUrl :"https://api.openweathermap.org/data/2.5/",
    apiKey:"ef68fe87bc4ec8bf8133048a744416f9"
}

let searchBox = document.querySelector(".search-box")
searchBox.addEventListener("keypress", setCityName)

function setCityName(e){
    if(e.keyCode == 13){
        getWeatherData(searchBox.value)
    }
}

function getWeatherData(cityName){
    fetch(`${apiDetails.baseUrl}weather?q=${cityName}&units=metric&appid=${apiDetails.apiKey}`)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        displayResults(res)
    })
}

getWeatherData("Noida");

function displayResults(res){
    let city = document.querySelector(".city")
    city.innerText =`${res.name}, ${res.sys.country}`

    let temp = document.querySelector(".temp")
    temp.innerText =`${Math.round(res.main.temp)}°c`

    let weather = document.querySelector(".weather")
    weather.innerText =res.weather[0].main

    let highLow = document.querySelector(".high-low")
    highLow.innerText =`${Math.round(res.main.temp_min)}°c / ${Math.round(res.main.temp_max)}°c`

    let dateField = document.querySelector(".date")
    dateField.innerText = getDateInfo();
    getDateInfo();
}

function getDateInfo(){
    let todaysDate = new Date();
    let daysArr = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthArr =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return `${daysArr[todaysDate.getDay()]}, ${todaysDate.getDate()} ${monthArr[todaysDate.getMonth()]} ${todaysDate.getFullYear()}`

}