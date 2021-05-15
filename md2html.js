import { default as marked } from "marked";
import { open } from "fs/promises";
import { JSDOM } from "jsdom";

(async function () {
  const fh = await open("resume.md", "r");
  const text = await fh.readFile({ encoding: "UTF-8" });
  const html = marked(text);
  const template = await open("marked.html", "r").then((fh) =>
    fh.readFile({ encoding: "UTF-8" })
  );
  let out_text = template.replace(/\[\%\%[^%]+\%\%\]/, html);
  out_text = wrap_headings(out_text);
  const ofh = await open("resume.html", "w");
  ofh.writeFile(out_text, { encoding: "UTF-8" });
})();

function wrap_headings(html) {
  const jsdom = new JSDOM(html);
  const doc = jsdom.window.document;
  // first block is conact details, has no heading
  wrap(doc, "contact", doc.querySelectorAll("#content ul:first-of-type")[0]);
  const headings = doc.querySelectorAll("h2");
  for (let i = 0; i < headings.length; i++) {
    let heading = headings[i];
    let heading_id = heading.getAttribute("id");
    let block_id = `${heading_id}_block`;
    let block = wrap(doc, block_id, heading);
    let el = block.nextElementSibling;
    while (el && el.tagName !== "H2") {
      block.appendChild(el);
      el = block.nextElementSibling;
    }
  }
  return jsdom.serialize();
}

function wrap(doc, div_id, el) {
  let wrapper = doc.createElement("div");
  wrapper.setAttribute("id", div_id);
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
  return wrapper;
}
