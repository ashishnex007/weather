const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_value = document.getElementById("temp_value");
const data_hide = document.querySelector(".data_hide");

const getText = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    data_hide.classList.add("data_hide");
    city_name.innerText = "Please Enter The City Name Before You Serach";
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c3b99950daeb8461495547eb677532ca`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      city_name.innerText = ` ${arrData[0].name}, ${arrData[0].sys.country}`;
      temp_value.innerText = arrData[0].main.temp;

      const tempMood = arrData[0].weather[0].main;
      if (tempMood == "Clear") {
        temp_status.innerHTML =
          " <i class='fa-solid fa-sun' style : 'color : #eccc68;'></i> ";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          " <i class='fa-solid fa-clouds' style : 'color : #f1f2f6;'></i> ";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          " <i class='fa-solid fa-cloud-showers-heavy'style : 'color : #a4b0be;'></i> ";
      } else {
        temp_status.innerHTML =
          " <i class='fa-solid fa-sun' style : 'color : #eccc68;'></i> ";
      }

      data_hide.classList.remove("data_hide");
    } catch {
      city_name.innerText = "Please Enter Valid City Name";
      data_hide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getText);
