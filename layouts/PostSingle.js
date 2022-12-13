import config from "@config/config.json";
import { dateFormat } from "@lib/utils/dateFormat";
import { readingTime } from "@lib/utils/readingTime";
import { similerItems } from "@lib/utils/similarItems";
import { humanize, markdownify, slugify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";
import Base from "./Baseof";
import Card from "./components/Card";
const { blog_folder } = config.settings;

const PostSingle = ({ post, mdxContent, slug, posts }) => {
  const { frontmatter, content } = post[0];
  let { description, title, date, image, categories } = frontmatter;
  description = description ? description : content.slice(0, 120);

  const similarPosts = similerItems(post, posts, slug);

  return (
    <Base title={title} description={description}>
      <section className="section pb-6">
        <div className="container">
          <article>
            {image && (
              <Image
                src={image}
                height="500"
                width="1000"
                alt={title}
                layout="responsive"
              />
            )}
            {markdownify(title, "h1", "h2 mt-12")}
            <ul className="mt-4 mb-8 text-text">
              <li className="mb-2 mr-4 inline-block">
                <ul>
                  {categories.map((category, i) => (
                    <li className="inline-block" key={`category-${i}`}>
                      <Link
                        href={`/categories/${slugify(category)}`}
                        className="mr-3 hover:text-primary"
                      >
                        {humanize(category)}
                      </Link>
                    </li>
                  ))}
                  |
                </ul>
              </li>
              <li className="mb-2 mr-4 inline-block">
                <span className="mr-2 inline-block">{dateFormat(date)}</span> |
              </li>
              <li className="mb-2 mr-4 inline-block">{readingTime(content)}</li>
            </ul>
            <div className="content text-left">
              <MDXRemote {...mdxContent} components={shortcodes} />
            </div>
          </article>
          <div className="pt-12">
            <h2 className="h2 text-center">Related Posts</h2>
            <div className="row mt-12">
              {similarPosts.map((post, i) => (
                <Card
                  className="col-12 mb-8 md:col-4"
                  key={"key-" + i}
                  post={post}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default PostSingle;
