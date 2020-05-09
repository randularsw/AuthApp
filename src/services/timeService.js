import axios from "axios";

export function getTimes() {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
}

export function addTime(time) {
  return axios.post("https://jsonplaceholder.typicode.com/posts", time);
}
