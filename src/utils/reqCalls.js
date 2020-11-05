import axios from "axios";

export async function reqPost(url, body, token) {
  const header = token
    ? { headers: { Authorization: `Bearer ${token}` } }
    : null;
  const URL = `${process.env.REACT_APP_URL}${url}`;

  try {
    const res = await axios.post(URL, body, header);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function reqGet(url, token) {
  const header = token
    ? { headers: { Authorization: `Bearer ${token}` } }
    : null;
  const URL = `${process.env.REACT_APP_URL}${url}`;

  try {
    const res = await axios.get(URL, header);
    return res;
  } catch (error) {
    console.log(error);
  }
}
