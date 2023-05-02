import { useState } from 'react';
import FixedTop from '../Etc/FixedTop';
import './Posting.css'
import { useMediaQuery } from 'react-responsive';


function Posting() {
    const isDesktop: boolean = useMediaQuery({query: '(min-width: 769px)'});
    const isMobile: boolean = useMediaQuery({query: '(max-width: 768px)'});
    
    const radioClick = (event: React.MouseEvent<HTMLLabelElement>): void => {
        const target: HTMLLabelElement = event.target as HTMLLabelElement;
        const targetChild: HTMLInputElement | null = target.querySelector('input');
        const prevTarget: HTMLLabelElement | null | undefined = target.parentElement?.querySelector('.checked');
        const prevChild: HTMLInputElement | null | undefined = prevTarget?.querySelector('input');
        
        if (targetChild) {
            target.classList.add('checked');
            targetChild.checked = true;
            if (prevChild) {
                prevTarget?.classList.remove('checked');
                prevChild.checked = false;
            }
        }
    }

    const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const target: HTMLInputElement = event.target as HTMLInputElement;
        const targetLabel: HTMLLabelElement = target.parentElement as HTMLLabelElement;
        const nextDiv: HTMLDivElement | null = targetLabel.nextElementSibling as HTMLDivElement;
        const nameP: HTMLParagraphElement | null = nextDiv.querySelector('p');
        const img: File | null = target.files && target.files[0];

        if (img && nameP) {
            const imgUrl: string = URL.createObjectURL(img);
            targetLabel.style.backgroundImage = `url(${imgUrl})`;
            nextDiv.classList.add('active');
            nameP.textContent = img.name;
        }
    }

    const deleteFile = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const target: HTMLButtonElement = event.target as HTMLButtonElement;
        const nameBox: HTMLDivElement | null = target.parentElement as HTMLDivElement;
        const fileField: HTMLDivElement | null = nameBox.parentElement as HTMLDivElement;
        const fileInput: HTMLInputElement | null = fileField.querySelector('input');
        const fileLable: HTMLLabelElement | null = fileField.querySelector('label');

        if (fileInput && fileLable) {
            fileInput.value = '';
            nameBox.classList.remove('active');
            fileLable.style.backgroundImage = `url('img/file-add-button.svg')`;
        }
    }

    const Layout = (): JSX.Element => {
        const [title, setTitle] = useState('New Post Title');
        const handleTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
            const target: HTMLInputElement = event.target as HTMLInputElement;

            setTitle(target.value); //왜 포커스가 풀리지?
        }

        return (
            <div id="posting">
                <form id="post-form">
                    <input id="title" type="text" value={title} onChange={handleTitle}/>
                    <div id="category-wrapper">
                        <p>Category</p>
                        <div id="radio-list">
                            {/*category list map*/}
                            <label className='checked' onClick={radioClick}><input type="radio" name="category" value="apple" defaultChecked/>TagA</label>
                            <label onClick={radioClick}><input type="radio" name="category" value="banana"/>TagB</label>
                            <label onClick={radioClick}><input type="radio" name="category" value="banana"/>goods</label>
                            <label onClick={radioClick}><input type="radio" name="category" value="banana"/>TagB</label>
                            <label onClick={radioClick}><input type="radio" name="category" value="banana"/>goods</label>
                            <label onClick={radioClick}><input type="radio" name="category" value="banana"/>TagB</label>
                            <label onClick={radioClick}><input type="radio" name="category" value="banana"/>goods</label>
                        </div>
                    </div>
                    <label>Goal<input id="goal" type="number" min="1"/></label>
                    <label>Description<textarea id="text-area"></textarea></label>
                    <div id="image-wrapper">
                        <p>Images</p>
                        <div id="file-list">
                            <div className="file-field">
                                <label htmlFor="file1"><input type="file" id="file1" accept='image/*' onChange={handleFileInput}/></label>
                                <div>
                                    <p>name</p>
                                    <button type="button" onClick={deleteFile}/>
                                </div>
                            </div>
                            <div className="file-field">
                                <label htmlFor="file2"><input type="file" id="file2" accept='image/*' onChange={handleFileInput}/></label>
                                <div>
                                    <p>name</p>
                                    <button type="button" onClick={deleteFile}/>
                                </div>
                            </div>
                            <div className="file-field">
                                <label htmlFor="file3"><input type="file" id="file3" accept='image/*' onChange={handleFileInput}/></label>
                                <div>
                                    <p>name</p>
                                    <button type="button" onClick={deleteFile}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit">Post</button>
                </form>
            </div>
        )
    }

    return (
        <>
            {isMobile && <div id="mobile"><FixedTop/><Layout/></div>}
            {isDesktop && <div id="desktop"><FixedTop/><Layout/></div>}
        </>
    )
}

export default Posting;
