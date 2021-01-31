import moment from 'moment'
import axios from "axios";

const getCurrentMonth = async(activeMonth) => {
    const date = new Date();
    const fromDate = new Date(date.getFullYear(), activeMonth, 1, 0,0,0);
    const toDate = new Date(date.getFullYear(), activeMonth + 1, 0, 23,59,59);    
    const to = moment(toDate).format('YYYY-MM-DD HH:mm:ss');
    const from = moment(fromDate).format('YYYY-MM-DD HH:mm:ss');    
    return {from, to}
}

const filterPosts = async(val, activeMonth) => {
    const {from, to} = await getCurrentMonth(activeMonth)
    console.log("je passe");
    try {
        let res = await axios({
             url: 'http://localhost:3030/api/posts/',
             method: 'get',
             timeout: 8000,
             headers: {
                 'Content-Type': 'application/json',
             },
             params:{
                from,
                to,
                filter_id:val
              }
         })
         if(res.status == 200){
            return res.data
         }    
     }
     catch (err) {
         console.error(err);
     }
}

const sortPosts = async(field, activeMonth, activeFilter) => {
    const {from, to} = await getCurrentMonth(activeMonth)
    try {
        let res = await axios({
             url: 'http://localhost:3030/api/posts/',
             method: 'get',
             timeout: 8000,
             headers: {
                 'Content-Type': 'application/json',
             },
             params:{
                from,
                to,
                sort:field.target.id,
                filter_name:activeFilter
              }
         })
         if(res.status == 200){
            return res.data
         }    
     }
     catch (err) {
         console.error(err);
     }
}

const savePost = async(post) => {
    const {from, to} = await getCurrentMonth(activeMonth)
    try {
        let res = await axios({
             url: 'http://localhost:3030/api/posts/',
             method: 'get',
             timeout: 8000,
             headers: {
                 'Content-Type': 'application/json',
             },
             params:{
                from,
                to,
                sort:field.target.id,
                filter_name:activeFilter
              }
         })
         if(res.status == 200){
            return res.data
         }    
     }
     catch (err) {
         console.error(err);
     }
}

export {filterPosts, sortPosts, getCurrentMonth, savePost}