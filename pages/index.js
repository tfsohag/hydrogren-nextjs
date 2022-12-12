import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";
import Posts from "@partials/Posts";
const { blog_folder } = config.settings;

const Home = ({ banner, posts, authors }) => {
  const sortPostByDate = sortByDate(posts);
  const showPost = 4;

  return (
    <Base>
      <div className="section">
        <div className="container">
          {markdownify(banner.title, "h1", "h2 mb-8 text-center")}
          <Posts posts={sortPostByDate.slice(0, showPost)} authors={authors} />
        </div>
      </div>
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner } = frontmatter;
  const posts = getSinglePage(`content/${blog_folder}`);

  return {
    props: {
      banner: banner,
      posts: posts,
    },
  };
};
