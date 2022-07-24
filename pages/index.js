import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getListPage, getSinglePages } from "@lib/contents";
import { sortByDate } from "@lib/utils/sort";
import { markdownify } from "@lib/utils/textconverter";
import Posts from "@partials/Posts";

const Home = ({ post, banner }) => {
  const sortPostByDate = sortByDate(post);
  const showPost = 4;
  const { title } = config.site;
  return (
    <Base title={title}>
      {markdownify(banner.title, "h1")}
      <Posts className="section" post={sortPostByDate.slice(0, showPost)} />
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content");
  const { frontmatter } = homepage;
  const { banner } = frontmatter;
  const allPost = getSinglePages("content/posts");

  return {
    props: {
      banner: banner,
      post: allPost,
    },
  };
};
