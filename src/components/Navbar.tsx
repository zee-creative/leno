import Image from "next/image";
import Link from "next/link";
import { ImSearch } from "react-icons/im";
import { TbMailFilled } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <Link href="/">
            <Image
              src="/brand-light.png"
              width={90}
              height={90}
              alt="Picture of the author"
            />
          </Link>
        </div>
        <div>
          <ul className="flex justify-center items-center space-x-5">
            {linksData?.map((e, i) => {
              return (
                <Link key={i} className="z-10 py-2 disable_navbar_link active_navbar_link" href={e?.link}>
                  <li>{e.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <div className="flex flex-1 justify-center items-center">
            <button className="py-2 rounded-l-full px-3 border-l-2 border-y-2">
              <ImSearch color="black" />
            </button>
            <input
              type="search"
              className="w-3/4 px-2 py-1 rounded-r-full border-r-2 border-y-2"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="px-3">
            <TbMailFilled size={23} />
          </button>
          <button className="px-3">
            <IoMdNotifications size={23} />
          </button>
          <button className="">
            <Image
              src="/profile.jpg"
              width={35}
              height={35}
              className="rounded-full"
              alt="user"
            />
          </button>
        </div>
      </nav>
      <hr className="relative top-[-2px] z-0" />
    </>
  );
}

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
