import axios from "axios";
const api = "http://localhost:7000/";

const register = (fname, lname, username, email, password) => {
  return axios.post(api + "signup", {
    fname,
    lname,
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(api + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
