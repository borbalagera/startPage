window.onload = () => {
  const colors = ["#f8f8a1", "#f9c7be", "#94bca4", "#52809c", "#6c6c74"];
  let rand = Math.floor(Math.random() * Math.floor(5));
  document.body.style.backgroundColor = colors[rand];

  let beginning = "http://api.openweathermap.org/data/2.5/weather?q=";
  let city = "";
  let unit = "&units=metric";
  let apikey = "&appid=4b52df0c72d732b4a364560667ecbafb";
  city = document.getElementById("location").value;
  let url = beginning + city + unit + apikey;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      $(".temp").empty();
      $(".realFeel").empty();
      var temp = " " + data.main.temp + " ℃";
      var realFeel = " " + data.main.feels_like + " ℃";
      $(".temp").append(temp);
      $(".realFeel").append(realFeel);
    });
};

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

let searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    let inputvalue = document.getElementById("searchBar").value;
    window.open("https://www.google.com/search?q=" + inputvalue);
    document.getElementById("searchBar").value = "";
  }
});

function locationChange() {
  let beginning = "http://api.openweathermap.org/data/2.5/weather?q=";
  let city = "";
  let unit = "&units=metric";
  let apikey = "&appid=4b52df0c72d732b4a364560667ecbafb";

  let locationChanger = document.getElementById("location");

  locationChanger.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      city = document.getElementById("location").value;
      let url = beginning + city + unit + apikey;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          $(".temp").empty();
          $(".realFeel").empty();
          var temp = " " + data.main.temp + " ℃";
          var realFeel = " " + data.main.feels_like + " ℃";
          $(".temp").append(temp);
          $(".realFeel").append(realFeel);
        });
    }
  });
}

locationChange();

function changeYellow() {
  document.body.style.backgroundColor = "#f8f8a1";
}

function changePink() {
  document.body.style.backgroundColor = "#f9c7be";
}

function changeGreen() {
  document.body.style.backgroundColor = "#94bca4";
}

function changeBlue() {
  document.body.style.backgroundColor = "#52809c";
}

function changeGray() {
  document.body.style.backgroundColor = "#6c6c74";
}
