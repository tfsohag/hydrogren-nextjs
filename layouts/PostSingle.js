import { dateFormat } from "@lib/utils/dateformat";
import { strip } from "@lib/utils/strip";
import { Button } from "@shortcodes/index";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";
import Base from "./Baseof";

const shortcodes = {
  Button,
};

const PostSingle = ({ frontmatter, content, mdxSource }) => {
  const { description, title } = frontmatter;

  return (
    <Base
      title={strip(title)}
      description={description ? description : strip(content.slice(0, 120))}
    >
      <section className="section">
        <div className="container">
          <div className="mb-4">
            <span className="mb-6 text-base font-normal">
              {dateFormat(new Date(frontmatter.date))}
            </span>
            <h1 className="text-h1 font-bold">{frontmatter.title}</h1>
          </div>
          <div className="mb-4">
            {frontmatter.image && (
              <Image
                src={frontmatter.image}
                height="200"
                width="200"
                alt={frontmatter.title}
              />
            )}
            <div className="content">
              <MDXRemote {...mdxSource} components={shortcodes} />
            </div>

            <div className="mb-4">
              {frontmatter.categories.map((category, i) => (
                <Link key={`category-${i}`} href={`/categories/${category}`}>
                  <a className="mr-4">{category}</a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default PostSingle;
