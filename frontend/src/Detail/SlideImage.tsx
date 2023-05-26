const ImgNavClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    const target: HTMLElement = event.target as HTMLDivElement;
    const targetSibling: Element[] = Array.from(target.parentElement?.children || []);
    const idx: number = targetSibling.indexOf(target);
    const images: NodeListOf<Element> | undefined = target.parentElement?.parentElement?.querySelectorAll('.doc-img');
    const background: HTMLElement = document.getElementById('img-file') as HTMLDivElement;

    targetSibling.forEach(sibling => {
        if (sibling !== target)
            sibling.classList.remove('active');
        else
            sibling.classList.add('active');
    });

    images?.forEach((img, index) => {
        if (index !== idx)
            img.classList.remove('active');
        else {
            img.classList.add('active');
            background.style.backgroundImage = 'url(' + img.getAttribute('src') + ')';
        }
    });
}

const ImgArrowClick = (event: React.MouseEvent<HTMLButtonElement>, direction: number): void => {
    const target: HTMLElement = event.target as HTMLButtonElement;
    const images: NodeListOf<Element> | undefined = target.parentElement?.querySelectorAll('.doc-img');
    const nav: NodeListOf<Element> | undefined = target.parentElement?.querySelectorAll('.nav');
    const background: HTMLElement = document.getElementById('img-file') as HTMLDivElement;
    let idx: number = 0;
    
    images?.forEach((img, index) => {
        if (img.classList.contains('active'))
            idx = index;
    });

    idx += direction;
    if (idx === -1) {
        idx = images ? images.length - 1 : 0;
    } else if (idx === images?.length) {
        idx = 0;
    }

    images?.forEach((img, index) => {
        if (index !== idx)
            img.classList.remove('active');
        else {
            img.classList.add('active');
            background.style.backgroundImage = 'url(' + img.getAttribute('src') + ')';
        }
    });

    nav?.forEach((nav, index) => {
        if (index !== idx)
            nav.classList.remove('active');
        else
            nav.classList.add('active');
    });
}

export const SlideImage = {
    ImgNavClick,
    ImgArrowClick
};