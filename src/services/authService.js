import axios from "axios";

export function login(data) {
  return axios.post("http://localhost:4000/api/users/login", data);
}
