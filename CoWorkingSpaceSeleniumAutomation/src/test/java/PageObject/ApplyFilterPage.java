package PageObject;
import Resources.Base;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import java.util.concurrent.TimeUnit;

public class ApplyFilterPage extends Base {
    //Clicking on the explore button
    public void ClickExplore() throws InterruptedException {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        WebElement exploreBtnClick = driver.findElement(By.xpath("//*[@class='navlink']"));
        js.executeScript("arguments[0].click()",exploreBtnClick);
        TimeUnit.MILLISECONDS.sleep(1000);
        js.executeScript("window.scrollBy(0,200)");
    }
    //Selecting the type of desk to book
    public void SelectTypes() throws InterruptedException {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        WebElement typeBtnClick = driver.findElement(By.xpath("//*[@class='form-select']"));
        js.executeScript("arguments[0].click()",typeBtnClick);
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        TimeUnit.MILLISECONDS.sleep(1000);
        Select Desk = new Select(typeBtnClick);
        Desk.selectByValue("largedesk");
    }
    //Selecting the location where desk has to be booked
    public void SelectLocation() throws InterruptedException {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        WebElement locationBtnClick = driver.findElement(By.xpath("(//*[@class='form-select'])[2]"));
        js.executeScript("arguments[0].click()",locationBtnClick);
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        TimeUnit.MILLISECONDS.sleep(1000);
        Select Location = new Select(locationBtnClick);
        Location.selectByValue("Gurugram");
        js.executeScript("window.scrollBy(0,200)");
        driver.findElement(By.xpath("//div[@class='leftList']")).click();
    }
    //Validating the desk which shows after applying the filter
    public void ValidateDesk() throws InterruptedException {
        WebElement msg = driver.findElement(By.xpath("//p[normalize-space()='Gurugram']"));
        String text = msg.getText();
        String expectedText = "Gurugram";
        Assert.assertEquals(text, expectedText);
        TimeUnit.MILLISECONDS.sleep(1000);
        WebElement bookBtnClick = driver.findElement(By.xpath("//*[@href='/spacedetails/3']"));
        bookBtnClick.click();
    }

}