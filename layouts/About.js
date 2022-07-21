import { Button } from "@shortcodes/index";
import { marked } from "marked";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

const shortcodes = {
  Button,
};

const About = ({ about }) => {
  const { frontmatter, mdxSource } = about;

  return (
    <section className="section mx-auto max-w-[1260px]">
      <div className="container mx-auto">
        <div>
          <div>
            <h2
              className="section-title ml-3"
              dangerouslySetInnerHTML={{
                __html: marked.parseInline(frontmatter.title),
              }}
            ></h2>
            <Image
              src={frontmatter.image}
              width={412}
              height={545}
              alt="image"
            />
          </div>
          <div className="content">
            <MDXRemote {...mdxSource} components={shortcodes} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
