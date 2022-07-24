import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getListPage, getSinglePages } from "@lib/contents";
import { sortByDate } from "@lib/utils/sort";
import Posts from "@partials/Posts";

const Home = ({ post }) => {
  const sortPostByDate = sortByDate(post);
  const showPost = 4;
  const { title } = config.site;
  return (
    <Base title={title}>
      <Posts className="section" post={sortPostByDate.slice(0, showPost)} />
    </Base>
  );
};

export default Home;

export const getStaticProps = async () => {
  const banner = await getListPage("content");
  const allPost = getSinglePages("content/posts", false);

  return {
    props: {
      banner: banner,
      post: allPost,
    },
  };
};
