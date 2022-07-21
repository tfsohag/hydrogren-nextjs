import { shortcodes } from "@shortcodes/all";
import { marked } from "marked";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

const About = ({ about }) => {
  const { frontmatter, mdxSource } = about;

  return (
    <section className="section">
      <div className="container">
        <h2
          dangerouslySetInnerHTML={{
            __html: marked.parseInline(frontmatter.title),
          }}
        />
        {frontmatter.image && (
          <Image src={frontmatter.image} width={412} height={545} alt="image" />
        )}
        <div className="content">
          <MDXRemote {...mdxSource} components={shortcodes} />
        </div>
      </div>
    </section>
  );
};

export default About;
