const { Builder, By, Key } = require("selenium-webdriver");
require("chromedriver");

async function test_case() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://github.com");

  await driver.findElement(By.partialLinkText("Sign in")).click();

  console.log(await driver.getTitle());

  if ((await driver.getTitle()) === "Sign in to GitHub · GitHub") {
    console.log("Test 1 passed");
  } else {
    console.log("Test 1 failed");
    return;
  }

  await driver.findElement(By.name("login")).sendKeys("art");
  await driver
    .findElement(By.name("password"))
    .sendKeys("arttestpw", Key.RETURN);

  if (await driver.findElement(By.className("js-flash-alert")).isDisplayed()) {
    console.log("Test 2 passed");
  } else {
    console.log("Test 2 failed");
  }

  await driver.quit();
}

test_case();
