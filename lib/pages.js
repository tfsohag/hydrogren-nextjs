import { kebabCase } from "@lib/utils/slugger";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
const currentDate = new Date();
const root = process.cwd();

export const getSinglePage = (folder) => {
  const pageData = fs.readFileSync(path.join(folder), "utf-8");
  const pageDataParsed = matter(pageData);
  const frontmatterString = JSON.stringify(pageDataParsed.data);
  const frontmatter = JSON.parse(frontmatterString);
  const content = pageDataParsed.content;

  return { frontmatter, content };
};

export const getDefaultPage = (folder) => {
  const filesPath = fs.readdirSync(path.join(root, folder));
  const allPages = filesPath.filter((path) => /\.md?$/.test(path));
  const allSinglePages = allPages.filter((d) => d.match(/^(?!_)/));
  const defaultPage = allSinglePages.map((filename) => {
    const slugExtRemove = filename.replace(".md", "");
    const slug = kebabCase(slugExtRemove);
    const pageData = fs.readFileSync(path.join(folder, filename), "utf-8");

    const { data: frontmatter, content } = matter(pageData);
    return {
      frontmatter,
      content,
      slug,
    };
  });

  return defaultPage;
};

export const getIndexFile = (folder) => {
  const indexPath = fs.readdirSync(path.join(folder));
  const indexFile = indexPath.filter((index) => index.match(/^_/));
  const indexData = fs.readFileSync(path.join(folder, indexFile[0]), "utf-8");
  const indexDataParsed = matter(indexData);
  const frontmatterString = JSON.stringify(indexDataParsed.data);
  const frontmatter = JSON.parse(frontmatterString);
  const content = indexDataParsed.content;

  return {
    frontmatter,
    content,
  };
};

export const getAllPosts = (folder, isDate) => {
  const filesPath = fs.readdirSync(path.join(folder));
  const allPosts = filesPath.filter((d) => d.includes(".md"));
  const allSinglePosts = allPosts.filter((file) => file.match(/^(?!_)/));
  const post = allSinglePosts.map((filename) => {
    const slugExtRemove = filename.replace(".md", "");
    const slug = kebabCase(slugExtRemove);
    const postData = fs.readFileSync(path.join(folder, filename), "utf-8");
    const postDataParsed = matter(postData);
    const frontmatterString = JSON.stringify(postDataParsed.data);
    const frontmatter = JSON.parse(frontmatterString);
    const content = postDataParsed.content;
    const category = frontmatter.categories ? frontmatter.categories : "";

    return { frontmatter, slug, content, category };
  });

  const filterByDraft = post.filter(
    (post) => post.frontmatter.draft === false && post
  );
  const filterByDate = isDate
    ? filterByDraft
    : filterByDraft.filter((d) => new Date(d.frontmatter.date) <= currentDate);

  return filterByDate;
};
