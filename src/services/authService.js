import axios from "axios";
import JwtDecode from "jwt-decode";

export async function login(data) {
  try {
    const user = await axios.post(
      "http://localhost:4000/api/users/login",
      data
    );
    localStorage.setItem("token", user.headers.token);
    // console.log(user.data);
    return user.data;
  } catch (ex) {
    console.log("exception", ex);
  }
}

export function logout() {
  localStorage.removeItem("token");
}

export async function getCurrentUser() {
  try {
    const userId = JwtDecode(localStorage.getItem("token"))._id;
    const currentUser = await axios.get(
      `http://localhost:4000/api/users/${userId}`
    );
    return currentUser;
  } catch (ex) {
    console.log("exception", ex);
  }
}

export default {
  login,
  logout,
  getCurrentUser,
};
