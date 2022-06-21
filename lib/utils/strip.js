export const strip = (html) => {
  let one = html.replace(/<\/?[^>]+(>|$)/gm, "");
  let two = one.replace(/[\r\n]\s*[\r\n]/gm, "");
  return two;
};
