import axios from 'axios'
import React, { useState, useEffect } from 'react';
import moment from 'moment'
import Main from '../src/containers/list-movies-months'

const AboutPage = ({stars}) => {

  const [list, setList] = useState(stars);
  const [currentMonth, setMonth] = useState(1);

  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    /*let test = list[2].date
    const myMomentObject = moment(test, 'YYYY-MM-DD')
    const month = myMomentObject.locale('fr').format('MMMM');
    console.log(month);*/
    const filterMonth = 0;
    let tableauFormaté = stars.map(obj => {
      const myMomentObject = moment(obj.date, 'YYYY-MM-DD')
      const d = myMomentObject.month()
      const month = myMomentObject.locale('fr').format("MMMM");
      return {...obj, month};
    });  
    console.log(tableauFormaté);
  });

  const deletePost = async ev => {
    await axios.delete(`http://localhost:3030/api/stuff/${ev}`)
    .then(response => {
      const newList = list.filter((item) => item._id !== ev);
      setList(newList)
    })
  };

  return (
    <div>
      <Main list={list} month={currentMonth} />
    </div>
  );
}

AboutPage.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:3030/api/stuff')
  const json = await res.json()
  return { stars: json }
}

export default AboutPage
