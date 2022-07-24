import { marked } from "marked";

// strip entities
function htmlEntityDecoder(htmlWithEntities) {
  let entityList = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'",
  };
  let htmlWithoutEntities = htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    function (entity) {
      return entityList[entity];
    }
  );
  return htmlWithoutEntities;
}

// strip html
export const strip = (html) => {
  if (html) {
    let mdParsed = marked.parseInline(html);
    let filterBrackets = mdParsed.replace(/<\/?[^>]+(>|$)/gm, "");
    let filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
    let stripHTML = htmlEntityDecoder(filterSpaces);
    return stripHTML;
  }
  return html;
};
