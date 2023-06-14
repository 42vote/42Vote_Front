import { useRef, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import CategoryInfoBox from "./CategoryInfoBox";
import { createCategory } from "./Logics";

const CategoryCreate = () => {
    const title = useRef<HTMLInputElement>(null);
    const today = dayjs();

    const [voteEnd, setVoteEnd] = useState<Dayjs | null>(today);
    const [tagEnd, setTagEnd] = useState<Dayjs | null>(today);
    const [goalSet, setGoalSet] = useState(false);
    const [goal, setGoal] = useState('');
    const [anony, setAnony] = useState(false);
    const [multiple, setMultiple] = useState(false);
    
    const options = {
        title: title.current ? title.current.value : '',
        voteEnd: voteEnd,
        tagEnd: tagEnd,
        goalSet: goalSet,
        goal: goal,
        anony: anony,
        multiple: multiple,
    }

    return (
        <div id="category-create">
            <input id="title" type='text' ref={title} placeholder='category name'/>
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