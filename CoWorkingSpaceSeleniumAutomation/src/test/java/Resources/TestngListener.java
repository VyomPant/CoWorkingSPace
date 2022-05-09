package Resources;
import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;
import java.io.File;
import java.io.IOException;
import java.util.Date;
public class TestngListener extends Base implements ITestListener {
    Extent_Report e = new Extent_Report();
    ExtentReports extent = e.ReportGenerator();
    ExtentTest test;
    private static ThreadLocal<ExtentTest> extenttest = new ThreadLocal<ExtentTest>();


    @Override
    public void onTestStart(ITestResult result) {
        log.info("Test has started" + result);
        test = extent.createTest(result.getName());
        extenttest.set(test);
    }

    @Override
    public void onTestSuccess(ITestResult result) {
        log.info("PASSED TEST " + result);
        extenttest.get().log(Status.PASS, "Successful");
        try {
            screenShot(result.getTestName(),driver);
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        Date currentDate = new Date();

        String screenshotFilename =currentDate.toString().replace("","-").replace(":","-");

        TakesScreenshot ts = (TakesScreenshot) driver;

        File src = ts.getScreenshotAs(OutputType.FILE);

        File des = new File(".\\screenshots\\"+screenshotFilename+".png");

        try {

            FileUtils.copyFile(src,des);

        } catch (IOException e) {

            e.printStackTrace();

        }

        System.out.println("onTestSuccess Method" +result.getName());

    }

    @Override
    public void onTestFailure(ITestResult result) {
        log.info("FAILED TEST " + result);
        extenttest.get().log(Status.FAIL, result.getThrowable());
        try {
            screenShot(result.getTestName(),driver);
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    @Override
    public void onFinish(ITestContext context) {
        ITestListener.super.onFinish(context);
        extent.flush();
    }
}
