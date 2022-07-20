import About from "@layouts/About";
import Base from "@layouts/Baseof";
import Contact from "@layouts/Contact";
import Regular from "@layouts/Regular";
import { getDefaultPage } from "@lib/contents";

// for all regular pages
const RegularPages = ({ slug, regularPages, contact, about }) => {
  if (regularPages === undefined) {
    return null;
  }
  return (
    <Base title={slug}>
      {slug == "contact" ? (
        <Contact contact={contact} />
      ) : slug == "about" ? (
        <About about={about} />
      ) : (
        <Regular regularPages={regularPages} />
      )}
    </Base>
  );
};
export default RegularPages;

// for regular page routes
export const getStaticPaths = () => {
  const regularPages = getDefaultPage("content");
  const paths = regularPages.map((page) => ({
    params: {
      defaultPage: page.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

// for regular page data
export const getStaticProps = ({ params }) => {
  const { defaultPage } = params;
  const allPages = getDefaultPage("content");
  const regularPages = allPages.filter(
    (page) => !page.frontmatter.layout //&& page.slug === defaultPage
  );
  const about = allPages.filter((page) => page.frontmatter.layout === "about");
  const contact = allPages.filter(
    (page) => page.frontmatter.layout === "contact"
  );

  // for custom 404 page rendering
  const allPagesCheck = allPages.filter((page) => page.slug === defaultPage);
  if (allPagesCheck.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      regularPages: regularPages,
      slug: defaultPage,
      allPost: allPages,
      contact: contact,
      about: about,
    },
  };
};
