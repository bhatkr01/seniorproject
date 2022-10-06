import axios from "axios"
import {useEffect,useState} from "react";


// const instance= axios.create({
// 	baseURL:"http://127.0.0.1:8000/api/",
// 	timeout:1000,
// 	headers:{
// 		"Authorization":localStorage.getItem('access_token')?'JWT '+localStorage.getItem('access_token'):null
// 	},
// 	'Content-Type': 'application/json',
// 	'accept':'application/json',
// });
// export default instance;

// export default async function fetch(url, data) {
// 	useEffect(() => {
// 	const [access, setAccess]=useState("");
// 	  const acc= localStorage.getItem('access_token')?'JWT '+localStorage.getItem('access_token'):null
// 		setAccess(acc)
// 	}, [])

// 	response=await instance.post(url, data)
// 		return response
// }


