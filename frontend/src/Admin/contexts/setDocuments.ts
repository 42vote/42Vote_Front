import {createContext} from "react"
import { documentListRes } from "../../Types/common"

export interface categoryDocuments {
    categoryDocuments: documentListRes[],
    setCategoryDocuments: React.Dispatch<React.SetStateAction<documentListRes[]>>
}

const defaultVal: categoryDocuments = {
    categoryDocuments: [],
    setCategoryDocuments: () => {return null},
}

export const categoryDocumentsContext = createContext(defaultVal)