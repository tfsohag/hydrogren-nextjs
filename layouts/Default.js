import { markdownify } from "@lib/utils/textConverter";
import { MDXRemote } from "next-mdx-remote";
import shortcodes from "./shortcodes/all";

const Default = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title } = frontmatter;
  return (
    <section className="section !pt-[60px]">
      <div className="container">
        {markdownify(title, "h1", "h1 mb-20 text-center")}
        <div className="row">
          <div className="mx-auto lg:col-11">
            <div className="content">
              <MDXRemote {...mdxContent} components={shortcodes} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Default;
