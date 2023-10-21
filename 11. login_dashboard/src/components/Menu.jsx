import { Menulinks } from "../menuLinks/menuLinks";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

function Menu() {
  return (
    <>
      <header
        className="py-6 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white"
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <div className="flex flex-grow basis-0">
          <a href="/home" className="w-25px h-46px">
            <img src="/logo-light.png" alt="Logo" className="w-[300px]" />
          </a>
        </div>

        <nav className="hidden lg:block sm:hidden">
          <ul className="flex text-base [&>li>a]:text-white [&>li>a]:font-din [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
            {Menulinks.map((menu, index) => (
              <li key={index}>
                <Link to={menu.path}>{menu.text}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="flex flex-grow justify-end basis-0">
          <Button
            color="white"
            className="flex py-2 px-6 items-center gap-2 text-sm font-din"
          >
            3,2,1...
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="17"
              viewBox="0 0 10 17"
              fill="none"
            >
              <path
                d="M0.0953979 14.4288L6.01123 8.5L0.0953979 2.57125L1.91665 0.75L9.66665 8.5L1.91665 16.25L0.0953979 14.4288Z"
                fill="black"
              />
            </svg>
          </Button>
        </nav>
        <div
          id="menu-backdrop"
          className={`absolute bg-white/5 backdrop-blur-lg rounded translate-x-[var(--left)] translate-y-[var(--top)] left-0 top-0 w-[var(--width)] h-[var(--height)] transition-all duration-500 ease-in-out opacity-0 -z-10
    `}
        ></div>
      </header>
    </>
  );
}

export default Menu;
