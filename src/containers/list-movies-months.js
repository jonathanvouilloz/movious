import Link from "next/link";
import { useState } from "react";

const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Octobre",
  "Novembre",
  "Décembre",
];

const main = ({ list, month }) => {
  const [currentMonth, setMonth] = useState(month);

  const changeMonth = (ev) => {
    ev.target.value == "prev"
      ? setMonth(currentMonth - 1)
      : setMonth(currentMonth + 1);
    console.log(currentMonth);
  };

  return (
    <section className="container p-8 px-8 mx-auto bg-secondary rounded-3xl">
      <div className="grid content-center grid-cols-3 md:grid-cols-5">
        <div className="col-span-1 text-center md:text-right md:col-span-2">
          <button
            className="focus:outline-none"
            value="prev"
            onClick={(ev) => changeMonth(ev)}
          >
            <svg
              className="w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        <h2 className="col-span-1 -mt-1 text-xl font-bold text-center">
          {months[currentMonth] || "Rien"}
        </h2>
        <div className="col-span-1 text-center md:text-left md:col-span-2">
          <button
            className="focus:outline-none"
            value="next"
            onClick={(ev) => changeMonth(ev)}
          >
            <svg
              className="w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <table className="min-w-full table-auto">
        <thead className="text-primaryLighter">
          <tr>
            <th className="px-6 py-3 leading-4 tracking-wider text-left ">
              Auteur
            </th>
            <th className="hidden px-6 py-3 leading-4 tracking-wider text-left lg:table-cell">
              Type
            </th>
            <th className="px-6 py-3 leading-4 tracking-wider text-left">
              Titre
            </th>
            <th className="hidden px-6 py-3 leading-4 tracking-wider text-left lg:table-cell">
              Note
            </th>
            <th className="px-6 py-3 leading-4 tracking-wider text-left"></th>
          </tr>
        </thead>
        <tbody className="text-base text-left text-primaryDark">
          {list.map((post) => (
            <tr key={post._id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b">
                <div className="flex items-center">
                  <div>
                    <div className="leading-5 text-gray-800">
                      Michel Platini
                    </div>
                  </div>
                </div>
              </td>
              <td className="hidden px-6 py-4 text-sm leading-5 whitespace-no-wrap border-b lg:table-cell">
                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full opacity-50 bg-tagGreen"
                  ></span>
                  <span className="relative text-sm">{post.type}</span>
                </span>
              </td>
              <td className="px-6 py-4 leading-5 whitespace-normal whitespace-no-wrap border-b">
                {post.title}
              </td>
              <td className="hidden px-6 py-4 font-bold leading-5 whitespace-no-wrap border-b text-primaryDarker lg:table-cell">
                {post.note} / 10
              </td>
              <td className="py-4 text-sm leading-5 text-right whitespace-no-wrap border-b lg:px-6">
                <Link href={`/${post._id}`}>
                  <button className="btn">
                    <span className="hidden md:inline-block">Lire l'avis</span>
                    <span className="inline-block md:hidden">Lire</span>
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default main;
