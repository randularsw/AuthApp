import axios from "axios";

export async function login(data) {
  const { headers } = await axios.post(
    "http://localhost:4000/api/users/login",
    data
  );
  localStorage.setItem("token", headers.token);
}

export function logout() {
  localStorage.removeItem("token");
}

export function gwtCurrentUser() {}

export default {
  login,
  logout,
  gwtCurrentUser,
};
