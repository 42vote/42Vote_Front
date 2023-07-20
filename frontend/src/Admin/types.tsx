import { Dayjs } from "dayjs"

export interface CategoryOptions {
    title: string,
    voteStart: Dayjs | null,
    voteEnd: Dayjs | null,
    tagStart: Dayjs | null,
    tagEnd: Dayjs | null,
    allow: boolean,
    whiteList: Array<string>,
    goal: string,
    multiple: boolean,
    anony: boolean
}

export interface ConfirmOptions {
    title: string,
    voteStart: Dayjs | null,
    voteEnd: Dayjs | null,
    tagStart: Dayjs | null,
    tagEnd: Dayjs | null,
    goal: string
}

export interface CategoryDetailProps {
    categoryId: number
}

export interface WhiteListDialogProps {
    whiteList: Array<string>,
    setWhiteList: React.Dispatch<React.SetStateAction<Array<string>>>,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    state: number
}