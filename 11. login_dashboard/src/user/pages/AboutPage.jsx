import "./AboutPage.css";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function AboutPage() {
  return (
    <>
      <main className="bg-black pt-20">
        <div className="flex justify-center mb-16">
          <div className="main-container">
            <div className="sun"></div>
            <div className="mercury"></div>
            <div className="earth">
              <div className="moon"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center px-5 lg:px-10">
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="bg-gradient-to-r from-white via-white to-[#9c9c9d] bg-clip-text text-transparent font-din text-2xl mb-5 lg:text-6xl lg:mb-14"
          >
            FIND YOUR FUTURE
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-white text-sm font-roobertLight lg:text-base lg:leading-relaxed lg:w-9/12 lg:text-center"
          >
            Welcome to SpaceXplore, your one-stop destination for all things
            SpaceX! We are dedicated to bringing the excitement of space
            exploration right to your fingertips. With SpaceXplore, you can
            watch live launches as they happen, keeping you up-to-date with the
            latest missions and groundbreaking moments in space history.
          </p>
        </div>

        <section className="grid gap-20 mt-24 sm:grid-cols-2 lg:grid-cols-3 lg:mt-0 lg:h-screen place-content-center px-5 lg:px-10">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="flex flex-col items-center gap-1"
          >
            <h6 className="text-9xl font-roobert text-white">273</h6>
            <p className="text-white text-base">TOTAL LAUNCHES</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1100"
            className="flex flex-col items-center gap-1"
          >
            <h6 className="text-9xl font-roobert text-white">236</h6>
            <p className="text-white text-base">TOTAL LANDINGS</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1400"
            className="flex flex-col items-center gap-1"
          >
            <h6 className="text-9xl font-roobert text-white">208</h6>
            <p className="text-white text-base">TOTAL REFLIGHTS</p>
          </div>
        </section>

        <section className="bg-black text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1
                data-aos="fade-up"
                data-aos-duration="800"
                className="bg-gradient-to-r from-white via-white to-[#9c9c9d] bg-clip-text text-2xl font-din font-extrabold text-transparent sm:text-6xl"
              >
                DISCOVER LAST LAUNCHES
                <span className="sm:block"> VIDEO REAL TIME </span>
              </h1>

              <p
                data-aos="fade-up"
                data-aos-duration="800"
                className="mx-auto mt-4 max-w-xl sm:text-base/relaxed"
              >
                All the information you need to know about SpaceX launches and a
                lot more. You can also watch the live launch as it happens.
                SpaceXplore is your one-stop destination for all things SpaceX!
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/login"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="800"
                >
                  <Button color="white">Get Started</Button>
                </Link>

                <Link
                  to="/"
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="800"
                >
                  <Button color="white" variant="outlined">
                    Start home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
