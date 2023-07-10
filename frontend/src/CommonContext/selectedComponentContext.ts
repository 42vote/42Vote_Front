import {createContext} from "react"

export interface selectedCategoryComponent {
    selectedComponent: string,
    setSelectedComponent: React.Dispatch<React.SetStateAction<string>>
}

const defaultComponent: selectedCategoryComponent = {
    selectedComponent: "detail",
    setSelectedComponent: () => {return null},
}

export const selectedComponentContext = createContext(defaultComponent)
