import { categoryRes } from "../../Types/common";

const setDefaultGoal = (categoryList: Array<categoryRes>, setGoal: React.Dispatch<React.SetStateAction<string>>) => {
    if (categoryList.length !== 0 && categoryList[0].goalSettable === false) {
        const goalInput = document.getElementById('goal') as HTMLInputElement;
        setGoal(String(categoryList[0].goal));
        goalInput.setAttribute('disabled', '');
    }
}

export default setDefaultGoal;