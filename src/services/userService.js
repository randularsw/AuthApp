import axios from "axios";

export async function addUser(data) {
  try {
    const user = await axios.post("http://localhost:4000/api/users", data);
    localStorage.setItem("token", user.headers.token);
    return user.data;
  } catch (ex) {
    console.log("exception", ex);
  }
}
export default {
  addUser
};