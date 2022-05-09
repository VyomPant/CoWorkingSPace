package PageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import Resources.AdminExcel;
import Resources.Base;

import java.util.concurrent.TimeUnit;

public class adminSignUp extends Base {
    By signUp = By.xpath("//*[@id=\"root\"]/div/div/div[1]/div[1]/h4/a/button");
    By name = By.xpath("//*[@id='formBasicName']");
    By username = By.xpath("//*[@id='formBasicUsername']");
    By password = By.xpath("//*[@id=\"formBasicPassword\"]");
    By contact = By.xpath("//*[@id=\"formBasicContact\"]");
    By email = By.xpath("//*[@id=\"formBasicEmail\"]");
    By date = By.xpath("//*[@id=\"formBasicDob\"]");
    By bio = By.xpath("//*[@id=\"formBasicBio\"]");
    By submit =By.xpath("//*[@id=\"root\"]/div/div/div[1]/div[1]/form/div[8]/button");
    By login = By.xpath("//*[@id='root']/div/div/div[1]/div[1]/h4/a/button");
    AdminExcel excel;

    public adminSignUp(){
        try{
            excel = new AdminExcel();
            excel.readCells();

        } catch (Exception e) {
            e.printStackTrace();
        }

    }
    public void clickLogin() throws InterruptedException {
        WebElement loginBtnClick = driver.findElement(By.xpath("//button[contains(text(),'Login')]"));
        loginBtnClick.click();
        TimeUnit.MILLISECONDS.sleep(1000);
    }
    public void adminsigninBtn(){
        WebElement signBtn = driver.findElement(By.xpath("//a[@href='/ownerLogin']/child::button[text()='Sign in']"));
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click()",signBtn);
        driver.findElement(signUp).click();

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
    public void enterBio(){
        String Bio = excel.getBio();
        driver.findElement(bio).sendKeys(Bio);
    }
    public void enterDate(){
        String Date = excel.getDate();
        driver.findElement(date).sendKeys(Date);
    }

    public void clickSubmit(){
        WebElement sub = driver.findElement(submit);
        sub.click();
    }
    public void loginBtn(){
        WebElement log = driver.findElement(login);
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click()",log);
    }
}
