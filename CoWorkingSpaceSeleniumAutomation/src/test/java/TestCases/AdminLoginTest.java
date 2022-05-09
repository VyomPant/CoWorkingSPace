package TestCases;

import PageObject.adminLogin;
import org.testng.annotations.Test;

public class AdminLoginTest {
    adminLogin admin = new adminLogin();
    @Test(priority = 20)
    public void validateAdminLogin() {
        try {
            admin.adminsigninBtn();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
