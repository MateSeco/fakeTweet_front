import axios from "axios";

export async function reqCall(method, path, body, token) {
  const headers = token
    ? { headers: { Authorization: `Bearer ${token}` } }
    : null;
  const URL = `${process.env.REACT_APP_URL}${path}`;
  const data = body ? body : null;

  try {
    const res = await axios({
      method: method,
      url: URL,
      data: data,
      headers: headers,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
}
