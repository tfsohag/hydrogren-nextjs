import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, subtitle, description, list, form_title } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="mx-auto lg:col-8">
            {markdownify(title, "h1", "h1 mb-8 font-normal text-center")}
            {markdownify(subtitle, "h2", "font-normal text-3xl")}
            {markdownify(description, "p", "mt-4")}
            {list.map((item, index) => (
              <div className="mt-6" key={"key-" + index}>
                <h4 className="h5 font-normal">{item.title}</h4>
                <p className="mt-4">{markdownify(item.details)}</p>
              </div>
            ))}
            <div className="mt-12 pt-12">
              {markdownify(form_title, "h3", "h5 font-normal text-3xl")}
              <form className="contact-form mt-6">
                <div className="row mb-6">
                  <div className="md:col-6">
                    <label className="mb-2 block" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="form-input w-full"
                      name="name"
                      type="text"
                      placeholder="Alex Smith"
                      required
                    />
                  </div>
                  <div className="md:col-6">
                    <label className="mb-2 block" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-input w-full"
                      name="email"
                      type="email"
                      placeholder="hello@gmail.com"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="mb-2 block" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="form-input w-full"
                    name="subject"
                    type="text"
                    placeholder="Reasons for contact"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="mb-2 block" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="form-textarea w-full"
                    rows="7"
                    placeholder="Your message"
                  />
                </div>
                <button className="btn btn-primary rounded-[6px] text-sm">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
