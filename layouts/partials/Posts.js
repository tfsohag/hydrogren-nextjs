import { dateFormat } from "@lib/utils/dateformat";
import Link from "next/link";

const Posts = ({ post, className }) => {
  return (
    <section className={className}>
      <div className="container">
        {post.map((post) => (
          <div key={post.frontmatter.title} className="mt-9">
            <Link href={`/posts/${post.slug}`} passHref>
              <a className="flex flex-wrap justify-between p-6 md:px-8 lg:p-8 lg:px-12">
                <span className="mb-4 basis-full pt-2 uppercase lg:mb-0 lg:basis-1/6 lg:text-base">
                  {dateFormat(new Date(post.frontmatter.date))}
                </span>
                <h3 className="basis-11/12 text-h5 font-medium leading-relaxed md:text-h4 lg:ml-10 lg:basis-4/6 xl:text-h3">
                  {post.frontmatter.title}
                </h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Posts;
