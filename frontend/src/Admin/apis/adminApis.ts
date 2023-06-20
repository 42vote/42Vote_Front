import { customAxios } from "../../Lib/customAxios"
import { CategoryOptions, ConfirmOptions } from "../types";

export const getCategoryInfo = async (categoryId: number) => {
    if (categoryId) {
        const res = await customAxios().get('/category/' + categoryId);
        return res.data;
    } else
        return null;
}

export const postCreateCategory = (option: CategoryOptions) => {
    return customAxios().post('/category', {
        title: option.title,
        multipleVote: option.multiple,
        anonymousVote: option.anony,
        voteExpire: option.voteEnd!.format('YYYY-MM-DDT23:59:59'),
        docExpire: option.tagEnd!.format('YYYY-MM-DDT23:59:59'),
        goal: Number(option.goal)
    });
}

export const deleteCategoryReq = (categoryId: number) => {
    return customAxios().delete('/category/' + categoryId)
}

export const patchCategory = (option: ConfirmOptions, categoryId: number) => {
    return customAxios().patch('/category/' + categoryId, {
        title: option.title,
        voteExpire: option.voteEnd!.format('YYYY-MM-DDT23:59:59'),
        docExpire: option.tagEnd!.format('YYYY-MM-DDT23:59:59'),
        goal: Number(option.goal)
    })
}