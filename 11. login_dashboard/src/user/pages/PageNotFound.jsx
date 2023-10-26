import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

export function PageNotFound() {
  return (
    <>
      <div className="flex flex-col h-screen bg-black">
        <img
          src="/bg-404.jpg"
          alt=""
          className="object-cover w-full h-64"
        />

        <div className="flex items-center justify-center flex-1">
          <div className="max-w-xl px-4 py-8 mx-auto text-center">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              HOUSTON...
            </h1>

            <p className="mt-4 text-gray-400">
              Try searching again, or return home to start from the beginning.
            </p>

            <Link to='/home'>
              <Button
                color="white"
                size="lg"
                className="mt-8"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
