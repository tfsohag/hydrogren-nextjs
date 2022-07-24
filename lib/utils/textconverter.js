import { slug } from "github-slugger";
import { marked } from "marked";

// slugify
export const slugify = (content) => slug(content);

// markdownify
export const markdownify = (content, tag) => {
  const Tag = tag;
  return tag ? (
    <Tag
      dangerouslySetInnerHTML={{
        __html: marked.parseInline(content),
      }}
    />
  ) : (
    <span
      dangerouslySetInnerHTML={{
        __html: marked.parseInline(content),
      }}
    />
  );
};

// strip entities for plainify
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

// plainify
export const plainify = (content) => {
  if (content) {
    let mdParsed = marked.parseInline(String(content));
    let filterBrackets = mdParsed.replace(/<\/?[^>]+(>|$)/gm, "");
    let filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
    let stripHTML = htmlEntityDecoder(filterSpaces);
    return stripHTML;
  }
  return content;
};
