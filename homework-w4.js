function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let heading = document.querySelector(".current-city");
  const inputValue = searchInput.value;
  heading.textContent = inputValue;
}

let citySearch = document.querySelector("#search-form");
citySearch.addEventListener("submit", searchCity);

let currentTime = new Date();

function formatTime(date) {
  let currentDay = date.toLocaleDateString('en-US', { weekday: 'long' });
  let currentHour = date.getHours();
  let currentMinute = date.getMinutes();
  let currentSecond = date.getSeconds();

  let formattedTime = (`${currentDay} ${currentHour}:${currentMinute}:${currentSecond}`);

  document.querySelector("#current-date").innerHTML = formattedTime;

  return formattedTime;
}

formatTime(currentTime);
