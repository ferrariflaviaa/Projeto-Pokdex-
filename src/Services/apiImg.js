import axios from 'axios'

const apiImg = axios.create({
  baseURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
});

export default apiImg;