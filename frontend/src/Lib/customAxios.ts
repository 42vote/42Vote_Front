import axios, { AxiosInstance } from 'axios';
import Cookies from "js-cookie";

export const customAxios = () => {
    const token = Cookies.get('token');
    const rtoken = Cookies.get('rtoken');
    const baseAxios: AxiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })

    const maxRetry = 2;

    const errorHandler = async (error: any) => {
        error.config.retryCount = error.config.retryCount ?? 0;
        const overRetry = error.config.retryCount < maxRetry;
        if (error.response && error.response.status === 401) {

            const res = await axios({
                method: 'post',
                url: process.env.REACT_APP_API_URL + '/user/refresh',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    refresh_token: rtoken,
                } 
            });
            if (res.status === 201 && overRetry) {
                Cookies.remove("token");
                Cookies.set("token", res.data.token.access_token);
                error.config.retryCount += 1;
                error.config.headers = {
                    'Authorization': `Bearer ${res.data.token.access_token}`,
                }
                return baseAxios.request(error.config);
            }
            if (!overRetry) {
                Cookies.remove("token");
                Cookies.remove("rtoken");
            }

        }
        const errorMsg = (error.message === "Network Error") ? {
            response: {
                status: 500,
                data: { message: "Network Error" }
            }
        } : { response: { 
                data: error.response.data,
                status: error.response.status,
            }};
        return Promise.reject(errorMsg);
    }

    baseAxios.interceptors.response.use(
        (response: any) => {
            return response;
        },
        error => errorHandler({ ...error })
    );

    return baseAxios;
}