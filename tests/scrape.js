const { Builder, By, Key } = require("selenium-webdriver");
require("chromedriver");

async function scrape() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://ratings.fide.com/top.phtml?list=men");

  const names = await driver.findElements(By.css(".tur"));

  for (let n of names) {
    console.log(await n.getText());
    return;
  }
  driver.quit();
}

scrape();
