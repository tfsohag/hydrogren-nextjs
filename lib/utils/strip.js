export const strip = (html) => {
  if (html) {
    let filterBrackets = html.replace(/<\/?[^>]+(>|$)/gm, "");
    let stripHTML = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
    return htmlEntityDecoder(stripHTML);
  }
  return html;
};

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
