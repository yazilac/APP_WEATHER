////*USO DE API PARA CONOCER EL ESTADO DEL CLIMA

let weather = {
    apiKey: "7efd7052a70b503ece00174005d8f7a3", // Contraseña de acceso a la api
    fetchWeather: function (city) { // uso de fetch
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
    )
        .then((response) => {
            if (!response.ok) {
                Swal.fire(
                    'Error!',
                    'No weather found!',
                    'error'
                );
                throw new Error("No weather found.");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";  
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);//buscar input
    },
};

document.querySelector(".search button").addEventListener("click",function(){
    weather.search(); //funcion buscar
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if (event.key == "Enter") { //uso del enter para buscar
        weather.search();
    }
});
weather.fetchWeather("Cartago"); //Ciudad por defecto