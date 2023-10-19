import { Carousel, Typography } from "@material-tailwind/react";

function LandingPage() {
  return (
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
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              SUCCESS GUYS!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-base font-normal"
            >
              MORE THAN 600+ LAUNCHES AND OVER 5 MILLION LBS OF THRUST
            </Typography>
          </div>
        </div>
      </div>
      <img
        src="bg2-landing.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="bg3-landing.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

export default LandingPage;
