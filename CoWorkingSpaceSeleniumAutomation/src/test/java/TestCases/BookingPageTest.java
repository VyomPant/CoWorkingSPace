package TestCases;

import org.testng.annotations.Test;
import PageObject.BookingPage;

public class BookingPageTest {
    BookingPage book = new BookingPage();

    @Test(priority = 16)
    public void validateContinueBooking() {
        try {
            book.continueBooking();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
    @Test(priority = 17)
    public void  validateConfirmBookingPage(){
        try{
            book.enterHours();
            book.clickConfirmBooking();

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}
