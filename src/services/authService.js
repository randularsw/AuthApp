import axios from "axios";
import JwtDecode from "jwt-decode";
import { UserContext } from "../contexts/userContext";
import { useContext } from "react";

export async function login(data) {
  const { headers } = await axios.post(
    "http://localhost:4000/api/users/login",
    data
  );
  localStorage.setItem("token", headers.token);
  // setCurrentUser();
}

export function logout() {
  localStorage.removeItem("token");
  // currentUser = null;
}

export async function getCurrentUser() {
  try {
    const userId = JwtDecode(localStorage.getItem("token"))._id;
    const currentUser = await axios.get(`http://localhost:4000/api/users/${userId}`);
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
