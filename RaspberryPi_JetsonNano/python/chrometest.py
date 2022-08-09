import asyncio
from pyppeteer import launch

async def main():
    browser = await launch({
        headless: false,
        args: ['--window-size=800,48'],
        defaultViewport: null
     })
    page = await browser.newPage()

    await page.goto('http://example.com')
    await page.screenshot({'path': 'example.png'})
    await browser.close()

asyncio.get_event_loop().run_until_complete(main())