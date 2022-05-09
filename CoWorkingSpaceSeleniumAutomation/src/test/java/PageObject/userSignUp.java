package PageObject;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import Resources.Base;
import Resources.UserExcel;

import java.io.IOException;

public class userSignUp extends Base {

    By signupBtn = By.xpath("//button[text()='Signup']");
    By name = By.xpath("//*[@id='formBasicName']");
    By username = By.xpath("//*[@id='formBasicUsername']");
    By password = By.xpath("//*[@id=\"formBasicPassword\"]");
    By contact = By.xpath("//*[@id=\"formBasicContact\"]");
    By email = By.xpath("//*[@id=\"formBasicEmail\"]");
    By orgMail = By.xpath("//*[@id=\"formBasicOrgEmail\"]");
    By date = By.xpath("//*[@id=\"formBasicDob\"]");
    By checkBox = By.xpath("//*[@id=\"formBasicCheckbox\"]");
    By submit = By.xpath("//*[@id=\"root\"]/div/div/div[1]/div[1]/form/div[9]/button");

    UserExcel excel;



    public userSignUp(){
        try{
            excel = new UserExcel();
            excel.readCells();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    public void signUp() throws IOException {
        WebElement loginBtnClick = driver.findElement(By.xpath("//button[contains(text(),'Login')]"));
        loginBtnClick.click();

        driver.findElement(signupBtn).click();
    }
    public void enterName(){
        String Name = excel.getName();

        driver.findElement(name).sendKeys(Name);

    }
    public void enterUserName(){
        String UserName = excel.getUsername();
        driver.findElement(username).sendKeys(UserName);
    }
    public void enterPassword(){
        String Password = excel.getPassword();
        driver.findElement(password).sendKeys(Password);
    }
    public void enterContact(){
        String Contact = excel.getContact();
        driver.findElement(contact).sendKeys(Contact);
    }
    public void enterEmail(){
        String Email = excel.getEmail();
        driver.findElement(email).sendKeys(Email);
    }
    public void enterOrgMail(){
        String OrgMail = excel.getOrgMail();
        driver.findElement(orgMail).sendKeys(OrgMail);
    }
    public void enterDate(){
        String Date = excel.getDate();
        driver.findElement(date).sendKeys(Date);
    }
    public void clickCheckBox(){
       WebElement check = driver.findElement(checkBox);
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click()",check);
    }
    public void clickSubmit(){
        WebElement sub = driver.findElement(submit);
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click()",sub);
            WebDriverWait wait = new WebDriverWait(driver, 2);
            wait.until(ExpectedConditions.alertIsPresent());
            Alert alert = driver.switchTo().alert();
            System.out.println(alert.getText());
            alert.accept();
            Assert.assertTrue(alert.getText().contains("User created"));

    }
}
