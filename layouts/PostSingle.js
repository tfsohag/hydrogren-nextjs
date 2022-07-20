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
  const { description, title, date, image, categories } = frontmatter;

  return (
    <Base
      title={strip(title)}
      description={description ? description : strip(content.slice(0, 120))}
    >
      <section className="section">
        <div className="container">
          <div className="mb-4">
            <span>{dateFormat(new Date(date))}</span>
            <h1>{title}</h1>
            {image && (
              <Image src={image} height="200" width="200" alt={title} />
            )}
            {categories.map((category, i) => (
              <Link key={`category-${i}`} href={`/categories/${category}`}>
                <a className="mr-4">{category}</a>
              </Link>
            ))}
            <div className="content">
              <MDXRemote {...mdxSource} components={shortcodes} />
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default PostSingle;
