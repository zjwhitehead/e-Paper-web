const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless: true,
      executablePath: '/usr/bin/chromium-browser',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignore-certificate-errors']
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 800,
    height: 480,
    deviceScaleFactor: 1.0,
  });
  let url = `https://zjwhitehead.github.io/tomorrow-timelines-widget/?apikey=asdf`
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  console.log("waiting for full load");
  await page.waitForTimeout(2000);

  await page.screenshot({path: 'weather.jpg'});

  await browser.close();
})();
