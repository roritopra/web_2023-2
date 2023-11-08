import "./AboutPage.css";

export function AboutPage() {
  return (
    <>
      <main className="bg-black px-5 py-20">
        <div className="flex justify-center mb-16">
          <div className="main-container">
            <div className="sun"></div>
            <div className="mercury"></div>
            <div className="earth">
              <div className="moon"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-white font-din text-2xl mb-5">
            FIND YOUR FUTURE
          </h1>
          <p className="text-white text-sm font-roobertLight">
            Welcome to SpaceXplore, your one-stop destination for all things
            SpaceX! We are dedicated to bringing the excitement of space
            exploration right to your fingertips. With SpaceXplore, you can
            watch live launches as they happen, keeping you up-to-date with the
            latest missions and groundbreaking moments in space history.
          </p>
        </div>
      </main>
    </>
  );
}
