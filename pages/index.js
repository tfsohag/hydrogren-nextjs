import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getListPage, getSinglePages } from "@lib/contents";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";
import Posts from "@partials/Posts";

const Home = ({ posts, banner }) => {
  const sortPostByDate = sortByDate(posts);
  const showPost = 4;
  const { title } = config.site;
  return (
    <Base title={title}>
      <div className="section">
        <div className="container text-center">
          {markdownify(banner.title, "h1", "mb-8")}
          <Posts posts={sortPostByDate.slice(0, showPost)} />
        </div>
      </div>
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content");
  const { frontmatter } = homepage;
  const { banner } = frontmatter;
  const posts = getSinglePages("content/posts");

  return {
    props: {
      banner: banner,
      posts: posts,
    },
  };
};
