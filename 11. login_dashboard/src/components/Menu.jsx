import { Menulinks } from "../navsLinks/navLinks";
import { Link } from "react-router-dom";


function Menu() {
  return (
    <>
      <header className="py-6 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white">
        <div className="flex flex-grow basis-0">
          <a href="./" className="w-25px h-46px">
            <img src="/logo-light.png" alt="Logo" className="w-[55%]" />
          </a>
        </div>

        <nav className="hidden lg:block sm:hidden">
          <ul className="flex text-sm [&>li>a]:text-white [&>li>a]:font-din [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
            {
              Menulinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    {link.text}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>

        <nav className="flex flex-grow justify-end basis-0">
          <a
            href=""
            className="text-sm font-din flex items-center gap-2 text-white py-1 px-3 bg-light-white rounded-lg"
          >
            3,2,1...
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
          >
            <g clipPath="url(#clip0_8_10)">
              <path
                d="M11.0954 21.4288L17.0112 15.5L11.0954 9.57125L12.9166 7.75L20.6666 15.5L12.9166 23.25L11.0954 21.4288Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_8_10">
                <rect width="31" height="31" fill="white" />
              </clipPath>
            </defs>
          </svg>
          </a>
          
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
