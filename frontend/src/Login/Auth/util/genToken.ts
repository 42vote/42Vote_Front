import axios from "axios";
import { tokens } from "../types";

export const genToken = async(code: string) => {
  let tokens: tokens = { access_token: "", refresh_token: "" };
  const codeJSON = { code: code };
  await axios
    .post(process.env.REACT_APP_TOKEN_GEN || "", codeJSON)
    .then((response) => {
      tokens = response.data.token;
      localStorage.setItem("token", tokens.access_token);
      localStorage.setItem("rtoken", tokens.refresh_token);
      return tokens;
    })
    .catch((error) => {});
  return tokens;
};
