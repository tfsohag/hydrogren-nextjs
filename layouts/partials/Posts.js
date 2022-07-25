import { dateFormat } from "@lib/utils/dateformat";
import Link from "next/link";

const Posts = ({ post }) => {
  return (
    <>
      {post.map((post, i) => (
        <div key={`key-${i}`} className="mb-4">
          <p>{dateFormat(new Date(post.frontmatter.date))}</p>
          <Link href={`/posts/${post.slug}`} passHref>
            <a>{post.frontmatter.title}</a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Posts;
