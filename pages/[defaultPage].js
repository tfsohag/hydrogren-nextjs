import About from "@layouts/About";
import Base from "@layouts/Baseof";
import Contact from "@layouts/Contact";
import Regular from "@layouts/Regular";
import { getAllSlug, getDefaultPage } from "@lib/contents";

// for all regular pages
const RegularPages = ({ slug, pageData }) => {
  if (pageData === undefined) {
    return null;
  }
  return (
    <Base title={slug}>
      {slug == "contact" ? (
        <Contact contact={pageData} />
      ) : slug == "about" ? (
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
    fallback: true,
  };
};

// for regular page data
export const getStaticProps = async ({ params }) => {
  const { defaultPage } = params;
  const allPages = await getDefaultPage(`content/${defaultPage}`);
  console.log(allPages);

  return {
    props: {
      slug: defaultPage,
      // slug: defaultPage,
      pageData: allPages,
    },
  };
};
