import Pagination from "@components/Pagination";
import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getAllSlug, getListPage, getSinglePages } from "@lib/contents";
import Posts from "@partials/Posts";
import { serialize } from "next-mdx-remote/serialize";
import { useState } from "react";

const BlogPagination = ({ blogIndex, allBlogs, page, pagination }) => {
  const [index] = useState(true);
  const indexOfLastPost = page * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const numOfPage = Math.ceil(allBlogs.length / pagination);
  const currentPosts = allBlogs.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Base title="blog">
      <Posts
        post={currentPosts}
        postIndex={blogIndex}
        index={index}
        className="section"
      />
      <Pagination numOfPage={numOfPage} page={page} />
    </Base>
  );
};

export default BlogPagination;

export const getStaticPaths = () => {
  const allSlug = getAllSlug("content/posts", false);
  const { pagination } = config.settings;
  const numOfPage = Math.ceil(allSlug.length / pagination);
  let paths = [];

  for (let i = 0; i < numOfPage; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString(),
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const page = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;
  const allBlogs = getSinglePages("content/posts");
  const blogIndex = await getListPage("content/posts");

  const mdxSource = await serialize(blogIndex.content);

  return {
    props: {
      pagination: pagination,
      allBlogs: allBlogs,
      page: page,
      blogIndex: blogIndex,
      mdxSource,
    },
  };
};
