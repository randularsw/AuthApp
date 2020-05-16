import axios from "axios";

export function addUser(data) {
  return axios.post("http://localhost:4000/api/users", data);
}
