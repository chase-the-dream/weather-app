import './styles.css';

const searchBar = document.getElementById('city');
const submitButton = document.querySelector('.search-button');

submitButton.addEventListener("click", submitClick);
searchBar.addEventListener("keydown", handleKeyPress);

function submitClick() {
    const cityName = searchBar.value;
    alert(`You searched for ${cityName}`);
    getData();
}

function handleKeyPress(event) {
    if (event.key == "Enter") {
        submitClick();
    }
}

function getData() {
    console.log("WHAT IS GOING ON RIGHT NOW");
    const API_KEY = process.env.WEATHER_API_KEY;

    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchBar.value}?key=${API_KEY}`, {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response);
    });
}

