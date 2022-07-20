import { marked } from "marked";

const Regular = ({ regularPages }) => {
  const { frontmatter, content } = regularPages[0];
  return (
    <section className="section">
      <div className="container">
        <div className="container mx-auto mb-16 px-4 font-secondary sm:px-10 md:mb-24">
          <h1 className="font-primary">{frontmatter.title}</h1>
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
