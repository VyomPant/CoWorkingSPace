package TestCases;


import PageObject.adminPage;
import Resources.Base;
import org.testng.annotations.AfterTest;
import org.testng.annotations.Test;
public class adminTest extends Base {
    adminPage admin=new adminPage();


    @Test(priority = 21)
    public void adminScenarioTest() throws InterruptedException {
        admin.fillAddSpaceForm();
        admin.clickBookedSpace();
    }
    @AfterTest
    public void Kill(){
        driver.quit();
    }
}

