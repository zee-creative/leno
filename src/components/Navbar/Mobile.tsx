import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BsTwitter, BsLinkedin, BsFacebook } from "react-icons/bs";
import Data from "@/components/Navbar/Data";

const Mobile = ({ sideActive }: { sideActive: boolean }) => {
  return (
    <AnimatePresence>
      {sideActive && (
        <motion.div
          key="mo_dropdown"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: -50 }}
          exit={{ opacity: 0, y: -100 }}
        >
          <div className="flex justify-center flex-col items-center absolute w-screen top-[50px] left-0 bg-[var(--background-rgb)]">
            <div data-dropdown className="flex w-full flex-col justify-center items-center">
              <ul className="flex w-full px-4 flex-col justify-center items-center py-5">
                {Data?.map((e, i) => {
                  return (
                    <Link
                      key={i}
                      className="w-full py-2 pl-5 disable_navbar_link active_navbar_link dark:hover:border-b-[var(--foreground-rgb)] dar:hover:border-b-[2px]"
                      href={e?.link}
                    >
                      <li className="w-full text-left">{e?.name}</li>
                    </Link>
                  );
                })}
              </ul>
              <div className="flex justify-center items-center w-full px-7 mb-8">
                <button
                  className="button-64 lg:w-auto w-full  rounded-full md:w-full"
                  role="button"
                >
                  <span className="lg:w-auto w-full lg:py-0 text px-7 text-sm py-2 md:w-full md:text-lg font-extrabold rounded-full">
                    Get The Design
                  </span>
                </button>
              </div>
              <div className="flex w-full justify-center items-center space-x-5 pb-5">
                <a href="/" target="_blank" className="px-2 py-2">
                  <BsTwitter size={20} color="#00acee" />
                </a>
                <a href="/" target="_blank" className="px-2 py-2">
                  <BsLinkedin size={20} color="#0077b5" />
                </a>
                <a href="/" target="_blank" className="px-2 py-2">
                  <BsFacebook size={20} color="#3b5998" />
                </a>
              </div>
            </div>
            {/* */}
            <div className="w-full h-screen overflow-hidden top-14 left-0 bg-[var(--foreground-rgb)] dark:bg-[var(--foreground-rgb)] opacity-25"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Mobile;
