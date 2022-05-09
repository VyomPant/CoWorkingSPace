package Resources;
import com.aventstack.extentreports.ExtentReports;
import org.apache.commons.io.FileUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Listeners;
import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;
@Listeners(TestngListener.class)

public class Base {
    public static WebDriver driver;
    public static final Logger log = LogManager.getLogger(Base.class);

    static ExtentReports extent;
    public static void driverCreation() {
        System.setProperty("webdriver.chrome.driver","src/main/java/Driver/chromedriver.exe");
        String url = "https://hu-spacecorp-urtjok3rza-wl.a.run.app/";
        driver = new ChromeDriver();
        driver.get(url);
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    }
    public String screenShot(String testcaseName, WebDriver driver) throws IOException
    {
        TakesScreenshot ts = (TakesScreenshot) driver;
        File source = ts.getScreenshotAs(OutputType.FILE);
        String destinationFile = "screenshots/"+testcaseName+".png";
        FileUtils.copyFile(source, new File(destinationFile));
        return destinationFile;
    }


}