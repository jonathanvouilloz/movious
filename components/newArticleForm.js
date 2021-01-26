import StarRating from "../components/starRating";
import Link from 'next/link'
import {useState} from 'react'
import axios from 'axios'

const FormArticle = () => {

  const [note, setNote] = useState(0)

   async function formSubmit(event){
    event.preventDefault();
    const post = {
      title: event.target[1].value,
      description: event.target[2].value,
      note: note,
      date: new Date(),
      type: "Film",
      userId: 1,
    };
    await axios
      .post("http://localhost:3030/api/stuff", post)
      .then((response) => {
        console.log(response);
      });
      console.log(note);
  };

  const getNote = (val) => {
    setNote(val)
  }

  return (
    <section>
    <Link href="/"><a className="font-bold hover:underline text-lg">Retour</a></Link>
    <div className="p-6">
    <h2 className="text-3xl text-center mb-10 font-bold text-primaryDark">Nouvel article</h2>
    <form onSubmit={formSubmit} className="w-full max-w-lg mx-auto">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block tracking-wide text-gray-700 mb-2 ml-1">
            Auteur
          </label>
          <input
            className="appearance-none block w-full bg-secondary text-gray-700 border border-primary rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200"
            id="author"
            type="text"
          />
          <p className="text-primary text-xs italic">
            Please fill out this field.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block tracking-wide text-gray-700 mb-2 ml-1">
            Titre de l'oeuvre
          </label>
          <input
            className="appearance-none block w-full bg-secondary text-gray-700 border border-primary rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500"
            id="title"
            type="text"
          />
          <p className="text-gray-600 text-xs italic">
            Some tips - as long as needed
          </p>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block tracking-wide text-gray-700 mb-2 ml-1">
            Avis
          </label>
          <textarea
            className="no-resize appearance-none block w-full bg-secondary text-gray-700 border border-primary rounded-3xl py-4 px-4 mb-3 leading-relaxed focus:outline-none focus:bg-gray-200 focus:border-gray-500 h-72 resize-none"
            id="content"
          ></textarea>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3">
        <div className="flex px-3">
          <label className="block tracking-wide text-gray-700 mt-1">
            Note
          </label>
        </div>
        <div className="flex px-3 -mt-2">
          <div className="flex justify-center items-center">
            <div className="flex items-center mt-2 mb-4">
              <StarRating getNote={getNote} />
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex md:justify-center mt-4">
        <button className="inline-block px-8 py-3 text-xl leading-6 text-center transition bg-transparent border-2 border-primary rounded-full bg-primary ripple hover:bg-transparent text-secondary hover:text-primary focus:outline-none">
          Enregistrer
        </button>
      </div>
    </form>
    </div>
    </section>
  );
};

export default FormArticle;
