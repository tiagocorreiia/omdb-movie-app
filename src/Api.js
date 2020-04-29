const API_URL = 'https://www.omdbapi.com/';
const API_KEY = '8706f948';

const SEARCH_BASE_URL = `${API_URL}?apikey=${API_KEY}&s=`
const RECOMMEND_BASE_URL = `${API_URL}?s=spider+man&apikey=${API_KEY}`

export {
  SEARCH_BASE_URL,
  RECOMMEND_BASE_URL,
  API_URL,
  API_KEY
}