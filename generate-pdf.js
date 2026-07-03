
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto('http://localhost:4321/Dev', {
  waitUntil: 'networkidle0'
});

await page.pdf({
  path: 'Yossawin_WebDev.pdf',
  format: 'A4',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 }
});

await browser.close();
console.log('Done!');