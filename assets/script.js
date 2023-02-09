const app = {
    init: () => {
        var btnGet = document.getElementById('btnGet')
        btnGet.addEventListener('click', app.fetchWeather);
        var btnCurrent = document.getElementById('btnCurrent')
        btnCurrent.addEventListener('click', app.getLocation);
    },
    fetchWeather: (ev) => {
        var city = document.getElementById('cityInput').value;
        var key = 'b9bdfbd586cdc53802d218deecde0664';
        var geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=239760936596a4127b68607d8835e05a`;
        
        fetch(geoUrl)
        .then(function(response){
            console.log(response)
            return response.json()
        })
        .then(function(data){
            var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=b9bdfbd586cdc53802d218deecde0664&units=imperial&units=metric`;
            fetch(url)
            .then(function(response){
                return response.json()
            })
            .then(function(response){
                console.log(response)
                var tempEl = document.createElement("p")
                tempEl.textContent = response.list[0].main.temp
                document.getElementById('forecast').appendChild(tempEl)
            })
        })
    }
}; 
app.init()










