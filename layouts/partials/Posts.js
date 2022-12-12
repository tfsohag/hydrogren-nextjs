import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts }) => {
  const { summary_length, blog_folder } = config.settings;
  return (
    <div className="row">
      {posts.map((post, i) => (
        <div key={`key-${i}`} className="col-12 mb-8 sm:col-6">
          {post.frontmatter.image && (
            <Image
              className="rounded-lg"
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              width={i === 0 ? "925" : "445"}
              height={i === 0 ? "475" : "230"}
              layout="responsive"
            />
          )}
          <h2 className="h3 mb-2">
            <Link
              href={`/${blog_folder}/${post.slug}`}
              className="block hover:text-primary"
            >
              {post.frontmatter.title}
            </Link>
          </h2>
          <p className="text-text">
            {post.content.slice(0, Number(summary_length))}...
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
