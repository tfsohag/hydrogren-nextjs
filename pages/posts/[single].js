import Base from "@layouts/Baseof";
import PostSingle from "@layouts/PostSingle";
import { getAllPosts } from "@lib/pages";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Article = ({ post, allPost }) => {
  const { frontmatter, slug, content } = post[0];

  var index = allPost.findIndex((img) => img.slug == slug);
  const prev = index - 1 >= 0 ? allPost[index - 1].slug : slug;
  const next = index + 1 < allPost.length ? allPost[index + 1].slug : slug;
  const prevTitle =
    index - 1 >= 0 ? allPost[index - 1].frontmatter.title : frontmatter.title;
  const nextTitle =
    index + 1 < allPost.length
      ? allPost[index + 1].frontmatter.title
      : frontmatter.title;
  const nextPrev = [
    {
      button: "previous post",
      slug: prev,
      title: prevTitle,
      arrow: <BsArrowLeft />,
    },
    {
      button: "next post",
      slug: next,
      title: nextTitle,
      arrow: <BsArrowRight />,
    },
  ];

  return (
    <Base title={slug}>
      <PostSingle
        frontmatter={frontmatter}
        content={content}
        nextPrev={nextPrev}
        slug={slug}
      />
    </Base>
  );
};

export const getStaticPaths = () => {
  const allBlogs = getAllPosts("content/posts", false);
  const paths = allBlogs.map((post) => ({
    params: {
      single: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const { single } = params;
  const allBlogs = getAllPosts("content/posts", false);
  const singlePost = allBlogs.filter((p) => p.slug == single);

  return {
    props: {
      post: singlePost,
      slug: single,
      allPost: allBlogs,
    },
  };
};

export default Article;
