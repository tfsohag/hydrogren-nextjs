import { marked } from "marked";

const Regular = ({ regularPages }) => {
  const { frontmatter, content } = regularPages[0];
  return (
    <section className="section mx-auto max-w-[1260px]">
      <div className="container mx-auto">
        <div className="font-secondary container mx-auto mb-16 px-4 sm:px-10 md:mb-24">
          <h1 className="pageTitle mt-16 font-primary md:mt-24">
            {frontmatter.title}
          </h1>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Regular;
