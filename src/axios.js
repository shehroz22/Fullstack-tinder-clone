import axios from "axios";
const instance = axios.create({
  baseURL: "https://tinder-2-backend-cl.herokuapp.com",
});

export default instance;
