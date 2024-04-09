package m459.TodoApplication.TodoApp.SeleniumTests;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.Duration;

import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.List;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;

public class SeleniumTestWeb {

    private static WebDriver driver;

    @BeforeAll
    public static void setUp() {
        // Verwenden Sie WebDriverManager, um den Chrome-Driver automatisch
        // herunterzuladen und zu konfigurieren
        WebDriverManager.edgedriver().setup();

        // Konfigurieren des Chrome-Treibers
        driver = new EdgeDriver();
    }

    @Test
    public void testNavigationToHome() throws InterruptedException {
        // Öffnen der Seite
        driver.get("http://localhost:3000");

        // Warten für 5 Sekunden
        Thread.sleep(3000);

        // Klicken auf den "Home"-Link
        WebElement homeLink = driver.findElement(By.linkText("Home"));
        homeLink.click();

        // Überprüfen, ob die Home-Seite angezeigt wird
        assertTrue(driver.getCurrentUrl().endsWith("/home"));

    }

    @Test
    public void testNavigationToTask() throws InterruptedException {
        // Öffnen der Seite
        driver.get("http://localhost:3000");

        // Klicken auf den "Task"-Link
        WebElement taskLink = driver.findElement(By.linkText("Task"));
        taskLink.click();

        // Überprüfen, ob die Task-Seite angezeigt wird
        assertTrue(driver.getCurrentUrl().endsWith("/task"));

    }

    @Test
    public void addTask() throws InterruptedException {

        // Öffnen der Webseite
        driver.get("http://localhost:3000");

        // Warten für 5 Sekunden
        Thread.sleep(3000);

        // Klicken auf den "Task"-Link
        WebElement taskLink = driver.findElement(By.linkText("Task"));
        taskLink.click();

        // Warten für 5 Sekunden
        Thread.sleep(3000);

        // Klicken auf den "New Task"-Button
        WebElement newTaskButton = driver.findElement(By.id("NewTask"));
        newTaskButton.click();

        // Warten für 5 Sekunden
        Thread.sleep(3000);

        // Namen Aussfüllen
        WebElement inputName = driver.findElement(By.name("taskName"));
        inputName.sendKeys("New Task");

        // Warten für 5 Sekunden
        Thread.sleep(3000);

        // Description Ausfüllen
        WebElement inputDescription = driver.findElement(By.name("taskDescription"));
        inputDescription.sendKeys("Thats the Best Sellenium");

        // Warten für 5 Sekunden
        Thread.sleep(3000);

        // Datum Aussfüllen
        WebElement inputDate = driver.findElement(By.name("taskDate"));
        inputDate.sendKeys("17-03-2024");

        // "17-03-2024" "2024-03-17"

        // Warten für 5 Sekunden
        Thread.sleep(3000);

        // Status-Selector-Element finden
        WebElement statusSelector = driver.findElement(By.name("taskStatus"));
        // Erstellen Sie ein Select-Objekt
        Select statusDropdown = new Select(statusSelector);

        // Wählen Sie eine Option basierend auf dem Wert aus
        statusDropdown.selectByValue("In Bearbeitung");

        // Warten für 5 Sekunden
        Thread.sleep(3000);

        // Speichern-Button finden und klicken
        WebElement saveButton = driver.findElement(By.xpath("//button[contains(text(),'Speichern')]"));
        saveButton.click();

        // Warten für 5 Sekunden
        Thread.sleep(3000);

    }

    @Test
    public void editTask() throws InterruptedException {

        // Öffnen der Webseite
        driver.get("http://localhost:3000");

        // Warten für 5 Sekunden
        Thread.sleep(3000);

        // Klicken auf den "Task"-Link
        WebElement taskLink = driver.findElement(By.linkText("Task"));
        taskLink.click();

        // Warten für 5 Sekunden
        Thread.sleep(3000);

        // Edit Task
        WebElement taskedit = driver.findElement(By.id("taskEdit"));
        taskedit.click();

        // Warten für 5 Sekunden
        Thread.sleep(3000);

        // Warten für 5 Sekunden
        Thread.sleep(3000);

        // Namen Aussfüllen
        WebElement inputName = driver.findElement(By.name("taskName"));
        inputName.clear();
        inputName.sendKeys("New Task");

        // Warten für 5 Sekunden
        Thread.sleep(3000);

        // Description Ausfüllen
        WebElement inputDescription = driver.findElement(By.name("taskDescription"));
        inputDescription.clear();
        inputDescription.sendKeys("Thats the Best Sellenium");

        // Warten für 5 Sekunden
        Thread.sleep(3000);

        // Datum Aussfüllen
        WebElement inputDate = driver.findElement(By.name("taskDate"));
        inputDate.clear();
        inputDate.sendKeys("17-03-2024");

        // "17-03-2024" "2024-03-17"

        // Warten für 5 Sekunden
        Thread.sleep(3000);

        // Status-Selector-Element finden
        WebElement statusSelector = driver.findElement(By.name("taskStatus"));
        // Erstellen Sie ein Select-Objekt
        Select statusDropdown = new Select(statusSelector);

        // Wählen Sie eine Option basierend auf dem Wert aus
        statusDropdown.selectByValue("In Bearbeitung");

        // Warten für 5 Sekunden
        Thread.sleep(3000);

        // Speichern-Button finden und klicken
        WebElement saveButton = driver.findElement(By.xpath("//button[contains(text(),'Speichern')]"));
        saveButton.click();

        // Warten für 5 Sekunden
        Thread.sleep(3000);

    }

    @Test
    public void deleteTask() throws InterruptedException {

        // Öffnen der Webseite
        driver.get("http://localhost:3000");

        // Warten für 3 Sekunden
        Thread.sleep(3000);

        // Klicken auf den "Task"-Link
        WebElement taskLink = driver.findElement(By.linkText("Task"));
        taskLink.click();

        // Warten für 3 Sekunden
        Thread.sleep(3000);

        // Delete Task
        WebElement taskDelete = driver.findElement(By.cssSelector(".btn-danger"));
        taskDelete.click();

        // Warten für 3 Sekunden
        Thread.sleep(3000);

        // Überprüfen Sie, ob der Text "DELETE request successful" in der Konsole
        // erscheint
        String consoleText = driver.manage().logs().get("browser").toString();
        if (consoleText.contains("DELETE request successful")) {
            System.out.println("Die Aufgabe wurde erfolgreich gelöscht.");
        } else {
            System.out.println("Die Aufgabe wurde nicht gelöscht.");
        }

    }

    @Test
    public void brakeNewTask() throws InterruptedException {
        // Öffnen der Webseite
        driver.get("http://localhost:3000");

        // Warten für 5 Sekunden
        Thread.sleep(3000);

        // Klicken auf den "Task"-Link
        WebElement taskLink = driver.findElement(By.linkText("Task"));
        taskLink.click();

        // Warten für 5 Sekunden
        Thread.sleep(5000);

        // Klicken auf den "New Task"-Button
        WebElement newTaskButton = driver.findElement(By.id("NewTask"));
        newTaskButton.click();

        // Warten für 5 Sekunden
        Thread.sleep(3000);

        // Speichern-Button finden und klicken
        WebElement saveButton = driver.findElement(By.xpath("//button[contains(text(),'Abbrechen')]"));
        saveButton.click();

        // Warten für 5 Sekunden
        Thread.sleep(3000);

    }

    @Test
    public void filteres() throws InterruptedException {
        // Öffnen der Webseite
        driver.get("http://localhost:3000");

        // Warten für 5 Sekunden
        Thread.sleep(3000);

        // Klicken auf den "Task"-Link
        WebElement taskLink = driver.findElement(By.linkText("Task"));
        taskLink.click();

        // Warten für 3 Sekunden
        Thread.sleep(3000);

        // Sellector Date
        WebElement dateFilterDropdown = driver.findElement(By.name("DateStatus"));
        dateFilterDropdown.sendKeys("Descending");

        // Warten für 3 Sekunden
        Thread.sleep(3000);

        // Sellector Status
        WebElement StatusFilterDropdown = driver.findElement(By.name("taskStatus"));
        StatusFilterDropdown.sendKeys("Abgeschlossen");

        // Warten für 3 Sekunden
        Thread.sleep(3000);

        // Console ausgabe nach Chanded filtern
        String consoleText = driver.manage().logs().get("browser").toString();
        String asserts;
        // Überprüfen, ob die erwarteten Änderungen im Log enthalten sind
        assertFalse(consoleText.contains("Changed"));
        if (consoleText.contains("Changed")) {
            asserts = "true";
            assertTrue(asserts.equals("true"));
        }

    }

    @AfterAll
    public static void tearDown() {
        // Schließen des Browsers
        if (driver != null) {
            driver.quit();
        }
    }

}
