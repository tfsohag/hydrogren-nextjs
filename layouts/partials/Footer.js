import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const Footer = () => {
  const { copyright } = config.params;
  return (
    <footer className="section bg-theme-dark pb-12">
      <div className="container text-center">
        {/* copyright */}
        {markdownify(copyright, "p", "text-light")}
      </div>
    </footer>
  );
};

export default Footer;
