import About from "@layouts/About";
import Base from "@layouts/Baseof";
import Contact from "@layouts/Contact";
import Regular from "@layouts/Regular";
import { getAllSlug, getDefaultPage } from "@lib/contents";
import { strip } from "@lib/utils/strip";
import { marked } from "marked";

// for all regular pages
const RegularPages = ({ slug, pageData }) => {
  const { title, meta_title, description, image, noindex, canonical } =
    pageData.frontmatter;
  const { content } = pageData;

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
        <Contact contact={pageData} />
      ) : slug === "about" ? (
        <About about={pageData} />
      ) : (
        <Regular regularPages={pageData} />
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
      defaultPage: slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// for regular page data
export const getStaticProps = async ({ params }) => {
  const { defaultPage } = params;
  const allPages = await getDefaultPage(`content/${defaultPage}`);

  return {
    props: {
      slug: defaultPage,
      pageData: allPages,
    },
  };
};
