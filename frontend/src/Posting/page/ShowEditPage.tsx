import { Document } from '../../Detail/interface/DetailInterface';
import { categoryRes } from '../../Types/common';

const showEditPage = (data: Document, setTitle: React.Dispatch<React.SetStateAction<string>>, setGoal: React.Dispatch<React.SetStateAction<string>>, category: categoryRes | undefined) => {
    const descript = document.getElementById("text-area") as HTMLTextAreaElement;
    const categoryList = document.getElementById("radio-list") as HTMLDivElement;
    const labels = document.querySelectorAll(".file-field label") as NodeListOf<HTMLLabelElement>;
    const goalInput = document.getElementById("goal") as HTMLInputElement;
    
    categoryList.style.pointerEvents = 'none';
    if (category?.goalSettable === false)
        goalInput.setAttribute("disabled", "");
    else
        goalInput.removeAttribute("disabled");
    descript.value = data.content;

    data.image.forEach((v, idx) => {
        labels[idx].style.backgroundImage = `url(${v})`;
        (labels[idx].nextSibling as HTMLDivElement).classList.add('active');
    })

    setTitle(data.title);
    setGoal(String(data.goal));
}

export default showEditPage;