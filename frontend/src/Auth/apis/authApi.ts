import axios from "axios";
import Cookies from "js-cookie";

export const onRefreshToken = async () => {
  let rtoken = Cookies.get("rtoken");
  try {
    await axios({
        method: 'post',
        url: process.env.REACT_APP_API_URL + '/user/refresh',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            refresh_token: rtoken,
        }
    }).then((response) => {
        Cookies.set("token", response.data.token.access_token);
    });
  } catch (e: any) {
    Cookies.remove("token")
    Cookies.remove("rtoken")
    Cookies.remove("access_token")
    Cookies.remove("refresh_token")
    window.location.reload()
  }
};
