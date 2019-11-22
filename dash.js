var name = localStorage.getItem("username");
var currTime = Date.now();
var loginTime = localStorage.getItem("loginTime");
var logoutTime = localStorage.getItem("logoutTime");

if (name == "null") {
  alert("Invalid Login");
  window.location = "./index.html";
} else if (currTime > logoutTime) {
  alert("Session Timeout");
  localStorage.removeItem("loginTime");
  localStorage.removeItem("logoutTime");

  localStorage.removeItem("loginHour");
  localStorage.removeItem("loginMinute");
  localStorage.removeItem("loginSecond");

  localStorage.removeItem("logoutHour");
  localStorage.removeItem("logoutMinute");
  localStorage.removeItem("logoutSecond");

  localStorage.removeItem("username");
  window.location = "./index.html";
} else {
  var loginHour = localStorage.getItem("loginHour");
  var loginMinute = localStorage.getItem("loginMinute");
  var loginSecond = localStorage.getItem("loginSecond");

  var logoutHour = localStorage.getItem("logoutHour");
  var logoutMinute = localStorage.getItem("logoutMinute");
  var logoutSecond = localStorage.getItem("logoutSecond");

  var body = document.querySelector("body");

  var header = document.createElement("h1");
  var paraLogin = document.createElement("p");
  var paraEnd = document.createElement("p");

  header.textContent = "Welcome - " + name;
  paraLogin.textContent =
    "Session Start - " + loginHour + ":" + loginMinute + ":" + loginSecond;
  paraEnd.textContent =
    "Session End - " + logoutHour + ":" + logoutMinute + ":" + logoutSecond;

  var logoutBtn = document.createElement("button");
  logoutBtn.textContent = "Logout";
  logoutBtn.setAttribute("class", "logoutBtn");
  logoutBtn.addEventListener("click", logoutUser);

  body.appendChild(header);
  body.appendChild(paraLogin);
  body.appendChild(paraEnd);
  body.appendChild(logoutBtn);

  function logoutUser() {
    localStorage.removeItem("loginTime");
    localStorage.removeItem("logoutTime");

    localStorage.removeItem("loginHour");
    localStorage.removeItem("loginMinute");
    localStorage.removeItem("loginSecond");

    localStorage.removeItem("logoutHour");
    localStorage.removeItem("logoutMinute");
    localStorage.removeItem("logoutSecond");

    localStorage.removeItem("username");

    alert("Logging Out");
    window.location = "./index.html";
  }

  document.getElementById.onLoad = activityTracker();
  function activityTracker() {
    setTimeout(function() {
      alert("Session Timeout");
      window.location = "./index.html";
    }, 300000);
  }
}
