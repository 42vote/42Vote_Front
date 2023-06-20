import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Switch, Tooltip } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import "dayjs/locale/ko";
import { handleGoalInput } from "../logics/Logics";
import { CategoryInfoBoxProps } from "../types";
import '../styles/CategoryInfoBox.css';

const CategoryInfoBox = (props: CategoryInfoBoxProps) => {
    const dateDisable = props.state === 1 ? true : false;
    const toggleDisable = props.state === 0 ? false : true;

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
            <div id="info-box">
                <div className="expire-date vote-expire">
                    <div className="title-tooltip">
                        <span>투표 기간</span>
                        <Tooltip title="투표가 가능한 기간입니다. 카테고리 생성 시 시작되며, 종료 날짜의 23시 59분 59초까지 진행됩니다." arrow>
                            <HelpOutlineOutlinedIcon sx={{ color: "#888888" }}/>
                        </Tooltip>
                    </div>
                    <div className="calander">
                        <DatePicker label="시작" value={props.createAt} format={"YYYY/MM/DD"} disabled/>
                        <DatePicker 
                            label="종료" value={props.voteEnd} format={"YYYY/MM/DD"}
                            onChange={(v)=>props.setVoteEnd(v)}
                            disablePast disabled={dateDisable}
                        />
                    </div>
                </div>
                <div className="expire-date doc-expire">
                    <span>카테고리 유효 기간</span>
                    <div className="calander">
                        <DatePicker label="시작" value={props.createAt} format={"YYYY/MM/DD"} disabled/>
                        <DatePicker
                            label="종료" value={props.tagEnd} format={"YYYY/MM/DD"}
                            onChange={(v)=>props.setTagEnd(v)}
                            disablePast minDate={props.voteEnd} disabled={dateDisable}
                        />
                    </div>
                </div>  
                <div id="goal-set">
                    <span>목표치 통일</span>
                    <input type="number" min="1" max="1000" value={props.goal || ''} onChange={(e)=>handleGoalInput(e, props.setGoal)} disabled={dateDisable}/>
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