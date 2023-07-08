import {createContext} from "react"

export interface toggleOn {
    toggleOn: boolean,
    setToggleOn: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultVal: toggleOn = {
    toggleOn: false,
    setToggleOn: () => {return null},
}

export const toggleOnContext = createContext(defaultVal)