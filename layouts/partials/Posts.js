import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post, i) => (
        <div key={`key-${i}`} className="mb-4">
          {/* <p>{dateFormat(new Date(post.frontmatter.date))}</p> */}
          <h3>
            <Link href={`/posts/${post.slug}`} passHref>
              <a>{post.frontmatter.title}</a>
            </Link>
          </h3>
        </div>
      ))}
    </>
  );
};

export default Posts;
