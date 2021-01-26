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
  };

  return (
    <section className="text-primary">
      <div className="flex">
        <button
          value="prev"
          onClick={(ev) => changeMonth(ev)}
          className="flex-1 text-right"
        >
          Précédent
        </button>
        <h2 className="mb-3 text-xl font-bold text-center flex-auto">
          {months[currentMonth]}
        </h2>
        <button
          value="next"
          onClick={(ev) => changeMonth(ev)}
          className="flex-1 text-left"
        >
          Suivant
        </button>
      </div>
      <table className="min-w-full ">
        <thead className="text-primaryLighter">
          <tr>
            <th className="px-6 py-3 text-left leading-4 tracking-wider ">
              Auteur
            </th>
            <th className="px-6 py-3 text-left  leading-4 tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left  leading-4 tracking-wider">
              Nom de l'oeuvre
            </th>
            <th className="px-6 py-3 text-left  border-black-100leading-4 tracking-wider">
              Note
            </th>
            <th className="px-6 py-3 text-left  leading-4 tracking-wider"></th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="text-left text-base text-primaryDark">
          {list.map((post) => (
            <tr key={post._id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b">
                <div className="flex items-center">
                  <div>
                    <div className="leading-5 text-gray-800">#1</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b  text-sm leading-5">
              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  ></span>
                  <span className="relative text-sm">{post.type}</span>
                </span>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b leading-5">
                {post.title}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b leading-5 font-bold text-primaryDarker">
                {post.note} / 10
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-right border-b  text-sm leading-5">
                <Link href={`/${post._id}`}>
                  <button className="inline-block px-6 py-2 leading-6 text-center transition bg-transparent border-2 border-primary rounded-full hover:bg-primary ripple hover:text-secondary text-primary focus:outline-none font-bold">
                    Voir l'avis
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
