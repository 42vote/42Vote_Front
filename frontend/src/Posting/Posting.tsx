import { useEffect, useState } from 'react';
import './Posting.css'
import { useMediaQuery } from 'react-responsive';
import { customAxios } from '../Lib/customAxios';
import { categoryRes } from "../Types/common";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Posting() {
    const isDesktop = useMediaQuery({query: '(min-width: 769px)'});
    const nav = useNavigate();
    const [categoryList, setCategoryList] = useState(Array<categoryRes>);
    const [title, setTitle] = useState('New Post Title');
    const [descriptLength, setDescriptLength] = useState(0);

    useEffect(() => {
        customAxios().get('/category', {params: {expired: false}}).then((res) => {
            setCategoryList(res.data);
        });
    }, []);

    useEffect(() => {
        if (categoryList.length !== 0 && categoryList[0].goalSettable === false) {
            const goalInput = document.getElementById('goal') as HTMLInputElement;
            goalInput.value = String(categoryList[0].goal);
            goalInput.setAttribute('disabled', '');
        }
    }, [categoryList])

    const radioClick = (event: React.MouseEvent<HTMLLabelElement>) => {
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

    const getCheckedCategory = () => {
        const categorys = document.getElementsByName('category') as NodeListOf<HTMLInputElement>;
        let checkdCategoryId = -1;

        categorys.forEach((category) => {
            if (category.parentElement?.classList.contains('checked'))
                checkdCategoryId = Number(category.value);
        });

        return checkdCategoryId;
    }

    const convertBase64 = (file: FileList | null, files: string[]) => {
        return new Promise<void>((resolve) => {
            if (file && file.length > 0) {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file[0]);
                fileReader.onloadend = () => {
                    files.push(fileReader.result as string);
                    resolve();
                }
            } else
                resolve();
        });
    }

    const getImageFiles = async () => {
        const file1 = (document.getElementById('file1') as HTMLInputElement).files;
        const file2 = (document.getElementById('file2') as HTMLInputElement).files;
        const file3 = (document.getElementById('file3') as HTMLInputElement).files;
        let base64Files: string[] = [];

        await convertBase64(file1, base64Files);
        await convertBase64(file2, base64Files);
        await convertBase64(file3, base64Files);

        return base64Files;
    }

    const submitPost = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const docTitle = title.trim();
        const description = document.getElementById('text-area') as HTMLTextAreaElement;
        const goalInput = Number((document.getElementById('goal') as HTMLInputElement).value);
        const checkedCategoryId = getCheckedCategory();
        const base64Files = await getImageFiles();

        if (docTitle.length === 0 || docTitle === 'New Post Title')
            Swal.fire('글 제목을 입력해주세요.')
        else if (checkedCategoryId === -1)
            Swal.fire('카테고리를 선택해주세요.');
        else if (goalInput > 1000 || goalInput< 1)
            Swal.fire('목표치는 1 ~ 1000 범위 숫자여야 합니다.');
        else if (description.value.length < 10)
            Swal.fire('설명글을 10자 이상 적어주세요.');
        else if (base64Files.length === 0)
            Swal.fire('사진을 최소 1장 등록해주세요.');
        else {
            Swal.fire({
                text: '글을 등록하시겠습니까?',
                showCancelButton: true,
                confirmButtonColor: 'white',
                cancelButtonColor: '#383838',
                confirmButtonText: 'OK'
            }).then((res) => {
                if (res.isConfirmed) {
                    customAxios().post('/document', {
                        title: docTitle,
                        context: description.value,
                        categoryId: checkedCategoryId,
                        goal: goalInput,
                        image: base64Files
                    }).then(() => nav('/main'));
                }
            });
        }
    }

    return (
        <div id={isDesktop ? "desktop" : "mobile"}>
            <div id="posting">
                <form id="post-form">
                    <input id="title" type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                    <div id="category-wrapper">
                        <p>Category</p>
                        <div id="radio-list">
                            {
                                categoryList.map((category, idx) => (
                                    <label className={idx === 0 ? 'checked' : ''} onClick={(e) => radioClick(e)} key={idx}><input type="radio" name="category" value={category.id}/>{category.title}</label>
                                ))
                            }
                        </div>
                    </div>
                    <label>Goal<input id="goal" type="number" min="1" max="1000"/></label>
                    <label>Description<textarea id="text-area" maxLength={500} onChange={(e) => setDescriptLength(e.target.value.length)}></textarea><div id="text-length">{descriptLength} / 500</div></label>
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
                    <button type="submit" onClick={submitPost}>Post</button>
                </form>
            </div>
        </div>
    )
}

export default Posting;
