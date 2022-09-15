// sort by date
export const sortByDate = (array) => {
  const sortedArray = array.sort(
    (a, b) =>
      new Date(b.frontmatter.date && b.frontmatter.date) -
      new Date(a.frontmatter.date && a.frontmatter.date)
  );
  return sortedArray;
};

// sort by weight
export const sortByWeight = (array) => {
  const sortedArray = array.sort(
    (a, b) =>
      (a.frontmatter.weight && a.frontmatter.weight) -
      (b.frontmatter.weight && b.frontmatter.weight)
  );
  return sortedArray;
};
