import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsTwitter, BsLinkedin, BsFacebook } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [sideActive, setSideActive] = useState<boolean>(false);

  try {
    window?.addEventListener("blur", () => setSideActive(false));
    document?.addEventListener("scroll", () => setSideActive(false));

    document?.addEventListener("click", (e: Event) => {
      if (
        (e.target as Element)?.closest("[data-dropdown]") != null ||
        (e.target as Element)?.closest("[data-dropdown-button]") != null
      ) {
        return;
      }

      setSideActive(false);
    });
  } catch {}

  return (
    <>
      <nav className=" lg:static absolute top-0 w-full left-0">
        <div
          style={{
            boxShadow:
              "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
          }}
          className="flex justify-between items-center space-x-7 px-6"
        >
          <div className="flex justify-center items-center lg:py-0 py-3">
            <Link href="/">
              <Image
                src="/brand-light.png"
                width={90}
                height={90}
                alt="Picture of the author"
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
            <button className="bg-[var(--true-purple)] text-[var(--background-rgb)] px-6 py-1 rounded-full">
              Get the design
            </button>
            <ul className="flex justify-center items-center space-x-5">
              {linksData?.map((e, i) => {
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
        <AnimatePresence>
          {sideActive && (
            <motion.div
              key="mo_dropdown"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: -50 }}
              //Specified Exit animation
              exit={{ opacity: 0, y: -100 }}
            >
              <div
                data-dropdown
                className={`${
                  !sideActive && "hidden"
                } flex justify-center flex-col items-center absolute w-screen top-[70px] left-0 bg-[var(--background-rgb)]`}
              >
                <ul className="flex w-full px-4 flex-col justify-center items-center py-5">
                  {linksData?.map((e, i) => {
                    return (
                      <Link
                        key={i}
                        className="w-full py-2 pl-5 disable_navbar_link active_navbar_link"
                        href={e?.link}
                      >
                        <li className="w-full text-left">{e?.name}</li>
                      </Link>
                    );
                  })}
                </ul>
                <div className="flex w-full justify-center items-center space-x-5 pb-5">
                  <button className="px-2 py-2">
                    <BsTwitter size={20} color="#00acee" />
                  </button>
                  <button className="px-2 py-2">
                    <BsLinkedin size={20} color="#0077b5" />
                  </button>
                  <button className="px-2 py-2">
                    <BsFacebook size={20} color="#3b5998" />
                  </button>
                </div>
                <div
                  className={`w-full h-screen overflow-hidden top-14 left-0 bg-[#000] opacity-50 ${
                    !sideActive && "hidden"
                  }`}
                ></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

const HamSVG = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 100 100">
      <path
        className="line line1"
        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
      />
      <path className="line line2" d="M 20,50 H 80" />
      <path
        className="line line3"
        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
      />
    </svg>
  );
};

const linksData = [
  {
    name: "ABOUT",
    link: "/",
  },

  {
    name: "BRANDING",
    link: "/",
  },
  {
    name: "SERVICES",
    link: "/",
  },
  {
    name: "PORTFOLIO",
    link: "/",
  },
  {
    name: "CLIENT",
    link: "/",
  },
  {
    name: "PACKAGES",
    link: "/",
  },
  {
    name: "CONTACT",
    link: "/",
  },
];
