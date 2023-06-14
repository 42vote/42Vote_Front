import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Switch } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { CategoryInfoBoxProps, handleGoalInput } from "./Logics";

const CategoryInfoBox = (props: CategoryInfoBoxProps) => {
    const today = dayjs();
    const dateDisable = props.state === 1 ? true : false;
    const toggleDisable = props.state === 0 ? false : true;

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
            <div id="info-box">
                <div className="expire-date vote-expire">
                    <span>투표 기간</span>
                    <DatePicker label="시작" value={today} format={"YYYY/MM/DD"} disabled/>
                    <DatePicker 
                        label="종료" value={props.voteEnd} format={"YYYY/MM/DD"}
                        onChange={(v)=>props.setVoteEnd(v)}
                        disablePast disabled={dateDisable}
                    />
                </div>
                <div className="expire-date doc-expire">
                    <span>태그 유효 기간</span>
                    <DatePicker label="시작" value={today} format={"YYYY/MM/DD"} disabled/>
                    <DatePicker
                        label="종료" value={props.tagEnd} format={"YYYY/MM/DD"}
                        onChange={(v)=>props.setTagEnd(v)}
                        disablePast minDate={props.voteEnd} disabled={dateDisable}
                    />
                </div>  
                <div id="goal-set">
                    <span>목표치 통일</span>
                    <Switch onChange={(e)=>props.setGoalSet(e.target.checked)} checked={props.goalSet} disabled={toggleDisable}/>
                    <input type="number" min="1" max="1000" value={props.goalSet ? props.goal : ''} 
                        onChange={(e)=>handleGoalInput(e, props.setGoal)} disabled={!props.goalSet || dateDisable}/>
                </div>
                <div id="vote-option">
                    <div className="toggle-box anony">
                        <span>익명 투표</span>
                        <Switch onChange={(e)=>props.setAnony(e.target.checked)} checked={props.anony} disabled={toggleDisable}/>
                    </div>
                    <div className="toggle-box multiple">
                        <span>중복 투표 허용</span>
                        <Switch onChange={(e)=>props.setMultiple(e.target.checked)} checked={props.multiple} disabled={toggleDisable}/>
                    </div>
                </div>
            </div>
        </LocalizationProvider>
    )
}

export default CategoryInfoBox;