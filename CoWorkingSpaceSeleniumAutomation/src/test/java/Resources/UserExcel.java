package Resources;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.FileInputStream;
import java.io.IOException;

public class UserExcel {
    public  String name;
    public  String username;
    public  String password;
    public  String contact;
    public  String email;
    public  String orgMail;
    public  String date;
    public   void readCells()throws IOException {
        String excelFilePath = "src/main/resources/userSign.xlsx";
        FileInputStream inputStream = new FileInputStream(excelFilePath);
        XSSFWorkbook workbook = new XSSFWorkbook(inputStream);
        XSSFSheet sheet = workbook.getSheetAt(0);
        int rows = sheet.getLastRowNum();
        int cols = sheet.getRow(1).getLastCellNum();

        for (int i = 1; i <= rows; i++) {
            XSSFRow row = sheet.getRow(i);
            for (int j = 0; j < cols; j++) {
                XSSFCell cell = row.getCell(j);
                if (j == 0) {
                    name = cell.getStringCellValue();
                }
                if (j == 1) {
                    username = cell.getStringCellValue();
                }
                if (j == 2) {
                    password =  cell.getStringCellValue();
                }
                if (j == 3) {
                    contact = cell.getStringCellValue();
                }
                if (j == 4) {
                    email =  cell.getStringCellValue();
                }
                if (j == 5) {
                    orgMail =  cell.getStringCellValue();
                }
                if (j == 6) {
                    date =  cell.getStringCellValue();
                }

            }
        }
    }
    public String getName()
    {
        return name;
    }
    public String getUsername(){
        return username;
    }
    public String getPassword(){
        return password;
    }
    public String getContact()
    {
        return contact;
    }
    public String getEmail(){
        return email;
    }
    public String getOrgMail(){
        return orgMail;
    }
    public  String getDate(){
        return  date;
    }
}

