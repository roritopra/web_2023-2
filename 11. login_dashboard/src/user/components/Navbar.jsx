import { Menulinks } from "../menuLinks/menuLinks";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
  Button,
} from "@material-tailwind/react";

export function Navbar() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const onSignOut = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <>
      <header
        id="header"
        className={`py-8 px-5 flex items-center fixed top-0 w-full justify-between z-40 text-white transition-[0.7s] lg:px-16 ${
          isScrolled ? "bg-[#000000e8]" : ""
        }`}
      >
        <div className="flex flex-grow basis-0">
          <Link to="/" className="w-25px h-46px">
            <img
              src="/logo-light.png"
              alt="Logo"
              className="w-[300px] hidden lg:block"
            />
            <img
              src="/logo-mobile.png"
              alt="Logo"
              className="w-[100px] lg:hidden"
            />
          </Link>
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

        {state?.isLogged ? (
          <nav className="flex flex-grow justify-end basis-0">
            <div className="hidden lg:flex">
              <Menu>
                <MenuHandler>
                  <div className="flex flex-col items-center gap-1 i">
                    <Avatar
                      variant="circular"
                      alt="tania andrew"
                      className="cursor-pointer"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <Typography variant="h6">{state?.name}</Typography>
                  </div>
                </MenuHandler>
                <MenuList>
                  <MenuItem
                    className="flex items-center gap-2"
                    onClick={onSignOut}
                  >
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
                        fill="#90A4AE"
                      />
                    </svg>
                    <Typography variant="small" className="font-medium">
                      Sign Out
                    </Typography>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>

            <div className="flex justify-end lg:hidden">
              <button onClick={toggleNavbar}>
                <img
                  className="w-[30px] h-[50px]"
                  src="/menu_mobile.svg"
                  alt=""
                />
              </button>
            </div>

            <div
              className={`fixed top-0 left-0 z-50 w-screen h-screen bg-black transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <button
                className="absolute top-4 right-4 text-white text-5xl"
                onClick={toggleNavbar}
              >
                &#9776;
              </button>
              <div className="flex flex-col items-center justify-center h-full">
                <ul className="flex flex-col items-center gap-16">
                  {Menulinks.map((menu, index) => (
                    <Link
                      to={menu.path}
                      key={index}
                      onClick={closeNavbar}
                      className="font-roobertLight text-3xl text-center cursor-pointer transition-all"
                    >
                      {menu.text}
                    </Link>
                  ))}
                  <Menu>
                    <MenuHandler>
                      <div className="flex flex-col items-center gap-1">
                        <Avatar
                          variant="circular"
                          alt="tania andrew"
                          className="cursor-pointer"
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        />
                        <Typography variant="h6">{state?.name}</Typography>
                      </div>
                    </MenuHandler>
                    <MenuList>
                      <MenuItem
                        className="flex items-center gap-2"
                        onClick={onSignOut}
                      >
                        <svg
                          width="16"
                          height="14"
                          viewBox="0 0 16 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
                            fill="#90A4AE"
                          />
                        </svg>
                        <Typography variant="small" className="font-medium">
                          Sign Out
                        </Typography>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </ul>
              </div>
            </div>
          </nav>
        ) : (
          <div className="flex-grow justify-end basis-0">
            <nav className="hidden lg:flex justify-end">
              <Link to="/login">
                <Button color="white">Log in</Button>
              </Link>
            </nav>

            <div className="flex justify-end lg:hidden">
              <button onClick={toggleNavbar}>
                <img
                  className="w-[30px] h-[50px]"
                  src="/menu_mobile.svg"
                  alt=""
                />
              </button>
            </div>

            <div
              className={`fixed top-0 left-0 z-50 w-screen h-screen bg-black transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <button
                className="absolute top-4 right-4 text-white text-5xl"
                onClick={toggleNavbar}
              >
                &#9776;
              </button>
              <div className="flex flex-col items-center justify-center h-full">
                <ul className="flex flex-col items-center gap-16">
                  {Menulinks.map((menu, index) => (
                    <Link
                      to={menu.path}
                      key={index}
                      onClick={closeNavbar}
                      className="font-roobertLight text-3xl text-center cursor-pointer transition-all"
                    >
                      {menu.text}
                    </Link>
                  ))}
                  <Link to="/login">
                    <p className="bg-white text-black px-10 py-4 text-3xl font-roobertLight rounded-lg">
                      Log in
                    </p>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        )}
      </header>

      <Outlet />
    </>
  );
}
