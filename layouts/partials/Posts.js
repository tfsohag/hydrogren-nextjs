import { dateFormat } from "@lib/utils/dateformat";
import { marked } from "marked";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Posts = ({ post, postIndex, className }) => {
  return (
    <section className={className}>
      <div className="container">
        {postIndex && (
          <h2
            className="section-title ml-3"
            dangerouslySetInnerHTML={{
              __html: marked.parseInline(postIndex.frontmatter.title),
            }}
          />
        )}
        {post.map((post) => (
          <div key={post.frontmatter.title} className="post-card mt-9">
            <Link href={`/posts/${post.slug}`} passHref>
              <a className="flex flex-wrap justify-between p-6 md:px-8 lg:p-8 lg:px-12">
                <span className="mb-4 basis-full pt-2 uppercase lg:mb-0 lg:basis-1/6 lg:text-base">
                  {dateFormat(new Date(post.frontmatter.date))}
                </span>
                <h3 className="basis-11/12 text-h5 font-medium leading-relaxed md:text-h4 lg:ml-10 lg:basis-4/6 xl:text-h3">
                  {post.frontmatter.title}
                </h3>
                <span className="ml-2 mt-4 pt-3 text-3xl font-normal md:mt-0 lg:ml-auto">
                  <BsArrowRight />
                </span>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Posts;
