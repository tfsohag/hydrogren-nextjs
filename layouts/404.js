import { markdownify } from "@lib/utils/textConverter";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = ({ data }) => {
  const { frontmatter, content } = data;
  const router = useRouter();

  useEffect(() => {
    router.push("/404");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="flex h-[40vh] items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4">{frontmatter.title}</h1>
            {markdownify(content, "div", "content")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
