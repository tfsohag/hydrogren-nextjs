import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getAllPosts, getIndexFile, getSinglePage } from "@lib/pages";
import { sortByDate } from "@lib/utils/dateformat";
import Posts from "@partials/Posts";

const Home = ({ post, postIndex }) => {
  const sortPostByDate = sortByDate(post);
  const showPost = 4;
  const { title } = config.site;
  return (
    <Base title={title}>
      <Posts
        className="section"
        post={sortPostByDate.slice(0, showPost)}
        postIndex={postIndex}
      />
    </Base>
  );
};

export default Home;

export const getStaticProps = () => {
  const banner = getSinglePage("content/_index.md");
  const postIndex = getIndexFile("content/posts");
  const allPost = getAllPosts("content/posts", false);

  return {
    props: {
      banner: banner,
      postIndex: postIndex,
      post: allPost,
    },
  };
};
