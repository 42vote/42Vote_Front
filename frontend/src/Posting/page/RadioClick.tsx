import { categoryRes } from "../../Types/common";

const radioClick = (event: React.MouseEvent<HTMLLabelElement>, categoryList: Array<categoryRes>, setGoal: React.Dispatch<React.SetStateAction<string>>) => {
    event.preventDefault();
    const target = event.target as HTMLLabelElement;
    const prevTarget = target.parentElement?.querySelector('.checked');
    const targetData = categoryList.find((category) => String(category.id) === (target.querySelector('input')?.value));
    const goalInput = document.getElementById('goal') as HTMLInputElement;
    
    target.classList.add('checked');
    prevTarget?.classList.remove('checked');

    if (target === prevTarget || targetData?.goalSettable === true) {
        setGoal('');
        goalInput.removeAttribute('disabled');
    } else {
        setGoal(String(targetData?.goal));
        goalInput.setAttribute('disabled', '');
    }
}

export default radioClick;