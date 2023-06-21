import axios from "axios";
import { tokens } from "../types";
import Cookies from "js-cookie";

export const genToken = async (code: string) => {
  let tokens: tokens = { access_token: "", refresh_token: "", access_expire: 424242, refresh_expire: 424242};
  const codeJSON = { code: code };
  try {
    await axios
      .post(process.env.REACT_APP_TOKEN_GEN || "", codeJSON)
      .then((response) => {
        tokens = response.data.token;
        Cookies.set("token", tokens.access_token);
        Cookies.set("rtoken", tokens.refresh_token);
        Cookies.set("token_expire", tokens.access_expire.toString());
        Cookies.set("rtoken_expire", tokens.refresh_expire.toString());
        return tokens;
      });
  } catch (e: any) {
    console.log(e);
  }
};
