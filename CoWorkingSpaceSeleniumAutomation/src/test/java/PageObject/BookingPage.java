package PageObject;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import Resources.Base;
import java.util.concurrent.TimeUnit;
public class BookingPage extends Base {
    By detailsPage = By.xpath("//h3[contains(text(),'Additional Details')]");
    By conBooking = By.xpath("//*[text()='Continue with Booking']");
    By hoursField = By.xpath("//input[@id='formBasicHours']");
    By rupeesEle = By.xpath("//div[@class='card-body']/child::div[@class='my-2 text-muted card-subtitle h6']/child::strong");
    By confirmBooking = By.xpath("//button[text()='Confirm Booking']");
    By homePage = By.xpath("//a[text()='Go to Home Page']");
    public void continueBooking() throws InterruptedException {

        //validating the page
        WebElement details = driver.findElement(detailsPage);
        String actualDetails = details.getText();
        String expectedDetails = "Additional Details";
        Assert.assertEquals(actualDetails,expectedDetails);

        //scroll up and down
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,600)");
        js.executeScript("window.scrollTo(document.body.scrollHeight,100)");
        TimeUnit.MILLISECONDS.sleep(1000);
        driver.manage().timeouts().implicitlyWait(10000, TimeUnit.SECONDS);

        //continue booking btn
        WebElement continueBookingBtn = driver.findElement(conBooking);
        js.executeScript("arguments[0].click()",continueBookingBtn);
        TimeUnit.MILLISECONDS.sleep(1000);
    }
    public void enterHours() throws InterruptedException {

        WebElement hoursInputEle = driver.findElement(hoursField);
        String hours = "2";
        hoursInputEle.sendKeys(hours);
        //scrolling up
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollTo(document.body.scrollHeight,400)");

        //assert
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='card-body']/child::div[@class='my-2 text-muted card-subtitle h6']/child::strong")));
        String rupee_str = driver.findElement(rupeesEle).getText();
        System.out.println("price for booked space per hour is :"+rupee_str);

        //calculating expected gst,total price and grand total
        int hrs = Integer.parseInt(hours);
        int rupees =Integer.parseInt(rupee_str.replaceAll("[\\D]", ""));
        int totalPrice = hrs*rupees;
        float GST = (float)(totalPrice * 18)/100;
        float grandTotal = (float)totalPrice + GST;

        //checking actual grand total is equal to expected grand total
        String actualGrandTotal = driver.findElement(By.xpath("//div[@class='card-body']/child::div[@style='color: rgb(108, 117, 125);']/child::h6[4]")).getText().substring(16);
        System.out.println("grand total in rupees :"+actualGrandTotal);
        String expectedGrandTotal = Float.toString(grandTotal);
        Assert.assertEquals(actualGrandTotal,expectedGrandTotal);
        System.out.println("total price,GST and grand total are updated according to the hours booked!");

    }
    public void clickConfirmBooking() throws InterruptedException {
        WebElement confirmBookingBtn = driver.findElement(confirmBooking);
        confirmBookingBtn.click();
        TimeUnit.MILLISECONDS.sleep(1000);

        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollTo(document.body.scrollHeight,0)");
        TimeUnit.MILLISECONDS.sleep(1000);
        //checking the booking is confirmed or not
        String actualBookConfirm = driver.findElement(By.xpath("//div[@class='Confirmation']/child::h1")).getText();
        String expectedBookConfirm = "Booking Confirmed";
        Assert.assertEquals(actualBookConfirm,expectedBookConfirm);
        System.out.println("booking is confirmed");

        //click on go to home page which redirect to homepage
        WebElement goHome = driver.findElement(homePage);
        goHome.click();

    }
}
