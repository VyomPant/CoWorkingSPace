package TestCases;
import org.testng.annotations.Test;
import PageObject.adminSignUp;
import Resources.Base;

import java.util.concurrent.TimeUnit;

public class AdminSignupTest extends Base {
    adminSignUp signup = new adminSignUp() ;


    @Test(priority = 19)
    public void validateAdminSignup(){
        try {
            signup.clickLogin();
            TimeUnit.MILLISECONDS.sleep(1000);
        }catch(Exception e) {
            System.out.println("cannot click on login button"+e.getMessage());
        }
        try {
            signup.adminsigninBtn();
            TimeUnit.MILLISECONDS.sleep(1000);
        }catch(Exception e) {
            System.out.println("cannot click on admin signin button"+e.getMessage());
        }
        try {
            signup.enterName();
            TimeUnit.MILLISECONDS.sleep(1000);
        }catch(Exception e) {
            System.out.println("unable to enter name"+e.getMessage());
        }
        try {
            signup.enterUserName();
            TimeUnit.MILLISECONDS.sleep(1000);
        }catch(Exception e) {
            System.out.println("unable to enter username"+e.getMessage());
        }
        try {
            signup.enterPassword();
            TimeUnit.MILLISECONDS.sleep(1000);
        }catch(Exception e) {
            System.out.println("unable to enter password"+e.getMessage());
        }
        try {
            signup.enterContact();
            TimeUnit.MILLISECONDS.sleep(1000);
        }catch(Exception e) {
            System.out.println("unable to enter contact"+e.getMessage());
        }
        try {
            signup.enterEmail();
            TimeUnit.MILLISECONDS.sleep(1000);
        }catch(Exception e) {
            System.out.println("unable to enter mail"+e.getMessage());
        }
        try {
            signup.enterDate();
            TimeUnit.MILLISECONDS.sleep(1000);
        }catch(Exception e) {
            System.out.println("unable to enter date"+e.getMessage());
        }
        try {
            signup.enterBio();
            TimeUnit.MILLISECONDS.sleep(1000);
        }catch(Exception e) {
            System.out.println("unable to enter bio"+e.getMessage());
        }
        try {
            signup.clickSubmit();
            TimeUnit.MILLISECONDS.sleep(1000);
        }catch(Exception e) {
            System.out.println("unable to click on submit"+e.getMessage());
        }
        try{
            signup.loginBtn();
            TimeUnit.MILLISECONDS.sleep(1000);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
