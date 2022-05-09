package TestCases;
import Resources.Base;
import org.testng.annotations.Test;
import PageObject.ApplyFilterPage;
public class ApplyFilterTest extends Base {
    PageObject.ApplyFilterPage userLog =new ApplyFilterPage();
    @Test(priority = 12)
    public void ClickExploreTest() {
        try {
            userLog.ClickExplore();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Test(priority = 13)
    public void SelectTypesTest() {
        try {
            userLog.SelectTypes();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Test(priority = 14)
    public void SelectLocationTest() {
        try {
            userLog.SelectLocation();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Test(priority = 15)
    public void ValidateDeskTest() {
        try {
            userLog.ValidateDesk();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
