import { markdownify } from "@lib/utils/textconverter";
import { MDXRemote } from "next-mdx-remote";
import { shortcodes } from "./shortcodes/all";

const Contact = ({ data }) => {
  const { frontmatter, mdxSource } = data;
  const { title } = frontmatter;

  return (
    <section className="section">
      <div className="content">
        <MDXRemote {...mdxSource} components={shortcodes} />
      </div>
      <div className="container">
        {markdownify(title, "h1")}
        <form>
          <input
            className="block"
            name="name"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="block"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <textarea className="block" rows="7" placeholder="Message" />
          <button className="btn">Submit Now</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
