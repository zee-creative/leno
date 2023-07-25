import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["500", "400"], subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`${poppins.className} flex lg:space-y-0 lg:space-x-5 space-y-3 mt-2 justify-center lg:flex-row flex-col items-start py-16 px-3 lg:px-10`}
    >
      <div className="lg:w-1/2 flex md:w-full justify-center items-start">
        <Image
          src="/hero-dummy.webp"
          width={600}
          height={600}
          className="md:w-full"
          alt="Picture of the author"
        />
      </div>
      <div className="lg:w-1/2 space-y-3">
        <h1 className="lg:text-3xl text-2xl md:text-4xl">
          We are a <br />{" "}
          <span className="lg:text-6xl md:text-5xl lg:font-medium text-5xl font-bold">
            LEADING
          </span>
        </h1>
        <p className="lg:text-xl">
          Design agency that turns your streaming vision into a standout brand.
          Imagine your&lsquo;e the best Twitch streamer, and now see yourself as a
          famous brand!! That&lsquo;s what we do for you.
        </p>
        <div className="flex lg:flex-row flex-col lg:py-0 py-3 justify-start items-start space-x-3">
          <button className="button-49 px-7 py-2" role="button">
            Build Your Brand
          </button>
          <button
            className="lg:px-4 py-2 tracking-widest text-lg button-38 hover:text-[var(--true-purple)] font-bold"
            role="button"
          >
            <span className="relative -bottom-2">Talk To Us</span>
          </button>
        </div>
      </div>
    </div>
  );
}
