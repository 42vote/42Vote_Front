import { customAxios } from "../../Lib/customAxios";

const getCategory = () => {
    return customAxios().get('/category', {params: {expired: false}});
}

export default getCategory;