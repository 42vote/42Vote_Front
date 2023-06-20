import { customAxios } from "../../Lib/customAxios";

export const deleteVote = (docId: number) => {
    return customAxios().delete('/vote/me', { data: { documentId: docId } });
};
  
export const postVote = (docId: number) => {
    return customAxios().post('/vote/me', { documentId: docId });
};

export const deleteDocument = (docId: number) => {
    return customAxios().delete('/document/' + docId);
};