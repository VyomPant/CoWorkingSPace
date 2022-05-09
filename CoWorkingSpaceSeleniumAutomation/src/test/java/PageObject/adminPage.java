package PageObject;

import Resources.Base;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class adminPage extends Base {


    public void fillAddSpaceForm() throws InterruptedException {
        driver.findElement(By.xpath("//a[normalize-space()='Add Space']")).click();
        driver.findElement(By.xpath("//input[@id='exampleInputSpaceName']")).sendKeys("HashedIN ");
        TimeUnit.MILLISECONDS.sleep(1000);
        driver.findElement(By.xpath("//input[@id='exampleInputSpaceAddress']")).sendKeys("Gurugram");


        driver.findElement(By.xpath("//input[@id='exampleSpacePrice']")).sendKeys("200");
        TimeUnit.MILLISECONDS.sleep(1000);
        WebElement addBtnClick = driver.findElement(By.xpath("//button[@type='submit']"));
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click()",addBtnClick);
        TimeUnit.MILLISECONDS.sleep(1000);
        WebDriverWait wait = new WebDriverWait(driver, 2);
        wait.until(ExpectedConditions.alertIsPresent());
        Alert alert = driver.switchTo().alert();
        alert.accept();
        TimeUnit.MILLISECONDS.sleep(1000);
    }
    public void clickBookedSpace() throws InterruptedException {

        driver.findElement(By.xpath("//a[normalize-space()='Booked Spaces']")).click();
        TimeUnit.MILLISECONDS.sleep(1000);
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/nav/div/div/a/div/span")).click();
        TimeUnit.MILLISECONDS.sleep(1000);

    }

}

