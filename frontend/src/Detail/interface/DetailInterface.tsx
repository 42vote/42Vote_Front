export interface Document {
    title: string,
    content: string,
    author: string,
    isAuthor: boolean,
    categoryId: number,
    multipleVote: boolean,
    createAt: string,
    voteExpiredAt: string,
    goal: number,
    voteCnt: number,
    isVote: boolean,
    isVoteExpired: boolean,
    image: string[]
}

export interface StatDialogProps {
    docId: number,
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface StatDataRes {
    id: number
    createdAt: string,
    user: {
        intraId: string
    },
    document: {
        id: number,
        author: {
            intraId: string
        }
    }
}