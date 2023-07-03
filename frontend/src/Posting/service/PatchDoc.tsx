import { customAxios } from "../../Lib/customAxios";

const patchDoc = (docId: string, title: string, context: string, goal: number, image: string[], filenames: string[]) => {
    return customAxios().patch('/document/' + docId, {
        title: title,
        context: context,
        goal: goal,
        image: image,
        imageName: filenames
    });
}

export default patchDoc;