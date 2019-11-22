validUsers = [];
loginCount = [];

//persisting the signup data and making admin login available throughout
if (localStorage.getItem("validusers") != null) {
  validUsers = JSON.parse(localStorage.getItem("validusers"));
} else {
  validUsers.push({ username: "admin", password: "admin" });
}
localStorage.setItem("validusers", JSON.stringify(validUsers));

//persisting the login history data and making it available throughout
if (localStorage.getItem("loginHistory") != null) {
  loginHistory = JSON.parse(localStorage.getItem("loginHistory"));
  localStorage.setItem("loginHistory", JSON.stringify(loginHistory));
}

//removing local storage items on an invalid open of login page whilst still login
localStorage.removeItem("loginTime");
localStorage.removeItem("logoutTime");

localStorage.removeItem("loginHour");
localStorage.removeItem("loginMinute");
localStorage.removeItem("loginSecond");

localStorage.removeItem("logoutHour");
localStorage.removeItem("logoutMinute");
localStorage.removeItem("logoutSecond");

localStorage.removeItem("username");

function loginUser() {
  var a = document.getElementById("userName").value;
  var b = document.getElementById("passWord").value;

  if (a == "" || b == "") {
    alert("Please enter valid values");
    return;
  }

  var e = localStorage.getItem("loginHistory");
  var f = JSON.parse(localStorage.getItem("validusers"));
  var userExists = f.filter(function(elem) {
    return elem.username == a;
  });

  date = new Date();
  userInfo = {};

  if (e == null) {
    //first login
    loginCount.push(date.toString());
    userInfo[a] = loginCount;
    infoJson = JSON.stringify(userInfo);
  } else if (e != null) {
    userInfo = JSON.parse(e);
    dt = new Date();
    console.log(userInfo[a]);
    if (userInfo[a] != undefined) {
      userInfo[a].push(dt.toString());
    } else {
      userInfo[a] = [dt.toString()];
    }
    infoJson = JSON.stringify(userInfo);
  }

  if (userExists.length == 1 && b == userExists[0].password) {
    loginTime = Date.now();
    logoutTime = Date.now() + 300000;

    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();

    localStorage.setItem("loginTime", loginTime);
    localStorage.setItem("logoutTime", logoutTime);

    localStorage.setItem("loginHour", hour);
    localStorage.setItem("loginMinute", minute);
    localStorage.setItem("loginSecond", second);

    localStorage.setItem("logoutHour", hour);
    localStorage.setItem("logoutMinute", minute + 5);
    localStorage.setItem("logoutSecond", second);

    localStorage.setItem("username", a);
    localStorage.setItem("loginHistory", infoJson);

    if (a == "admin") {
      document.getElementById("userName").value = "";
      document.getElementById("passWord").value = "";
      window.location = "./admin.html";
    } else {
      document.getElementById("userName").value = "";
      document.getElementById("passWord").value = "";
      window.location = "./dash.html";
    }
  } else {
    alert("User does not exist or credentials don't match. Signup instead ?");
  }
}
function createUser() {
  var a = document.getElementById("userName").value;
  var b = document.getElementById("passWord").value;

  if (a == "" || b == "") {
    alert("Please enter valid values");
    return;
  }

  if (localStorage.getItem("validusers") != null) {
    var c = JSON.parse(localStorage.getItem("validusers"));
    var d = c.filter(function(elem) {
      return elem.username == a;
    });

    if (d.length == 1) {
      alert("Username already exists");
      return;
    }
  }

  obj = {};
  obj["username"] = a;
  obj["password"] = b;

  validUsers.push(obj);
  localStorage.setItem("validusers", JSON.stringify(validUsers));
  alert("User created successfully")
  document.getElementById("passWord").value = "";
  document.getElementById("userName").value = "";
}
