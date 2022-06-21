import Logo from "@components/Logo";
import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import Link from "next/link";

const Footer = () => {
  const { copyright } = config.params;
  return (
    <footer>
      <div className="container">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* logo */}
          <Logo />
          {/* footer menu */}
          <ul className="space-x-4">
            {menu.footer.map((menu) => (
              <li className="inline-block" key={menu.name}>
                <Link href={menu.url} passHref>
                  <a>{menu.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          {/* social icons */}
          <Social className={"space-x-4"} />
        </div>
        <p className="text-center">{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
