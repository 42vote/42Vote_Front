import { customAxios } from "../../Lib/customAxios"
import { CategoryOptions, ConfirmOptions } from "../logics/Logics";

export const getCategoryInfo = async (categoryId: number) => {
    const res = await customAxios().get('/category/' + categoryId);
    return res.data;
}

export const postCreateCategory = (option: CategoryOptions) => {
    return customAxios().post('/category', {
        title: option.title,
        multipleVote: option.multiple,
        anonymousVote: option.anony,
        voteExpire: option.voteEnd!.format('YYYY-MM-DDTHH:mm:ss.SSS'),
        docExpire: option.tagEnd!.format('YYYY-MM-DDTHH:mm:ss.SSS'),
        goal: Number(option.goal)
    });
}

export const deleteCategoryReq = (categoryId: number) => {
    return customAxios().delete('/category/' + categoryId)
}

export const patchCategory = (option: ConfirmOptions, categoryId: number) => {
    return customAxios().patch('/category/' + categoryId, {
        title: option.title,
        voteExpire: option.voteEnd!.format('YYYY-MM-DDTHH:mm:ss.SSS'),
        docExpire: option.tagEnd!.format('YYYY-MM-DDTHH:mm:ss.SSS'),
        goal: Number(option.goal)
    })
}