
const baseURL = "http://127.0.0.1:8000/api/";
export function fetcher(url, request_method, data){
	return fetch(baseURL + url, {
		method: request_method,
		headers: {
		"Authorization":localStorage.getItem('access_token')?'JWT '+localStorage.getItem('access_token'):null,
			"Accept": "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((res) => res.json())
		.catch((error) => {
			console.error("Error:", error);
		});
};




export function fetcher1 (url) {
	return fetch(baseURL + url, {
		method: 'GET',

	})
		.then((res) => res.json())
		.catch((error) => {
			console.error("Error:", error);
		});
};
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

// const instance= axios.create({
// 	baseURL:"http://127.0.0.1:8000/api/",
// 	timeout:5000,
// 	headers:{
// 		"Authorization": localStorage && localStorage.getItem('access_token')?'JWT '+localStorage.getItem('access_token'):null
// 	},
// 	'Content-Type': 'application/json',
// });
// export default instance;
