let puppeteer = require('puppeteer');
console.log("Before");

async function fn() {

    let browser = await puppeteer.launch({

        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"] 
    });

    //new tab
    let page = await browser.newPage();

    //goto -> open google.com
    await page.goto('https://google.com');
    //type pepcoding in search bar
    await page.type('input[title="Search"]','pepcoding',{delay : 200});
    await page.keyboard.press('Enter');

    // appear time -> wait for selector 

    await page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md",{visible:true});
    await page.click("h3.LC20lb.MBeuO.DKV0Md");

    //take some time

    await page.waitForTimeout(3000);
    await page.waitForSelector("#lp_modal_close",{visible:true});
    await page.click("#lp_modal_close");
    await page.waitForSelector("[href='/trainings']");
    await page.click("[href='/trainings']");
    await page.waitForTimeout(3000);
    await page.screenshot({path: 'fullpage.png', fullPage:true});
}

fn();
console.log('After');