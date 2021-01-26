import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="bg-bg text-primary sticky">
      <div className="flex flex-wrap mx-auto justify-around lg:container px-4 py-6 md:flex-no-wrap md:px-6">
        <div className="flex">
          <Link href="/">
            <a className="text-2xl md:text-3xl font-bold ml-3 font-body">
              Movious
            </a>
          </Link>
        </div>

        <div className="flex invisible md:visible">
          <Link href="/">
            <button className="inline-block px-6 py-2 leading-6 text-center transition bg-transparent border-2 border-primary rounded-full bg-primary ripple hover:bg-transparent text-secondary hover:text-primary focus:outline-none">
              Ecrire un article
            </button>
          </Link>
        </div>

        <button
          className="flex items-center px-3 py-2 rounded md:hidden focus:outline-none -mt-2"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <Image
            src="/menu.svg"
            alt="Menu icon"
            width={35}
            height={35}
            priority
          />
        </button>

        <ul
          className={cn(
            "md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {[
            { title: "Home", route: "/" },
            { title: "About", route: "/about" },
          ].map(({ route, title }) => (
            <li
              className="mt-3 md:mt-0 md:ml-6 text-xl text-center"
              key={title}
            >
              <Link href={route}>
                <a className="block hover:underline">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
