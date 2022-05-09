package PageObject;

import Resources.Base;
import org.openqa.selenium.By;

import java.util.concurrent.TimeUnit;

public class adminLogin extends Base {
    public void adminsigninBtn() throws InterruptedException {
        driver.findElement(By.xpath("//input[@id='formBasicUsername']")).sendKeys("admin");
        TimeUnit.MILLISECONDS.sleep(1000);
        driver.findElement(By.xpath("//input[@id='formBasicPassword']")).sendKeys("admin");
        TimeUnit.MILLISECONDS.sleep(1000);
        driver.findElement(By.xpath("//div[@class='d-grid']/child::button[text()='Login']")).click();
        TimeUnit.MILLISECONDS.sleep(1000);
    }
}
