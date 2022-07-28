import { markdownify } from "@lib/utils/textConverter";
import { shortcodes } from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

const About = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title, image } = frontmatter;

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1")}
        {image && <Image src={image} width={412} height={545} alt={title} />}
        <div className="content">
          <MDXRemote {...mdxContent} components={shortcodes} />
        </div>
      </div>
    </section>
  );
};

export default About;
