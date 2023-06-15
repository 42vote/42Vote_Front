export const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const targetLabel = target.parentElement as HTMLLabelElement;
    const nextDiv = targetLabel.nextElementSibling as HTMLDivElement;
    const nameP = nextDiv.querySelector('p');
    const img = target.files && target.files[0];

    if (img && nameP) {
        const imgUrl = URL.createObjectURL(img);
        targetLabel.style.backgroundImage = `url(${imgUrl})`;
        nextDiv.classList.add('active');
        nameP.textContent = img.name;
    }
}

export const deleteFile = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const nameBox = target.parentElement as HTMLDivElement;
    const fileField = nameBox.parentElement as HTMLDivElement;
    const fileInput = fileField.querySelector('input');
    const fileLable = fileField.querySelector('label');

    if (fileInput && fileLable) {
        fileInput.value = '';
        nameBox.classList.remove('active');
        fileLable.style.backgroundImage = `url('img/file-add-button.svg')`;
    }
}