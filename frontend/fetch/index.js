
const baseURL = process.env.baseURL;
export function fetcher(url, request_method, content_type='', data){
	if (request_method=="GET"){
		return get_fetcher(url)
	}
	else if (request_method=="POST"){
		return post_fetcher(url,request_method, content_type, data)
	}
	else if (request_method=="PATCH"){
		return patch_fetcher(url,request_method, content_type, data)
	}
	else if (request_method=="DELETE"){
		return del_fetcher(url,request_method)
}
}

function post_fetcher (url,request_method,content_type, data){
	// !content_type? console.log("true"):console.log("false")
	// 	var header= 
	// console.log(header)
	if (url=="login/"){
	return fetch(baseURL + url, {
		method: request_method,
		headers: 
			 content_type!='' ?
			{"Authorization":localStorage.getItem('access_token')?'JWT '+localStorage.getItem('access_token'):null,
			"Accept": "application/json",
			"Content-Type": content_type,}:
			{
		"Authorization":localStorage.getItem('access_token')?'JWT '+localStorage.getItem('access_token'):null,
			"Accept": "application/json",
		}
,	
		// body: JSON.stringify(data),
		body: data,
	})
		.then((res) => res.json())
		.catch((error) => {
			console.error("Error:", error);
		});
	}
	else{
	return fetch(baseURL + url, {
		method: request_method,
		headers: 
		{
			"Accept": "application/json",
			"Content-Type": content_type,}
,	
		// body: JSON.stringify(data),
		body: data,
	})
		.then((res) => res.json())
		.catch((error) => {
			console.error("Error:", error);
		});
	}
};



function patch_fetcher (url,request_method,content_type, data){
	return fetch(baseURL + url, {
		method: request_method,
		// body: JSON.stringify(data),
		body: data,
 headers: {
      'Content-Type': content_type
    },
			 
	})
		.then((res) => res.json())
		.catch((error) => {
			console.error("Error:", error);
		});
};

export function get_fetcher (url) {
	return fetch(baseURL + url, {
		method: 'GET',

	})
		.then((res) => res.json())
		.catch((error) => {
			console.error("Error:", error);
		});

};


function del_fetcher (url,request_method){
	return fetch(baseURL + url, {
		method: request_method,
		headers: 
			{
		"Authorization":localStorage.getItem('access_token')?'JWT '+localStorage.getItem('access_token'):null,
			"Accept": "application/json",
		}
,	
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
