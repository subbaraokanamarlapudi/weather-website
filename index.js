let inputEle = document.getElementById("location-input");
let tempEle = document.getElementById("temp-value");
let locEle = document.getElementById("location");
let weatherDesEle = document.getElementById("Weather-desc");
let btnEle = document.getElementById("btn");
let icon = document.getElementById("icon");

const apiKey = "b6b64d7f8798e3980f67d6508579c87c";  

btnEle.onclick = () => {
 
  if (inputEle.value.trim() === "") {
    alert("Please enter a valid location.");
    return;  
  }

  const loc = inputEle.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);

       
      if (data.cod === "404") {
        alert("Location not found. Please try again.");
        return; 
      }

      const { name } = data;
      const feelsLike = data.main.feels_like;  
      const description = data.weather[0].description;

      tempEle.innerText = Math.floor(feelsLike - 273);
      locEle.innerText = name;
      weatherDesEle.innerText = description;
    });


  inputEle.value = "";
};
