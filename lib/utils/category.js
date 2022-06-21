import { kebabCase } from "@lib/utils/slugger";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getAllCategory = () => {
  let tagCount = {};

  const allFiles = fs.readdirSync(path.join("content/posts"));
  const file = allFiles.filter((c) => c.match(/^[a-z]/));
  file.map((file) => {
    const metaDataWithFrontMatter = fs.readFileSync(
      path.join("content/posts", file),
      "utf-8"
    );
    const { data: frontmatter, content } = matter(metaDataWithFrontMatter);

    if (frontmatter.draft == false) {
      frontmatter.categories.forEach((i) => {
        const formatedcategories = kebabCase(i);
        if (formatedcategories in tagCount) {
          tagCount[formatedcategories] += 1;
        } else {
          tagCount[formatedcategories] = 1;
        }
      });
    }
  });

  return tagCount;
};
