import axios from "axios";

export async function addUser(data) {
  const { headers } = await axios.post("http://localhost:4000/api/users", data);
  localStorage.setItem("token", headers.token);
}
