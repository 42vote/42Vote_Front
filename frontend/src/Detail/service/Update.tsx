import { customAxios } from "../../Lib/customAxios";

export const deleteVote = (docId: string) => {
    return customAxios().delete('/vote/me', { data: { documentId: docId } });
};
  
export const postVote = (docId: string) => {
    return customAxios().post('/vote/me', { documentId: docId });
};

export const deleteDocument = (docId: string) => {
    return customAxios().delete('/document/' + docId);
};