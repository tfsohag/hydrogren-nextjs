import { marked } from "marked";

const Contact = ({ data }) => {
  const { frontmatter } = data;

  return (
    <section className="section mx-auto max-w-[1260px]">
      <div className="container mx-auto">
        <div className="mb-5 flex items-center font-primary">
          <h2
            className="section-title ml-3"
            dangerouslySetInnerHTML={{
              __html: marked.parseInline(frontmatter.title),
            }}
          ></h2>
        </div>
        <h3 className="relative mb-16 inline-block text-h1 font-semibold lg:text-[2.5rem] xl:text-[2.9rem]">
          <span
            dangerouslySetInnerHTML={{
              __html: marked.parse(frontmatter.subtitle),
            }}
          ></span>
        </h3>

        <form className="text-h3">
          <div className="form-inputs mb-16">
            <span>Hi, My Name is</span>{" "}
            <input
              type="text"
              className="w-full max-w-[300px] border-0 border-b border-black p-0 text-h3 focus:border-black focus:ring-0"
            />{" "}
            <span>Here is my Email Address </span>{" "}
            <input
              type="text"
              className="w-full max-w-[500px] border-0 border-b border-black p-0 text-h3 focus:border-black focus:ring-0"
            />{" "}
            <span>I would love to get in touch with you.....</span>
          </div>
          <textarea
            className="mb-12 w-full border-black p-4 text-base focus:border-black focus:ring-0"
            rows="7"
            placeholder="Let’s make something awesome together......"
          ></textarea>
          <button className="btn">Submit Now</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
