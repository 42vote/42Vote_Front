import { Dayjs } from "dayjs"

export interface CategoryInfoBoxProps {
    createAt: Dayjs,
    voteEnd: Dayjs | null,
    setVoteEnd: React.Dispatch<React.SetStateAction<Dayjs | null>>,
    tagEnd: Dayjs | null,
    setTagEnd: React.Dispatch<React.SetStateAction<Dayjs | null>>,
    goal: string,
    setGoal: React.Dispatch<React.SetStateAction<string>>,
    anony: boolean,
    setAnony: React.Dispatch<React.SetStateAction<boolean>>,
    multiple: boolean,
    setMultiple: React.Dispatch<React.SetStateAction<boolean>>,
    state: number
    //state -> 0 : create, 1 : detail, 2 : edit
}

export interface CategoryOptions {
    title: string,
    voteEnd: Dayjs | null,
    tagEnd: Dayjs | null,
    goal: string,
    multiple: boolean,
    anony: boolean
} //create용 object

export interface ConfirmOptions {
    title: string,
    voteEnd: Dayjs | null,
    tagEnd: Dayjs | null,
    goal: string
} //input confrim & edit용 object

export interface CategoryDetailProps {
    categoryId: number
}