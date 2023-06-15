import { useRef, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import CategoryInfoBox from "./CategoryInfoBox";
import { createCategory } from "./Logics";

const CategoryCreate = () => {
    const today = dayjs();

    const [title, setTitle] = useState('');
    const [voteEnd, setVoteEnd] = useState<Dayjs | null>(today);
    const [tagEnd, setTagEnd] = useState<Dayjs | null>(today);
    const [goalSet, setGoalSet] = useState(false);
    const [goal, setGoal] = useState('');
    const [anony, setAnony] = useState(false);
    const [multiple, setMultiple] = useState(false);
    
    const options = {
        title: title,
        voteEnd: voteEnd,
        tagEnd: tagEnd,
        goalSet: goalSet,
        goal: goal,
        anony: anony,
        multiple: multiple,
    }

    return (
        <div id="category-create">
            <input id="title" type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='category name'/>
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
                state={0}
            />
            <button id="post-button" onClick={()=>createCategory(options)}>카테고리 생성</button>
        </div>
    )
}

export default CategoryCreate;