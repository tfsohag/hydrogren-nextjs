import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  // destructuring items from config object
  const { baseURL, logo, logo_width, logo_height, logo_text, title } =
    config.site;
  return (
    <Link href={baseURL} passHref>
      <a className="block">
        {logo ? (
          <Image
            width={logo_width}
            height={logo_height}
            src={logo}
            alt={title}
          />
        ) : logo_text ? (
          logo_text
        ) : (
          title
        )}
      </a>
    </Link>
  );
};

export default Logo;
