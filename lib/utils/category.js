// import { kebabCase } from "@lib/utils/slugger";
// import fs from "fs";
// import matter from "gray-matter";
// import path from "path";

import { getSinglePages } from "@lib/contents";

// export const getAllCategory = () => {
//   let tagCount = {};

//   const allFiles = fs.readdirSync(path.join("content/posts"));
//   const file = allFiles.filter((c) => c.match(/^[a-z]/));
//   file.map((file) => {
//     const metaDataWithFrontMatter = fs.readFileSync(
//       path.join("content/posts", file),
//       "utf-8"
//     );
//     const { data: frontmatter, content } = matter(metaDataWithFrontMatter);

//     if (frontmatter.draft == false) {
//       frontmatter.categories.forEach((i) => {
//         const formatedcategories = kebabCase(i);
//         if (formatedcategories in tagCount) {
//           tagCount[formatedcategories] += 1;
//         } else {
//           tagCount[formatedcategories] = 1;
//         }
//       });
//     }
//   });

//   return tagCount;
// };

export const getAllCategory = (type) => {
  const allPages = getSinglePages(type);
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
