import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import { slugify } from "@lib/utils/textConverter";

const { blog_folder } = config.settings;

const Category = ({ posts }) => {
  return (
    <Base>
      {posts.map((post) => (
        <h1 key={post.slug}>{post.slug}</h1>
      ))}
    </Base>
  );
};

export default Category;

export const getStaticPaths = () => {
  const allCategory = getTaxonomy(`content/${blog_folder}`, "categories");
  const paths = allCategory.map((category) => ({
    params: {
      category: category,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const posts = getSinglePage(`content/${blog_folder}`);
  const filteredPosts = posts.filter((post) =>
    post.frontmatter.categories.find((category) =>
      slugify(category).includes(params.category)
    )
  );

  return {
    props: {
      posts: filteredPosts,
    },
  };
};
