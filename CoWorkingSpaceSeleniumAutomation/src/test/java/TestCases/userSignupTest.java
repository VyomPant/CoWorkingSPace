package TestCases;
import org.testng.annotations.Test;
import PageObject.userSignUp;
import Resources.Base;

import java.util.concurrent.TimeUnit;

public class userSignupTest extends Base {
    userSignUp signup = new userSignUp() ;
    @Test(priority = 7)
    public void validateSignup(){
        try {
            signup.signUp();
            TimeUnit.MILLISECONDS.sleep(1000);
        }catch(Exception e) {
            System.out.println("cannot click on signup button"+e.getMessage());
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
            System.out.println("unable to enter email"+e.getMessage());
        }
        try {
            signup.enterOrgMail();
            TimeUnit.MILLISECONDS.sleep(1000);
        }catch(Exception e) {
            System.out.println("unable to enter organization mail"+e.getMessage());
        }
        try {
            signup.enterDate();
            TimeUnit.MILLISECONDS.sleep(1000);
        }catch(Exception e) {
            System.out.println("unable to enter date"+e.getMessage());
        }
        try {
            signup.clickCheckBox();
            TimeUnit.MILLISECONDS.sleep(1000);
        }catch(Exception e) {
            System.out.println("unable to click on checkbox"+e.getMessage());
        }
        try{
            signup.clickSubmit();
            TimeUnit.MILLISECONDS.sleep(1000);

        } catch (Exception e) {
            System.out.println("error while clicking on submit button"+e.getMessage());
        }
    }
}
