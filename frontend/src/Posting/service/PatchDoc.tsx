import { customAxios } from "../../Lib/customAxios";

const patchDoc = (docId: string, title: string, context: string, goal: number, image: string[]) => {
    return customAxios().patch('/document/' + docId, {
        title: title,
        context: context,
        goal: goal,
        image: image
    });
}

export default patchDoc;