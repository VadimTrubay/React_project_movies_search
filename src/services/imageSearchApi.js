import axios from "axios";

const API_KEY = "xSOm-Z_unIVqC8MgDg2y9mEie0lF4PPcCIwRyGMZNsw";

const getImages = (query, page = 1) => {
  const response = axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${query}&page=${page}&orientation=landscape`
  );
  return response;
};

export default getImages;
