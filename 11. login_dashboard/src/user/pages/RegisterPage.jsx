import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useForm } from "../../hook/useForm";

export function RegisterPage() {

  const navigate = useNavigate();

  const { name, email, password, onInputChange, onResetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onRegister = (event) => {
    event.preventDefault();
    navigate("/launches", {
      replace: true,
      state: { isLogged: true, name },
    });
    onResetForm();
  };

  return (
    <>
      <section className="relative bg-black flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <div className="flex justify-center items-center">
              <img
                src="/logo-light.png"
                alt="Logo"
                className="w-[80%]"
                data-aos="fade-down"
                data-aos-duration="1200"
                data-aos-delay="100"
              />
            </div>
            <p
              className="mt-4 text-white"
              data-aos="fade-down"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              Welcome to the leading registry for rocket launches and space
              exploration, with up-to-date mission and rocket information.
            </p>
          </div>

          <form
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            data-aos="fade-down"
            data-aos-duration="1200"
            data-aos-delay="300"
            onSubmit={onRegister}
          >
            <div>
              <label htmlFor="name" className="sr-only text-white">
                Name
              </label>

              <div className="relative">
                <input
                  type="name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={onInputChange}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter your name"
                  required
                  autoComplete="off"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only text-white">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={onInputChange}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  required
                  autoComplete="off"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={onInputChange}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  required
                  autoComplete="off"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-white">
                Do you have account?
                <Link to="/login" className="underline">
                  Log in
                </Link>
              </p>
              <Button type="submit" color="white">
                Sign in
              </Button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src="/bg-register.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
