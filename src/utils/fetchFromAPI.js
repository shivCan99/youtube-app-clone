import axios from 'axios'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'; 

const options = {
  url: BASE_URL,
  params: {
   maxResults:'100'
  },
  headers: {
    'X-RapidAPI-Key': '26f26f6ff5msh61ac6c3c0269acap142bd3jsnffa19777c9ce',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export const fetchFromAPI = async (url)=>{
    const {data} =await axios.get(`${BASE_URL}/${url}`, options);
    return data;    
}