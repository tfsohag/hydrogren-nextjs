import Logo from "@components/Logo";
import menu from "@config/menu.json";
import Link from "next/link";
import React from "react";

const Header = () => {
  // distructuring the main menu from menu object
  const { main } = menu;

  return (
    <header>
      <nav className="container flex flex-wrap items-center justify-between">
        {/* logo */}
        <Logo />
        {/* navbar toggler */}
        <input id="nav-toggle" type="checkbox" className="hidden" />
        <label
          id="show-button"
          htmlFor="nav-toggle"
          className="flex cursor-pointer items-center sm:hidden"
        >
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
          </svg>
        </label>
        <label
          id="hide-button"
          htmlFor="nav-toggle"
          className="hidden cursor-pointer items-center"
        >
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Close</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"
            />
          </svg>
        </label>
        {/* /navbar toggler */}

        <ul
          id="nav-menu"
          className="hidden w-full sm:flex sm:w-auto sm:space-x-2"
        >
          {main.map((menu, i) => (
            <React.Fragment key={`menu-${i}`}>
              {menu.hasChildren ? (
                <li className="group relative inline-block">
                  <a className="inline-flex items-center">
                    {menu.name}
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </a>
                  <ul className="hidden pt-1 group-hover:block sm:absolute">
                    {menu.children.map((child, i) => (
                      <li key={`children-${i}`}>
                        <Link href={child.url} passHref>
                          <a className="block">{child.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li>
                  <Link href={menu.url} passHref>
                    <a>{menu.name}</a>
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
