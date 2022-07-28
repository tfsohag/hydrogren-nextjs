import PostSingle from "@layouts/PostSingle";
import { getAllSlug, getSinglePages } from "@lib/contents";
import { serialize } from "next-mdx-remote/serialize";

const Article = ({ post, mdxContent }) => {
  const { frontmatter, slug, content } = post[0];

  return (
    <PostSingle
      frontmatter={frontmatter}
      content={content}
      slug={slug}
      mdxContent={mdxContent}
    />
  );
};

export const getStaticPaths = () => {
  const allSlug = getAllSlug("content/posts");
  const paths = allSlug.map((slug) => ({
    params: {
      single: slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { single } = params;
  const allBlogs = getSinglePages("content/posts");
  const singlePost = allBlogs.filter((p) => p.slug == single);
  const mdxContent = await serialize(singlePost[0].content);

  return {
    props: {
      post: singlePost,
      slug: single,
      mdxContent: mdxContent,
    },
  };
};

export default Article;
