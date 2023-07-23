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
          <div className="flex justify-center flex-col items-center absolute w-screen top-[70px] left-0 bg-[var(--background-rgb)]">
            <ul
              data-dropdown
              className="flex w-full px-4 flex-col justify-center items-center py-5"
            >
              {Data?.map((e, i) => {
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
            <div className="flex justify-center items-center w-full px-7 mb-8">
              <button className="dark:text-white tracking-tighter [word-spacing:-3px] bg-[var(--true-purple)] text-[var(--background-rgb)] w-full px-6 py-1 rounded-full">
                Get the design
              </button>
            </div>
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
            {/* */}
            <div className="w-full h-screen overflow-hidden top-14 left-0 bg-[#000] dark:bg-white opacity-25"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Mobile;
