const { Builder, By } = require("selenium-webdriver");
require("chromedriver");

async function scrape() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://www.youtube.com/@FCBarcelona");

    let links = await driver.findElements(By.tagName("a"));

    for (let link of links) {
      let href = await link.getAttribute("href");
      if (href) console.log(href);
    }

    let line = await driver.findElement(By.partialLinkText("Messi"));
    console.log("\nFound Link Containing 'Messi':");
    console.log(await line.getText());
    console.log(await line.getAttribute("href"));
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await driver.quit();
  }
}

scrape();
