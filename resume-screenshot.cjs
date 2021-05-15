const chokidar = require("chokidar"); // ^3.5.1
const puppeteer = require("puppeteer"); // ^3.1.0
// import 'chokidar'; // ^3.5.1
//import 'puppeteer'; // ^3.1.0

let [input, output] = process.argv.slice(2);

(async () => {
  try {
    let browser = await puppeteer.launch({
      headless: true,
      //    executablePath: '/opt/google/chrome/chrome', /* CHANGE ME */
    });

    const page = await browser.newPage();

    async function render_pdf(input) {
      await page.goto(`file://${input}`, { waitUntil: "networkidle0" });
      await page.pdf({
        printBackground: true,
//        width: "8.5in",
//        height: "11in",
	format: 'A4',
        path: output,
      });
      console.log("saved:", output);
    }

    chokidar
      .watch(input)
      .on("ready", () => console.log("watching", input))
      .on("add", render_pdf)
      .on("change", render_pdf)
      .on("unlink", (path) => process.exit(1));
  } catch (e) {
    console.error("Error:");
    console.error(e);
    process.exit(1);
  }
})();
