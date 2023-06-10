import { categoryRes } from "../../Types/common";

const radioClick = (event: React.MouseEvent<HTMLLabelElement>, categoryList: Array<categoryRes>) => {
    event.preventDefault();
    const target = event.target as HTMLLabelElement;
    const prevTarget = target.parentElement?.querySelector('.checked');
    const targetData = categoryList.find((category) => String(category.id) === (target.querySelector('input')?.value));
    const goalInput = document.getElementById('goal') as HTMLInputElement;
    
    target.classList.add('checked');
    prevTarget?.classList.remove('checked');

    if (target === prevTarget || targetData?.goalSettable === true) {
        goalInput.value = '';
        goalInput.removeAttribute('disabled');
    } else {
        goalInput.value = String(targetData?.goal);
        goalInput.setAttribute('disabled', '');
    }
}

export default radioClick;