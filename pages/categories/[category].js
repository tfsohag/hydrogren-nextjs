import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Card from "@layouts/components/Card";
import { getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import { sortByDate } from "@lib/utils/sortFunctions";
import { slugify } from "@lib/utils/textConverter";

const { blog_folder } = config.settings;

const Category = ({ posts }) => {
  return (
    <Base>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="mx-auto lg:col-10">
              <div className="row">
                {posts.map((post, i) => (
                  <Card
                    className="mb-8 sm:col-6"
                    key={"key-" + i}
                    post={post}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
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

  const sortedPosts = sortByDate(filteredPosts);

  return {
    props: {
      posts: filteredPosts,
    },
  };
};
