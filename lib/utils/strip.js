export const strip = (html) => {
  if (html) {
    let filterBrackets = html.replace(/<\/?[^>]+(>|$)/gm, "");
    let stripHTML = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
    return htmlEntityDecoder(stripHTML);
  }
  return html;
};

function htmlEntityDecoder(htmlWithEntities) {
  var map = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
  };
  return htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    function (m) {
      return map[m];
    }
  );
}
