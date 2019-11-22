var name = localStorage.getItem("username");

if (name != "admin") {
  alert("Invalid Redirect");
  window.location = "./index.html";
}

var loginHistory = localStorage.getItem("loginHistory");
console.log(loginHistory);

var log = JSON.parse(loginHistory);
console.log(log);

var body = document.querySelector("body");
body.addEventListener("load", fetchLogs());

var tblDiv = document.createElement("div");
body.appendChild(tblDiv);

function fetchLogs() {
  var selUser = document.createElement("select");
  selUser.addEventListener("change", display);
  body.appendChild(selUser);

  var logoutBtn = document.createElement("button");
  logoutBtn.textContent = "Logout";
  logoutBtn.setAttribute("class", "logoutBtn");
  logoutBtn.addEventListener("click", logoutUser);
  body.appendChild(logoutBtn);

  for (key in log) {
    if (key != "admin") {
      user = key;
      var option = document.createElement("option");
      option.setAttribute("value", user);
      option.textContent = user;
      selUser.appendChild(option);
    }
  }
}

function display() {
  currUser = this.value;

  tblDiv.innerHTML = "";
  var table = document.createElement("table");
  tblDiv.appendChild(table);

  var row = document.createElement("tr");
  table.appendChild(row);
  var head1 = document.createElement("th");
  row.appendChild(head1);
  var head2 = document.createElement("th");
  row.appendChild(head2);
  head1.textContent = "User";
  head2.textContent = "Login Time";

  for (time in log[currUser]) {
    var row = document.createElement("tr");
    table.appendChild(row);

    var tData1 = document.createElement("td");
    var tData2 = document.createElement("td");

    tData1.textContent = currUser;
    tData2.textContent = log[currUser][time];

    row.appendChild(tData1);
    row.appendChild(tData2);
  }
}

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
