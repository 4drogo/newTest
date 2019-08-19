package Stepdefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepdefination {
	
	WebDriver driver;
	
@Given("^User is present on Login Page$")
public void userLoginpage() {
		System.setProperty("webdriver.chrome.driver","C:\\ChromeDriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://ui.freecrm.com/");
}

@When("^title of login page is Free CRM$")
public void title_of_loginpage() {
	String title = driver.getTitle();
	System.out.println(title);
	Assert.assertEquals("CRM",title);  	
}
@Then("^User enters username and password$")
public void user_enters_username_and_password(){
	driver.findElement(By.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/input[1]")).sendKeys("manyurathore007@gmail.com");
	driver.findElement(By.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/input[1]")).sendKeys("Ab7597782809");
	   

}

@Then("^User clicks on login button$")
public void user_clicks_on_login_button() {
	driver.findElement(By.xpath("html[1]/body[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[3]")).click();
}
@Then("^user is on Home Page$")
public void user_is_on_home_page()  {
	String title = driver.getTitle();
	System.out.println(title);
	Assert.assertEquals("CRM",title);
}
public void 	
}
