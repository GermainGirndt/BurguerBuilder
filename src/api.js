import axios from "axios";

const api = axios.create({
  baseURL: "https://react-my-burguer-3127f.firebaseio.com/",
});

export default api;
