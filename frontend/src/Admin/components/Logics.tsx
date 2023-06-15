import { Dayjs } from "dayjs"
import Swal from "sweetalert2";
import { deleteCategoryReq, patchCategory, postCreateCategory } from "../apis/adminApis";
import { QueryClient } from "@tanstack/react-query";

// CategoryInfoBox.tsx

export interface CategoryInfoBoxProps {
    voteEnd: Dayjs | null,
    setVoteEnd: React.Dispatch<React.SetStateAction<Dayjs | null>>,
    tagEnd: Dayjs | null,
    setTagEnd: React.Dispatch<React.SetStateAction<Dayjs | null>>,
    goalSet: boolean,
    setGoalSet: React.Dispatch<React.SetStateAction<boolean>>,
    goal: string,
    setGoal: React.Dispatch<React.SetStateAction<string>>,
    anony: boolean,
    setAnony: React.Dispatch<React.SetStateAction<boolean>>,
    multiple: boolean,
    setMultiple: React.Dispatch<React.SetStateAction<boolean>>,
    state: number
    //state -> 0 : create, 1 : detail, 2 : edit
}

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



//CategoryCreate, CategoryDetail

export interface CategoryOptions {
    title: string,
    voteEnd: Dayjs | null,
    tagEnd: Dayjs | null,
    goalSet: boolean,
    goal: string,
    multiple: boolean,
    anony: boolean
} //create용 object

export interface ConfirmOptions {
    title: string,
    voteEnd: Dayjs | null,
    tagEnd: Dayjs | null,
    goalSet: boolean,
    goal: string
} //input confrim & edit용 object

export interface CategoryDetailProps {
    // categoryId: number
}


export const confirmInputs = (option: ConfirmOptions) => {
    if (option.title === '')
        Swal.fire('카테고리 이름을 입력해주세요.');
    else if (option.tagEnd === null || option.voteEnd === null)
        Swal.fire('기간을 정확하게 입력해주세요.')
    else if (option.tagEnd.isBefore(option.voteEnd))
        Swal.fire('태그 유효 기간은 투표 종료 이후여야 합니다.');
    else if (option.goalSet && option.goal === '')
        Swal.fire('목표치를 입력해주세요.');
    else
        return (true);
}

export const createCategory = (option: CategoryOptions) => {
    const param = {
        title: option.title,
        voteEnd: option.voteEnd,
        tagEnd: option.tagEnd,
        goalSet: option.goalSet,
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
                    Swal.fire('카테고리가 생성되었습니다.');
                    //디테일 컴포넌트로 전환
                }); //error 반환값에 대하여... 400이 사용자에게 나올 수 있는가?
        });
    }
}

export const deleteCategory = (categoryId: number) => {
    Swal.fire({
        text: '카테고리를 바로 종료하시겠습니까?',
        showCancelButton: true,
        confirmButtonColor: 'white',
        cancelButtonColor: '#383838',
        confirmButtonText: 'Close'
    }).then((res) => {
        if (res.isConfirmed)
            deleteCategoryReq(categoryId).then(() => {
                Swal.fire('카테고리가 종료되었습니다.').then((res) => {
                    if (res.isConfirmed)
                        window.location.reload(); //docExpire만 수정? 아예 삭제? 그러면 새로 선택되는 카테고리 id는?
                })
            });
    })
}

export const editCategory = (option: ConfirmOptions, categoryId: number, setState: React.Dispatch<React.SetStateAction<number>>, queryClient: QueryClient) => {
    if (confirmInputs(option)) {
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
                    Swal.fire('수정되었습니다.').then((res) => {
                        if (res.isConfirmed)
                            setState(1);
                    });
                })
            }
        })
    }
}