import Base from "@layouts/Baseof";
import { getSinglePages } from "@lib/contents";
import { getAllCategory } from "@lib/utils/category";
import Posts from "@partials/Posts";

// category page
const Category = ({ category, post }) => {
  return (
    <Base title={String(category)}>
      <div className="section">
        <div className="container">
          <h1>Showing posts from {category} category</h1>
          <Posts post={post} />
        </div>
      </div>
    </Base>
  );
};

export default Category;

// category page routes
export async function getStaticPaths() {
  const allCategories = getAllCategory("content/posts");

  const paths = allCategories.map((category) => ({
    params: {
      category: category,
    },
  }));

  return { paths, fallback: false };
}

// category page data
export const getStaticProps = ({ params }) => {
  const allPosts = getSinglePages("content/posts");

  const posts = allPosts.filter((data) =>
    data.frontmatter.categories.includes(params.category)
  );

  return { props: { post: posts, category: params.category } };
};
