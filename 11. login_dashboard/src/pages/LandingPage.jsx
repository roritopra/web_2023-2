import { Carousel, Typography } from "@material-tailwind/react";
import Menu from "../components/Navbar";

export function LandingPage() {
  return (
    <>
      <Menu />
      <Carousel
        className="h-screen overflow-hidden relative z-20"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="relative h-full w-full">
          <img
            src="bg1-landing.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="800"
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-7xl font-roobert font-bold"
              >
                SUCCESS GUYS!
              </Typography>
              <Typography
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="900"
                variant="lead"
                color="white"
                className="mb-12 opacity-80 text-base font-normal font-roobert"
              >
                MORE THAN 600+ LAUNCHES WORKING ON A NEXT GENERATION
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="bg2-landing.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="800"
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-7xl font-roobert font-bold"
              >
                FALCON HEAVY
              </Typography>
              <Typography
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="900"
                variant="lead"
                color="white"
                className="mb-12 opacity-80 text-base font-normal font-roobert"
              >
                OVER 5 MILLION LBS OF THRUST
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="bg3-landing.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="800"
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-7xl font-roobert font-bold"
              >
                FALCON 9
              </Typography>
              <Typography
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="900"
                variant="lead"
                color="white"
                className="mb-12 opacity-80 text-base font-normal font-roobert"
              >
                FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT
              </Typography>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
}
