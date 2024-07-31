const puppeteer = require('puppeteer');

console.log("starting...");

async function getEmbedLink(googleMapsUrl) {
    console.log("Inside function...");

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(googleMapsUrl, { waitUntil: 'networkidle2' });
    console.log("Check1");
    // Wait for the share button to appear and click it
    await page.waitForSelector('button[aria-label^="Share"]');
    await page.click('button[aria-label^="Share"]');
    console.log("Check2")
    // Wait for the embed option to appear and click it
    await page.waitForSelector('button[aria-label^="Embed a map"]');
    await page.click('button[aria-label^="Embed a map"]');
    console.log("Check3")
    // const buttons = await page.$$('button[jsaction="pane.wfvdle17"]');
    // console.log(buttons)
    // for (const button of buttons) {
    //     const text = await button.evaluate(node => node.innerText);
    //     if (text.includes('Embed a map')) {
    //         await button.click();
    //         break;
    //     }
    // }

    // // Wait for the iframe to appear and get its embed code
    // await page.waitForSelector('iframe[src*="google.com/maps/embed"]');
    // const embedLink = await page.evaluate(() => {
    //     const iframe = document.querySelector('iframe[src*="google.com/maps/embed"]');
    //     return iframe.src;
    // });

        // Wait for the embed input to appear and get its value
        await page.waitForSelector('input.yA7sBe');
        let embedTag = await page.evaluate(() => {
            const input = document.querySelector('input.yA7sBe');
            return input ? input.value : null;
        });

    await browser.close();

    embedTag = embedTag.split('src="')[1]
    let embedLink = embedTag.split('"')[0]
    console.log(embedLink);
    return embedLink;


}


module.exports = getEmbedLink