import { NavigateFunction } from "react-router-dom";
import { Document } from "../../Detail/interface/DetailInterface";
import Swal from "sweetalert2";
import postDoc from "../service/PostDoc";
import patchDoc from "../service/PatchDoc";

const getCheckedCategory = () => {
    const categorys = document.getElementsByName('category') as NodeListOf<HTMLInputElement>;
    let checkdCategoryId = -1;

    categorys.forEach((category) => {
        if (category.parentElement?.classList.contains('checked'))
            checkdCategoryId = Number(category.value);
    });

    return checkdCategoryId;
}

const convertBase64 = (file: FileList | null, files: string[]) => {
    return new Promise<string>((resolve) => {
        if (file && file.length > 0) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file[0]);
            fileReader.onloadend = () => {
                resolve(fileReader.result as string);
            }
        } else
            resolve('');
    });
}

const getImageFiles = async (data: Document | undefined) => {
    const labels = document.querySelectorAll(".file-field label") as NodeListOf<HTMLLabelElement>;
    let base64Files: string[] = [];
    let idx = 0;

    for (const label of Array.from(labels)) {
        if ((label.nextSibling as HTMLDivElement).classList.contains("active")) {
            const base64 = await convertBase64((label.children[0] as HTMLInputElement).files, base64Files);
            if (base64 === '' && data)
                base64Files.push(data.image[idx]);
            else if (base64 !== '')
                base64Files.push(base64);
        }
        idx++;
    };

    return base64Files;
}

const submitDoc = async (event: React.MouseEvent<HTMLButtonElement>, docId: string, title: string, goal: string, data: Document | undefined, nav: NavigateFunction) => {
    event.preventDefault();
    const docTitle = title.trim();
    const description = document.getElementById('text-area') as HTMLTextAreaElement;
    const goalInput = Number(goal);
    const checkedCategoryId = getCheckedCategory();
    const base64Files = await getImageFiles(data);

    if (docTitle.length === 0 || docTitle === 'New Post Title')
        Swal.fire('글 제목을 입력해주세요.')
    else if (checkedCategoryId === -1)
        Swal.fire('카테고리를 선택해주세요.');
    else if (goalInput > 1000 || goalInput< 1)
        Swal.fire('목표치는 1 ~ 1000 범위 숫자여야 합니다.');
    else if (description.value.length < 10)
        Swal.fire('설명글을 10자 이상 적어주세요.');
    else if (base64Files.length === 0)
        Swal.fire('사진을 최소 1장 등록해주세요.');
    else {
        Swal.fire({
            text: '글을 등록하시겠습니까?',
            showCancelButton: true,
            confirmButtonColor: 'white',
            cancelButtonColor: '#383838',
            confirmButtonText: 'OK'
        }).then((res) => {
            if (res.isConfirmed) {
                (event.target as HTMLButtonElement).disabled = true;
                if (data)
                    patchDoc(docId, docTitle, description.value, goalInput, base64Files).then(() => nav('/main'))
                    .catch(() => nav('/notfound'));
                else
                    postDoc(docTitle, description.value, checkedCategoryId, goalInput, base64Files).then(() => nav('/main'));
            }
        });
    }
}

export default submitDoc;