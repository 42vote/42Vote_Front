import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Switch, Tooltip } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import "dayjs/locale/ko";
import { handleGoalInput } from "../logics/Logics";
import { CategoryInfoBoxProps } from "../types";
import '../styles/CategoryInfoBox.css';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import WhiteListDialog from "./WhiteListDialog";
import { useState } from "react";

const CategoryInfoBox = (props: CategoryInfoBoxProps) => {
    const dateDisable = props.state === 1 ? true : false;
    const toggleDisable = props.state === 0 ? false : true;
    const [isOpen, setIsOpen] = useState(false);

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
                    <div className="title-tooltip">
                        <span>카테고리 유효 기간</span>
                        <Tooltip title="카테고리와 카테고리 내 글이 사용자에게 보여지는 기간입니다. 카테고리 생성 시 시작되며, 종료 날짜의 23시 59분 59초까지 진행됩니다." arrow>
                            <HelpOutlineOutlinedIcon sx={{ color: "#888888" }}/>
                        </Tooltip>
                    </div>
                    <div className="calander">
                        <DatePicker label="시작" value={props.createAt} format={"YYYY/MM/DD"} disabled/>
                        <DatePicker
                            label="종료" value={props.tagEnd} format={"YYYY/MM/DD"}
                            onChange={(v)=>props.setTagEnd(v)}
                            disablePast minDate={props.voteEnd} disabled={dateDisable}
                        />
                    </div>
                </div>
                <div id="allow-user">
                    <div className="title-tooltip">
                        <span>작성자 제한</span>
                        <Tooltip title="특정 사용자만 해당 카테고리에 글을 작성할 수 있도록 정할 수 있습니다. 스위치를 켜지 않으면 모든 사용자가 글을 작성 할 수 있고, 스위치를 켠 후 버튼을 클릭하면 intraID를 통해 특정 사용자만 글을 작성하도록 할 수 있습니다." arrow>
                            <HelpOutlineOutlinedIcon sx={{ color: "#888888" }}/>
                        </Tooltip>
                    </div>
                    <div className="switch-button">
                        <Switch onChange={(e)=>props.setAllow(e.target.checked)} checked={props.allow || false} disabled={dateDisable}/> {/*왜 false를 달아줘야하지*/}
                        <button disabled={!props.allow} onClick={()=>setIsOpen(true)}><GroupAddIcon color={props.allow === false ? "disabled" : "action"}/></button>
                        <WhiteListDialog isOpen={isOpen} setIsOpen={setIsOpen} whiteList={props.whiteList} setWhiteList={props.setWhiteList}/>
                    </div>
                </div>
                <div id="goal-set">
                    <div className="title-tooltip">
                        <span>목표치</span>
                        <Tooltip title="카테고리 내 글의 공통 목표 투표 수입니다. 1부터 1000까지 입력 가능합니다." arrow>
                            <HelpOutlineOutlinedIcon sx={{ color: "#888888" }}/>
                        </Tooltip>
                    </div>
                    <input type="number" min="1" max="1000" value={props.goal || ''} onChange={(e)=>handleGoalInput(e, props.setGoal)} disabled={dateDisable}/>
                </div>
                <div className="toggle-box anony">
                    <div className="title-tooltip">
                        <span>익명 투표</span>
                        <Tooltip title="스위치를 키면 투표를 익명으로 진행합니다. 글 작성자 및 관리자는 해당 글에 투표한 사용자의 목록을 볼 수 없습니다." arrow>
                            <HelpOutlineOutlinedIcon sx={{ color: "#888888" }}/>
                        </Tooltip>
                    </div>
                    <Switch onChange={(e)=>props.setAnony(e.target.checked)} checked={props.anony} disabled={toggleDisable}/>
                </div>
                <div className="toggle-box multiple">
                    <div className="title-tooltip">
                        <span>중복 투표 허용</span>
                        <Tooltip title="스위치를 키면 중복 투표가 가능해집니다. 카테고리 내 여러 글에 다중으로 투표 할 수 있습니다." arrow>
                            <HelpOutlineOutlinedIcon sx={{ color: "#888888" }}/>
                        </Tooltip>
                    </div>
                    <Switch onChange={(e)=>props.setMultiple(e.target.checked)} checked={props.multiple} disabled={toggleDisable}/>
                </div>
            </div>
        </LocalizationProvider>
    )
}

export default CategoryInfoBox;