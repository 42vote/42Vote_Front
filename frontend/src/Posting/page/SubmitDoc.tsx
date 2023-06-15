import { NavigateFunction } from "react-router-dom";
import Swal from "sweetalert2";
import postDoc from "../service/PostDoc";

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
    return new Promise<void>((resolve) => {
        if (file && file.length > 0) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file[0]);
            fileReader.onloadend = () => {
                files.push(fileReader.result as string);
                resolve();
            }
        } else
            resolve();
    });
}

const getImageFiles = async () => {
    const file1 = (document.getElementById('file1') as HTMLInputElement).files;
    const file2 = (document.getElementById('file2') as HTMLInputElement).files;
    const file3 = (document.getElementById('file3') as HTMLInputElement).files;
    let base64Files: string[] = [];

    await convertBase64(file1, base64Files);
    await convertBase64(file2, base64Files);
    await convertBase64(file3, base64Files);

    return base64Files;
}

const submitDoc = async (event: React.MouseEvent<HTMLButtonElement>, title: string, nav: NavigateFunction) => {
    event.preventDefault();
    const docTitle = title.trim();
    const description = document.getElementById('text-area') as HTMLTextAreaElement;
    const goalInput = Number((document.getElementById('goal') as HTMLInputElement).value);
    const checkedCategoryId = getCheckedCategory();
    const base64Files = await getImageFiles();

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
                postDoc(docTitle, description.value, goalInput, checkedCategoryId, base64Files).then(() => nav('/main'));
            }
        });
    }
}

export default submitDoc;