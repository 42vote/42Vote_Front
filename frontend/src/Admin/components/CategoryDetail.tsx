import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategoryInfo } from "../apis/adminApis";
import CategoryInfoBox from "./CategoryInfoBox";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { CategoryDetailProps, deleteCategory, editCategory } from "./Logics";

const CategoryDetail = (props: CategoryDetailProps) => {
    // const categoryId = props.categoryId;
    const categoryId = 12;
    const queryClient = useQueryClient();
    const today = dayjs();
    const { data: categoryInfo, isLoading, isError } = useQuery(['categoryInfo-' + categoryId], ()=>getCategoryInfo(categoryId), {staleTime: 1000, retry: 0});

    const [state, setState] = useState(1);
    const [title, setTitle] = useState('');
    const [voteEnd, setVoteEnd] = useState<Dayjs | null>(dayjs());
    const [tagEnd, setTagEnd] = useState<Dayjs | null>(dayjs());
    const [goalSet, setGoalSet] = useState(false);
    const [goal, setGoal] = useState('');
    const [anony, setAnony] = useState(false);
    const [multiple, setMultiple] = useState(false);

    const options = {
        title: title,
        voteEnd: voteEnd,
        tagEnd: tagEnd,
        goalSet: goalSet,
        goal: goal
    }

    useEffect(() => {
        if (categoryInfo) {
            setTitle(categoryInfo.title);
            setVoteEnd(dayjs(categoryInfo.voteExpire));
            setTagEnd(dayjs(categoryInfo.docExpire));
            setGoalSet(categoryInfo.goal === 0 ? false : true);
            setGoal(categoryInfo.goal);
            setAnony(categoryInfo.anonymousVote);
            setMultiple(categoryInfo.multipleVote);
        }
    }, [categoryInfo]);
    
    if (isLoading)
        return (<img src="img/loading-spinner.gif" alt="loading"/>);
    if (isError)
        return (<div>Category does not exist.</div>);
    
    return (
        <div id="category-detail">
            {/* 카테고리 수정 및 즉시 종료가 voteExpire 기준? docExpire 기준? 으로 가능한가 */}
            <input id="title" type='text' value={title} onChange={(e)=>setTitle(e.target.value)} disabled={state === 1 ? true : false}/>
            {state === 1 && today.isBefore(tagEnd) && <button id="modify-button" onClick={()=>setState(2)}>카테고리 수정</button>}
            <CategoryInfoBox
                voteEnd={voteEnd}
                setVoteEnd={setVoteEnd}
                tagEnd={tagEnd}
                setTagEnd={setTagEnd}
                goalSet={goalSet}
                setGoalSet={setGoalSet}
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