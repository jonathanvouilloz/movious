import React from 'react';
import MovieListCalendar from '../src/containers/list-movies-months'
import axios from 'axios'
import moment from 'moment'

const AboutPage = ({posts, users, currentMonth}) => {

  return (
    <div>
      <MovieListCalendar users={users} posts={posts} currentMonth={currentMonth} />
    </div>
  );
}

AboutPage.getInitialProps = async (ctx) => {

  let posts;
  const date = new Date();
  const fromDate = new Date(date.getFullYear(), date.getMonth(), 1, 0,0,0);
  const toDate = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23,59,59);
  const currentMonth = moment().get('month')
  const to = moment(toDate).format('YYYY-MM-DD HH:mm:ss');
  const from = moment(fromDate).format('YYYY-MM-DD HH:mm:ss');

  await axios.get("http://localhost:3030/api/posts/", {
      params:{
        from,
        to,
        filter_id:"all"
      }
    }).then((data) => {
      posts = data.data
    }).catch((err) => {
    })
  const usersFetch = await fetch('http://localhost:3030/api/users')
  const users = await usersFetch.json()
  console.log(posts);
  return {
    posts,
    users,
    currentMonth 
  }
}

export default AboutPage
