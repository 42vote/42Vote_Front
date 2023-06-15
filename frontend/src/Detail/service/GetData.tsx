import { customAxios } from "../../Lib/customAxios";
import { StatDataRes } from "../interface/DetailInterface";

export const getDocData = async (docId: number) => {
    const res = await customAxios().get('/document/' + docId);
    return res.data;
}

export const getStatData = (docId: number, setEmails: React.Dispatch<React.SetStateAction<string[]>>) => {
    let emails: string[] = [];
    customAxios().get('/vote/participant', {params: {documentId: docId}}).then((res) => {
        res.data.forEach((vote: StatDataRes) => {
            emails.push(vote.user.intraId);
        });
        setEmails(emails);
    });
}