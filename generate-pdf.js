import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();

// เปลี่ยนจาก /Dev เป็นหน้าแรกปกติ (localhost:4321/)
await page.goto('http://localhost:4321/', {
  waitUntil: 'networkidle0'
});

await page.pdf({
  // ย้ายไฟล์ไปเซฟไว้ในโฟลเดอร์ public เพื่อให้พร้อมใช้บนเว็บจริง
  path: 'public/Yossawin_WebDev.pdf',
  format: 'A4',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 }
});

await browser.close();
console.log('PDF Generated in public folder!');