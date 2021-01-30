import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import PostRow from "./post_row";
import Dropdown from "@components/dropdown";
import moment from 'moment'


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

const MovieListCalendar = ({ posts, users, currentMonth }) => {
  const [list, setList] = useState(posts);
  const [activeMonth, setMonth] = useState(currentMonth);
  const [defaultFilter, setDefaultValue] = useState({id:"all", name:"Tout le monde"});


  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    loadNewMonth()
  }, [activeMonth]);

  const changeMonth = async(ev) => {
    await ev.target.value == "prev"
      ? setMonth(activeMonth - 1)
      : setMonth(activeMonth + 1);
  };

  const loadNewMonth = async() => {
    const date = new Date();
    const fromDate = new Date(date.getFullYear(), activeMonth, 1);
    const toDate = new Date(date.getFullYear(), activeMonth + 1, 0);    
    const to = moment(toDate).format('YYYY-MM-DD');
    const from = moment(fromDate).format('YYYY-MM-DD');
    await axios.get("http://localhost:3030/api/posts/", {
      params:{
        from,
        to
      }
    }).then((data) => {
      console.log(data.data);
      if(data.data.length === 0){
        setList([])
      }else{
        setList(data.data)
      }
    }).catch((err) => {
    })
  }

  const filterList = async(val) => {
    const date = new Date();
    const fromDate = new Date(date.getFullYear(), activeMonth, 1);
    const toDate = new Date(date.getFullYear(), activeMonth + 1, 0);    
    const to = moment(toDate).format('YYYY-MM-DD');
    const from = moment(fromDate).format('YYYY-MM-DD');
    await axios.get("http://localhost:3030/api/posts/", {
      params:{
        from,
        to,
        filter_name:val.name
      }
    }).then((data) => {
      console.log(data);
      if(data.data.length === 0){
        setList([])
      }else{
        setList(data.data)
      }
    }).catch((err) => {
    })
  }

  const deletePost = async (id) => {
    console.log(id);
    await axios
      .delete(`http://localhost:3030/api/posts/${id}`)
      .then((response) => {
        console.log(response);
      });
  };

  const sortTable = async(field) => {
    const date = new Date();
    const fromDate = new Date(date.getFullYear(), activeMonth, 1);
    const toDate = new Date(date.getFullYear(), activeMonth + 1, 0);    
    const to = moment(toDate).format('YYYY-MM-DD');
    const from = moment(fromDate).format('YYYY-MM-DD');
    await axios.get("http://localhost:3030/api/posts/", {
      params:{
        from,
        to,
        sort:field.target.id
      }
    }).then((data) => {
      console.log(data);
      if(data.data.length === 0){
        setList([])
      }else{
        setList(data.data)
      }
    }).catch((err) => {
    })
  }

  const onChangeDropDown = () => {};

  return (
    <section className="container p-8 px-8 mx-auto bg-secondary rounded-3xl">
      <div className="grid content-center grid-cols-3 mt-4 mb-8 md:grid-cols-5">
        <div className="col-span-1 text-center md:text-right md:col-span-2">
          <button
            className="focus:outline-none"
            value="prev"
            onClick={(ev) => changeMonth(ev)}
          >
            <svg
              pointerEvents="none"
              className="w-10"
              xmlns="http://www.w3.org/2000/svg"
              transform="translate(0, 0) rotate(55 0 0)"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        <h2 className="col-span-1 pt-1 text-2xl font-bold text-center">
          {months[activeMonth] || "Rien"}
        </h2>
        <div className="col-span-1 text-center md:text-left md:col-span-2">
          <button
            className="focus:outline-none"
            value="next"
            onClick={(ev) => changeMonth(ev)}
          >
            <svg
              className="w-10"
              pointerEvents="none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid content-center grid-cols-1 mx-auto mb-8 md:grid-cols-6">
        <div className="col-span-1 pl-2 text-right md:pl-6 md:text-left md:col-span-2">
          <Dropdown data={users} onChange={onChangeDropDown} defaultValue={defaultFilter} onChangeFilter={(filter) => filterList(filter)} />
        </div>
        <div className="col-span-1 text-center md:col-span-2">
          <div className="flex items-center bg-white rounded-full shadow-md">
            <input
              className="w-full px-4 py-3 leading-tight text-gray-700 rounded-l-full focus:outline-none"
              id="search"
              type="text"
              placeholder="Rechercher"
            />
            <div>
              <button className="flex items-center justify-center w-12 h-6 p-2 rounded-full text-primary focus:outline-none">
                <svg
                  className="w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 text-right md:col-span-2"></div>
      </div>
      <div className="h-1 mx-5 mb-8 border-gray-400 border-t-1" />
      {list.length == 0 ? 
      <div className="items-center w-full mx-auto">
        <h2 className="mb-6 text-center">Aucun enregistrement pour ce mois</h2>
        <div className="text-center">
        <Link href="/new-article">
            <button className="btn">Ecrire un article</button>
          </Link>
        </div>
        
      </div>
      :
      <table className="min-w-full table-auto">
        <thead className="text-primaryLighter">
          <tr>
            <th id="author" onClick={(field) => sortTable(field)} className="px-6 py-3 leading-4 tracking-wider text-left ">
              Auteur
            </th>
            <th id="type" onClick={(field) => sortTable(field)} className="hidden px-6 py-3 leading-4 tracking-wider text-left lg:table-cell">
              Type
            </th>
            <th id="title" onClick={(field) => sortTable(field)} className="px-6 py-3 leading-4 tracking-wider text-left">
              Titre
            </th>
            <th id="note" onClick={(field) => sortTable(field)} className="hidden px-6 py-3 leading-4 tracking-wider text-left lg:table-cell">
              Note
            </th>
            <th className="px-6 py-3 leading-4 tracking-wider text-left"></th>
          </tr>
        </thead>
        <tbody className="text-base text-left text-primaryDark">
          {list.map((postObject, index) => (
            <PostRow key={index} post={postObject} />
          ))}
        </tbody>
      </table>
      }
      
    </section>
  );
};

export default MovieListCalendar;
