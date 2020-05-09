import axios from "axios";

export function getTimes() {
  return axios.get("http://localhost:4000/api/times");
}

export function addTime(time) {
  return axios.post("http://localhost:4000/api/times", time);
}

// export function deleteAll() {
//   return axios.delete("http://localhost:4000/api/times");
// }
