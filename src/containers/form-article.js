import StarRating from "../components/starRating";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { savePost } from "../services/posts";

const FormArticle = (users) => {
  const [listUser, setList] = useState(users.users);
  const [note, setNote] = useState(0);

  async function formSubmit(event) {
    event.preventDefault();

    const post = {
      title: event.target[1].value,
      type: event.target[2].value,
      description: event.target[3].value,
      note: note,
      date: new Date(),
      user_id:event.target[0].value
    };

    console.log(post);
 
    await axios
      .post("http://localhost:3030/api/posts/", post)
      .then((response) => {
        console.log("gg wp");
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <section className="container px-8 pt-2 pb-8 mx-auto bg-secondary rounded-3xl">
      <Link href="/">
        <a className="-ml-2 text-lg hover:underline">Retour</a>
      </Link>
      <div className="p-6">
        <h2 className="mb-10 text-3xl font-bold text-center text-primaryDark">
          Nouvel article
        </h2>
        <form onSubmit={formSubmit} className="w-full max-w-2xl mx-auto">
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="relative inline-block w-full px-3">
              <label className="block mb-2 ml-1 tracking-wide text-primaryDark">
                Auteur
              </label>
              <select className="input" placeholder="Regular input">
                {listUser.map((item) => (
                  <option
                    key={item._id}
                    value={item._id}
                    className="rounded-full"
                  >
                    {item.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center py-3 pr-6 mt-5 pointer-events-none text-primary">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3">
              <label className="block mb-2 ml-1 tracking-wide text-primaryDark">
                Titre de l'oeuvre
              </label>
              <input className="input" id="title" type="text" />
            </div>
          </div>

          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="relative inline-block w-full px-3">
              <label className="block mb-2 ml-1 tracking-wide text-primaryDark">
                Type
              </label>
              <select className="input" placeholder="Regular input">
                <option className="rounded-full">Film</option>
                <option>Série</option>
                <option>Animes</option>
                <option>Livre</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center py-3 pr-6 mt-5 pointer-events-none text-primary">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg>
                
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3">
              <label className="block mb-2 ml-1 tracking-wide text-primaryDark">
                Avis
              </label>
              <textarea
                className="block w-full px-4 py-4 mb-3 leading-relaxed text-gray-700 transition border appearance-none resize-none no-resize bg-secondary border-primary rounded-3xl focus:outline-none focus:bg-bg focus:border-gray-500 h-72"
                id="content"
              ></textarea>
            </div>
          </div>

          <div className="flex flex-wrap mb-10 -mx-3">
            <div className="flex px-3">
              <label className="block mt-1 tracking-wide text-primaryDark">
                Note
              </label>
            </div>
            <div className="flex px-3 -mt-2">
              <div className="flex items-center justify-center">
                <div className="flex items-center mt-2 mb-4">
                  <StarRating getNote={(note) => setNote(note)} />
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex md:justify-center">
            <button className="btn">Enregistrer</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormArticle;
