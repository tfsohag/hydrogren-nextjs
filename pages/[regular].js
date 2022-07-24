import About from "@layouts/About";
import Base from "@layouts/Baseof";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import { getAllSlug, getRegularPage } from "@lib/contents";
import { strip } from "@lib/utils/strip";
import { marked } from "marked";

// for all regular pages
const RegularPages = ({ slug, data }) => {
  const { title, meta_title, description, image, noindex, canonical } =
    data.frontmatter;
  const { content } = data;

  return (
    <Base
      title={strip(marked.parse(title))}
      description={
        description ? strip(description) : strip(content.slice(0, 120))
      }
      meta_title={strip(meta_title)}
      image={image}
      noindex={noindex}
      canonical={canonical}
    >
      {slug === "contact" ? (
        <Contact data={data} />
      ) : slug === "about" ? (
        <About data={data} />
      ) : (
        <Default data={data} />
      )}
    </Base>
  );
};
export default RegularPages;

// for regular page routes
export const getStaticPaths = async () => {
  const slugs = getAllSlug("content");
  const paths = slugs.map((slug) => ({
    params: {
      regular: slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// for regular page data
export const getStaticProps = async ({ params }) => {
  const { regular } = params;
  const allPages = await getRegularPage(`content/${regular}`);

  return {
    props: {
      slug: regular,
      data: allPages,
    },
  };
};
