import { categoryRes } from "../../Types/common";

const setDefaultGoal = (categoryList: Array<categoryRes>) => {
    if (categoryList.length !== 0 && categoryList[0].goalSettable === false) {
        const goalInput = document.getElementById('goal') as HTMLInputElement;
        goalInput.value = String(categoryList[0].goal);
        goalInput.setAttribute('disabled', '');
    }
}

export default setDefaultGoal;