import config from "@config/config.json";
import Base from "@layouts/Baseof";
import ImageFallback from "@layouts/components/ImageFallback";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";
import Posts from "@partials/Posts";
const { blog_folder } = config.settings;

const Home = ({ profile, posts }) => {
  const sortPostByDate = sortByDate(posts);
  const showPost = 4;

  return (
    <Base>
      {/* profile */}
      <div className="section">
        <div className="container">
          <div className="mx-auto max-w-[760px] text-center">
            <ImageFallback
              className="mx-auto rounded-full"
              src={profile.avatar}
              width={220}
              height={220}
              priyority={true}
              alt=""
            />
            {markdownify(profile.name, "h1", "mt-12")}
            {markdownify(profile.position, "p", "mt-6 text-primary text-xl")}
            {markdownify(profile.details, "p", "mt-4 leading-9 text-xl")}
          </div>
        </div>
      </div>

      {/* posts */}
      <div className="section pt-4">
        <div className="container">
          <Posts posts={sortPostByDate.slice(0, showPost)} />
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
  const posts = getSinglePage(`content/${blog_folder}`);

  return {
    props: {
      profile: frontmatter,
      posts: posts,
    },
  };
};
