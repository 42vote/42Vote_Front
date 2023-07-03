import { customAxios } from "../../Lib/customAxios";

const postDoc = (title: string, context: string, categoryId: number, goal: number, image: string[], filenames: string[]) => {
    return customAxios().post('/document', {
        title: title,
        context: context,
        categoryId: categoryId,
        goal: goal,
        image: image,
        imageName: filenames
    });
}

export default postDoc;