import { customAxios } from "../../Lib/customAxios";

export const deleteVote = (docId: string) => {
    return customAxios().delete('/vote/me', { data: { documentId: Number(docId) } });
};
  
export const postVote = (docId: string) => {
    return customAxios().post('/vote/me', { documentId: Number(docId) });
};

export const deleteDocument = (docId: string) => {
    return customAxios().delete('/document/' + docId);
};