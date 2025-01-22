const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function upload() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://filebin.net/");

  let input = await driver.findElement(By.id("fileField"));
  await input.sendKeys("C:\\Users\\artsh\\Desktop\\selenium\\tests\\upload.js");

  driver.quit();
}

upload();
