import Swal from "sweetalert2";
import { deleteCategoryReq, getExistUser, patchCategory, postCreateCategory } from "../apis/adminApis";
import { QueryClient } from "@tanstack/react-query";
import { CategoryCreateOptions, CategoryEditOptions, ConfirmOptions } from "../types";

// CategoryInfoBox.tsx
export const handleGoalInput = (e: React.ChangeEvent<HTMLInputElement>, setGoal: React.Dispatch<React.SetStateAction<string>>) => {
    const inputValue = e.target.value === '' ? NaN : Number(e.target.value);

    if (isNaN(inputValue))
        setGoal('');
    else {
        if (inputValue < 1)
            setGoal('1');
        else if (inputValue > 1000)
            setGoal('1000');
        else
            setGoal(e.target.value);
    }
}


// WhiteListDialog.tsx
export const addList = (e: React.FormEvent<HTMLFormElement>, whiteList: Array<string>, setWhiteList: React.Dispatch<React.SetStateAction<Array<string>>>) => {
    e.preventDefault();
    let id = document.getElementById("intraID") as HTMLInputElement || null;
    if (id.value === '')
        return ;
    if (whiteList.find((user) => user === id.value))
        Swal.fire('이미 추가한 사용자입니다.');
    else {
        getExistUser(id.value).then(()=>{
            setWhiteList([...whiteList, id.value]);
            id.value = '';
        }).catch(()=>{
            Swal.fire('존재하지 않는 사용자입니다.');
            id.value = '';
        });
    }
}

export const deleteList = (user: string, whiteList: Array<string>, setWhiteList: React.Dispatch<React.SetStateAction<Array<string>>>) => {
    whiteList.splice(whiteList.indexOf(user), 1);
    setWhiteList([...whiteList]);
}


//CategoryCreate, CategoryDetail
export const confirmInputs = (option: ConfirmOptions) => {
    if (option.title === '')
        Swal.fire('카테고리 이름을 입력해주세요.');
    else if (option.tagEnd === null || option.voteEnd === null)
        Swal.fire('기간을 정확하게 입력해주세요.')
    else if (option.tagEnd.isBefore(option.voteEnd))
        Swal.fire('카테고리 유효 기간은 투표 종료 이후여야 합니다.');
    else if (option.goal === '' || Number(option.goal) === 0)
        Swal.fire('목표치를 입력해주세요.');
    else
        return (true);
}

export const createCategory = (option: CategoryCreateOptions) => {
    const param = {
        title: option.title,
        voteEnd: option.voteEnd,
        tagEnd: option.tagEnd,
        goal: option.goal
    }

    if (confirmInputs(param)) {
        Swal.fire({
            text: '카테고리를 생성하시겠습니까?',
            showCancelButton: true,
            confirmButtonColor: 'white',
            cancelButtonColor: '#383838',
            confirmButtonText: 'OK'
        }).then((res) => {
            if (res.isConfirmed)
                postCreateCategory(option).then(() => {
                    Swal.fire('카테고리가 생성되었습니다.').then((res) => {
                        if (res.isConfirmed)
                            window.location.reload();
                    })
                });
        });
    }
}

export const deleteCategory = (categoryId: number) => {
    Swal.fire({
        text: '카테고리를 바로 종료하시겠습니까?',
        showCancelButton: true,
        confirmButtonColor: '#FF0000',
        cancelButtonColor: '#383838',
        confirmButtonText: 'Close'
    }).then((res) => {
        if (res.isConfirmed)
            deleteCategoryReq(categoryId).then(() => {
                Swal.fire('카테고리가 종료되었습니다.').then((res) => {
                    if (res.isConfirmed)
                        window.location.reload();
                })
            });
    })
}

export const editCategory = (option: CategoryEditOptions, categoryId: number, setState: React.Dispatch<React.SetStateAction<number>>, queryClient: QueryClient) => {
    const param = {
        title: option.title,
        voteEnd: option.voteEnd,
        tagEnd: option.tagEnd,
        goal: option.goal
    }
    
    if (confirmInputs(param)) {
        Swal.fire({
            text: '카테고리를 수정하시겠습니까?',
            showCancelButton: true,
            confirmButtonColor: 'white',
            cancelButtonColor: '#383838',
            confirmButtonText: 'OK'
        }).then((res) => {
            if (res.isConfirmed) {
                patchCategory(option, categoryId).then(() => {
                    queryClient.invalidateQueries({queryKey: ['categoryInfo-' + categoryId]})
                    queryClient.invalidateQueries(["tags", "false"]);
                    queryClient.invalidateQueries(["tags", "true"]);
                    Swal.fire('수정되었습니다.').then((res) => {
                        if (res.isConfirmed)
                            setState(1);
                    });
                })
            }
        })
    }
}

// 함수별로 파일 분리