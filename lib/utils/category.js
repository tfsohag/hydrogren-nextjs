import { getSinglePages } from "@lib/contents";

// get all categories from frontmatter
export const getAllCategory = (folder) => {
  const allPages = getSinglePages(folder);
  const allCategories = allPages.map((p) => p.category);
  let categories = [];
  for (let i = 0; i < allCategories.length; i++) {
    const categoryArray = allCategories[i];
    for (let j = 0; j < categoryArray.length; j++) {
      categories.push(categoryArray[j]);
    }
  }
  const category = [...new Set(categories)];
  return category;
};
