import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { categoryRes } from '../../Types/common';
import { Document } from '../../Detail/interface/DetailInterface';
import { uploadFile, deleteFile } from '../page/HandleFile';
import { handleGoalInput } from '../../Admin/logics/Logics';
import { getDocData } from '../../Detail/service/GetData';
import radioClick from '../page/RadioClick';
import submitDoc from '../page/SubmitDoc';
import getCategory from '../service/GetCategory';
import setDefaultGoal from '../page/SetDefaultGoal';
import NotFound from '../../Etc/NotFound';
import showEditPage from '../page/ShowEditPage';
import '../style/Posting.css'

function Posting() {
    const isDesktop = useMediaQuery({query: '(min-width: 769px)'});
    const nav = useNavigate();

    const docId = new URLSearchParams(window.location.search).get("id") || '';
    const { data, isLoading, isError, isSuccess } = useQuery<Document>(['detail/' + docId], ()=>getDocData(docId), {retry: false, staleTime: 60 * 1000});
    
    const [categoryList, setCategoryList] = useState(Array<categoryRes>);
    const [title, setTitle] = useState('');
    const [goal, setGoal] = useState('');
    const [descriptLength, setDescriptLength] = useState(0);

    useEffect(() => {
        getCategory().then((res) => {
            setCategoryList(res.data);
        });
    }, []);

    useEffect(() => {
        if (!isError && data && data.isAuthor === true)
            showEditPage(data, setTitle, setGoal, categoryList.find((category) => Number(category.id) === data.categoryId));
        else
            setDefaultGoal(categoryList, setGoal);
    }, [data, categoryList, isError]);

    if (isLoading)
        return (<img src='img/loading-spinner.gif' style={{width: '100%'}} alt='loading'/>);
    //skeleton ui로 바꾸기

    if (isError && docId !== null && docId !== '')
        return (<NotFound/>);

    if (isSuccess && data && data.isAuthor === false)
        return (<NotFound/>);

    return (
        <div id={isDesktop ? "desktop" : "mobile"}>
            <div id="posting">
                <form id="post-form">
                    <input id="title" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='New Post Title' maxLength={42} spellCheck='false'/>
                    <div id="category-wrapper">
                        <p>Category</p>
                        <div id="radio-list">
                            {
                                categoryList.map((category, idx) => (
                                    <label className={data ? (Number(category.id) === data.categoryId ? 'checked' : '') : (idx === 0 ? 'checked' : '')} onClick={(e)=>radioClick(e, categoryList, setGoal)} key={idx}>
                                        <input type="radio" name="category" value={category.id}/>{category.title}</label>
                                ))
                            }
                        </div>
                    </div>
                    <label>Goal<input id="goal" type="number" min="1" max="1000" value={goal || ''} onChange={(e)=>handleGoalInput(e, setGoal)}/></label>
                    <label>Description<textarea id="text-area" maxLength={500} onChange={(e)=>setDescriptLength(e.target.value.length)}></textarea><div id="text-length">{descriptLength} / 500</div></label>
                    <div id="image-wrapper">
                        <p>Images</p>
                        <div id="file-list">
                            <div className="file-field">
                                <label htmlFor="file1"><input type="file" id="file1" accept='image/*' onChange={uploadFile}/></label>
                                <div>
                                    <p>Img</p>
                                    <button type="button" onClick={deleteFile}/>
                                </div>
                            </div>
                            <div className="file-field">
                                <label htmlFor="file2"><input type="file" id="file2" accept='image/*' onChange={uploadFile}/></label>
                                <div>
                                    <p>Img</p>
                                    <button type="button" onClick={deleteFile}/>
                                </div>
                            </div>
                            <div className="file-field">
                                <label htmlFor="file3"><input type="file" id="file3" accept='image/*' onChange={uploadFile}/></label>
                                <div>
                                    <p>Img</p>
                                    <button type="button" onClick={deleteFile}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img id="loading" src='img/loading-spinner.gif' alt="loading"/>
                    <button type="submit" onClick={(e)=>{submitDoc(e, docId, title, goal, data, nav)}}>Post</button>
                </form>
            </div>
        </div>
    )
}

export default Posting;