import axios from "axios";
import authService from "../services/authService";

export async function addUser(data) {
  const { headers } = await axios.post("http://localhost:4000/api/users", data);
  localStorage.setItem("token", headers.token);
  authService.setCurrentUser();
}
