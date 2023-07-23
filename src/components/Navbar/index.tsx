import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import localFont from "next/font/local";
import Mobile from "@/components/Navbar/Mobile";
import Data from "@/components/Navbar/Data";

const font = localFont({ src: "BergenMono-Regular.woff" });

export default function Navbar() {
  const [sideActive, setSideActive] = useState<boolean>(false);

  try {
    window?.addEventListener("blur", () => setSideActive(false));
    document?.addEventListener("blur", () => setSideActive(false));
    document?.addEventListener("scroll", () => setSideActive(false));

    document?.addEventListener("click", (e: Event) => {
      if (
        (e.target as Element)?.closest("[data-dropdown]") != null ||
        (e.target as Element)?.closest("[data-dropdown-button]") != null
      )
        return;

      setSideActive(false);
    });
  } catch {}

  return (
    <div className={font.className}>
      <nav className=" lg:static absolute top-0 w-full left-0">
        <div className="flex justify-between items-center space-x-7 px-6 navbar_shadow">
          <div className="flex justify-center items-center lg:py-0 py-3">
            <Link href="/">
              <Image
                src="/brand-light.png"
                width={90}
                height={90}
                className="dark:hidden"
                alt="logo"
              />
              <Image
                src="/brand-dark.png"
                width={90}
                height={90}
                className="hidden dark:block"
                alt="logo"
              />
            </Link>
          </div>

          <div className="lg:hidden flex justify-center items-center">
            <button
              className={`menu ${sideActive && "opened"}`}
              onClick={() => setSideActive(!sideActive)}
              aria-label="Main Menu"
              data-dropdown-button
            >
              <HamSVG />
            </button>
          </div>

          <div className="hidden lg:flex justify-center items-center space-x-8">
            <button className="dark:text-white [word-spacing:-3px] bg-[var(--true-purple)] tracking-tighter text-[var(--background-rgb)] px-6 py-1 rounded-full">
              Get the design
            </button>
            <ul className="flex justify-center items-center space-x-5">
              {Data?.map((e, i) => {
                return (
                  <Link
                    key={i}
                    className="py-2 disable_navbar_link active_navbar_link"
                    href={e?.link}
                  >
                    <li>{e?.name}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        <Mobile sideActive={sideActive} />
      </nav>
    </div>
  );
}

const HamSVG = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 100 100">
      <path
        className="line dark:stroke-white line1"
        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
      />
      <path className="line dark:stroke-white line2" d="M 20,50 H 80" />
      <path
        className="line dark:stroke-white line3"
        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
      />
    </svg>
  );
};
