package TestCases;
import PageObject.addreviewpage;
import Resources.Base;
import org.testng.annotations.Test;

public class addreviewtest extends Base
{
    addreviewpage addreviewpage = new addreviewpage();

    @Test(priority = 18)
    public void addareview()
    {
        try
        {
            addreviewpage.addreview();

        }
        catch (Exception e)
        {
            e.printStackTrace();
        }

    }

}