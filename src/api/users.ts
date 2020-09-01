import axios from "axios";

export const getUsers = () => {
  let url = "https://reqres.in/api/users";
  return axios.get(url).then((response) => response.data.data);
};
