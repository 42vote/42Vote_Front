import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategoryInfo } from "../apis/adminApis";
import CategoryInfoBox from "./CategoryInfoBox";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useRef, useState } from "react";
import { deleteCategory, editCategory } from "../logics/Logics";
import { CategoryDetailProps } from "../types";
import '../styles/CategoryDetail.css';

const CategoryDetail = (props: CategoryDetailProps) => {
    const categoryId = props.categoryId;
    const queryClient = useQueryClient();
    const today = dayjs();
    const { data: categoryInfo, isLoading, isError } = useQuery(['categoryInfo-' + categoryId], ()=>getCategoryInfo(categoryId), {staleTime: 1000, retry: 0});

    const [state, setState] = useState(1);
    const [title, setTitle] = useState('');
    const [voteEnd, setVoteEnd] = useState<Dayjs | null>(dayjs());
    const [tagEnd, setTagEnd] = useState<Dayjs | null>(dayjs());
    const [goal, setGoal] = useState('');
    const [anony, setAnony] = useState(false);
    const [multiple, setMultiple] = useState(false);

    const options = {
        title: title,
        voteEnd: voteEnd,
        tagEnd: tagEnd,
        goal: goal
    }

    useEffect(() => {
        if (categoryInfo) {
            setTitle(categoryInfo.title);
            setVoteEnd(dayjs(categoryInfo.voteExpire));
            setTagEnd(dayjs(categoryInfo.docExpire));
            setGoal(categoryInfo.goal);
            setAnony(categoryInfo.anonymousVote);
            setMultiple(categoryInfo.multipleVote);
        }
    }, [categoryInfo]);

    useEffect(() => {
        setState(1);
    }, [categoryId])

    if (isLoading)
        return (<img src="img/loading-spinner.gif" alt="loading"/>);
    if (isError)
        return (<div>Category does not exist.</div>);
    
    return (
        <div id="category-detail">
            {
                state === 1 ? <div id="title">{title}</div> :
                <textarea id="title" value={title} onChange={(e)=>setTitle(e.target.value)} spellCheck={false}/>
            }
            {state === 1 && <button id="modify-button" onClick={()=>setState(2)}>카테고리 수정</button>}
            <CategoryInfoBox
                voteEnd={voteEnd}
                setVoteEnd={setVoteEnd}
                tagEnd={tagEnd}
                setTagEnd={setTagEnd}
                goal={goal}
                setGoal={setGoal}
                anony={anony}
                setAnony={setAnony}
                multiple={multiple}
                setMultiple={setMultiple}
                state={state}
            />
            {state === 1 && today.isBefore(tagEnd) && (<button id="delete-button" onClick={()=>deleteCategory(categoryId)}>카테고리 즉시 종료</button>)}
            {state === 2 && (<button id="edit-button" onClick={()=>editCategory(options, categoryId, setState, queryClient)}>카테고리 수정</button>)}
        </div>
    )
}

export default CategoryDetail;