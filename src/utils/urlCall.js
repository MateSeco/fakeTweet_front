import axios from "axios";
import { useSelector } from "react-redux";
const token = useSelector((state) => state.token);

function urlPost(url) {
  axios
    .post(`${process.env.REACT_APP_URL}${url}`, tweet, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      console.log(res);
    });
}
