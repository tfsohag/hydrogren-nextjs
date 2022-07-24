import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getListPage, getSinglePages } from "@lib/contents";
import { sortByDate } from "@lib/utils/sort";
import Posts from "@partials/Posts";
import { marked } from "marked";

const Home = ({ post, banner }) => {
  const test = (title) => {
    const data = (
      <span
        dangerouslySetInnerHTML={{
          __html: marked.parseInline(title),
        }}
      ></span>
    );
    return data;
  };
  const sortPostByDate = sortByDate(post);
  const showPost = 4;
  const { title } = config.site;
  return (
    <Base title={title}>
      <h1>{test(banner.title)}</h1>
      <Posts className="section" post={sortPostByDate.slice(0, showPost)} />
    </Base>
  );
};

// for homepage data
export const getStaticProps = async () => {
  const indexPage = await getListPage("content");
  const { content, frontmatter } = indexPage;
  const { banner, test } = frontmatter;
  const allPost = getSinglePages("content/posts");

  return {
    props: {
      banner: banner,
      post: allPost,
    },
  };
};

export default Home;
