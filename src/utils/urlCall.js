/* import axios from "axios";
import { useSelector } from "react-redux";


function urlPost(url) {
  const token = useSelector((state) => state.token);
  axios
    .post(`${process.env.REACT_APP_URL}${url}`, tweet, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      console.log(res);
    });
}
 */
