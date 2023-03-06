import axios from "axios";
import authHeader from "./auth-header";

const api = "http://localhost:5000/test/";

const getPublicContent = () => {
  return axios.get(api + "public");
};

const getUserBoard = () => {
  return axios.get(api + "userpanel", {
    headers: authHeader(),
  });
};

const getEditorBoard = () => {
  return axios.get(api + "editorpanel", {
    headers: authHeader(),
  });
};

const getSupervisorBoard = () => {
  return axios.get(api + "supervisorpanel", {
    headers: authHeader(),
  });
};

const getPrincipalBoard = () => {
  return axios.get(api + "principalpanel", {
    headers: authHeader(),
  });
};

const getAdminBoard = () => {
  return axios.get(api + "adminpanel", {
    headers: authHeader(),
  });
};

const UserService = {
  getUserBoard,
  getEditorBoard,
  getSupervisorBoard,
  getPrincipalBoard,
  getAdminBoard,
};

export default UserService;
