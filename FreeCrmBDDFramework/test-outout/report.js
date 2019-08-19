$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/AbhimanYu/eclipse-workspace/FreeCrmBDDFramework/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is present on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefination.userLoginpage()"
});
formatter.result({
  "duration": 26378557989,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.title_of_loginpage()"
});
formatter.result({
  "duration": 57136342,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_enters_username_and_password()"
});
formatter.result({
  "duration": 401909151,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 93778704,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 6967894,
  "status": "passed"
});
});