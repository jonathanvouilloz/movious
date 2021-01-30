import Link from "next/link";
import { useState, useEffect } from "react";
import cn from "classnames";
import Image from "next/image";
import Router from 'next/router'

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [activeMenu, setActive] = useState('/')

  useEffect(() => {
    setActive(Router.asPath)
  })

  return (
    <header className="bg-bg">
      <div className="grid items-center justify-between grid-cols-8 px-6 pt-6 mx-auto md:grid-cols-3 lg:container md:px-6">
        <div className="flex items-center col-span-2 md:col-span-1">
        <Link href="/">
          <h2 className="text-2xl font-bold cursor-pointer md:text-3xl">Movious</h2>
          </Link>
        </div>
        
        <div className="flex col-span-4 mx-auto md:col-span-1">
          <Link href="/new-article">
            <button className="btn">Nouvel article</button>
          </Link>
        </div>
        <div className="flex col-span-2 ml-auto md:col-span-1">
        <ul
          className=
            "flex-col hidden w-full text-lg md:flex-row md:items-center md:justify-items-end md:flex"
        >
          {[
            { title: "Home", route: "/" },
            { title: "Nouvel article", route: "/new-article" },
            { title: "About", route: "/about" },
          ].map(({ route, title }) => (
            <li className={cn("mt-3 md:mt-0 md:ml-6 border-t-2 hover:border-primary transition", activeMenu == route ? 'border-primary text-primary':'border-bg')} key={title}>
              <Link href={route}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="rounded md:hidden focus:outline-none"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        > 
          <svg
            className={cn(
              "w-10 ease-linear ",
              mobileMenuIsOpen ? `animate-roll` : ``
            )}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d={!mobileMenuIsOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
            />
            <title>Menu</title>
          </svg>
        </button>
        </div>
        <ul
          className={cn(
            "md:hidden text-center col-span-8 mt-4 bg-secondary rounded-2xl",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {[
            { title: "Home", route: "/" },
            { title: "About", route: "/about" },
          ].map(({ route, title }) => (
            <li className="py-2 mx-1 my-1 transition duration-300 hover:bg-primary hover:text-secondary rounded-xl" key={title}>
              <Link href={route}>
                <a className="block">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
