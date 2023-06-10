const ImgNavClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const targetSibling = Array.from(target.parentElement?.children || []);
    const idx = targetSibling.indexOf(target);
    const images = target.parentElement?.parentElement?.querySelectorAll('.doc-img');
    const background = document.getElementById('img-file') as HTMLDivElement;

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

const ImgArrowClick = (event: React.MouseEvent<HTMLButtonElement>, direction: number) => {
    const target = event.target as HTMLButtonElement;
    const images = target.parentElement?.querySelectorAll('.doc-img');
    const nav = target.parentElement?.querySelectorAll('.nav');
    const background = document.getElementById('img-file') as HTMLDivElement;
    let idx = 0;
    
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