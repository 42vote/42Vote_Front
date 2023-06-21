import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { categoryRes } from '../../Types/common';
import { uploadFile, deleteFile } from '../page/HandleFile';
import { handleGoalInput } from '../../Admin/logics/Logics';
import radioClick from '../page/RadioClick';
import submitDoc from '../page/SubmitDoc';
import getCategory from '../service/GetCategory';
import setDefaultGoal from '../page/SetDefaultGoal';
import '../style/Posting.css'

function Posting() {
    const isDesktop = useMediaQuery({query: '(min-width: 769px)'});
    const nav = useNavigate();
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
        setDefaultGoal(categoryList);
    }, [categoryList])

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
                                    <label className={idx === 0 ? 'checked' : ''} onClick={(e)=>radioClick(e, categoryList)} key={idx}><input type="radio" name="category" value={category.id}/>{category.title}</label>
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
                                    <p>name</p>
                                    <button type="button" onClick={deleteFile}/>
                                </div>
                            </div>
                            <div className="file-field">
                                <label htmlFor="file2"><input type="file" id="file2" accept='image/*' onChange={uploadFile}/></label>
                                <div>
                                    <p>name</p>
                                    <button type="button" onClick={deleteFile}/>
                                </div>
                            </div>
                            <div className="file-field">
                                <label htmlFor="file3"><input type="file" id="file3" accept='image/*' onChange={uploadFile}/></label>
                                <div>
                                    <p>name</p>
                                    <button type="button" onClick={deleteFile}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" onClick={(e)=>submitDoc(e, title, goal, nav)}>Post</button>
                </form>
            </div>
        </div>
    )
}

export default Posting;
