import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ko";

import { Switch, Tooltip } from '@mui/material';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import { CategoryDetailProps } from "../types";
import { closeCategory, createCategory, deleteCategory, editCategory, handleGoalInput } from "../logics/Logics";
import { getCategoryInfo } from "../apis/adminApis";
import WhiteListDialog from "./WhiteListDialog";
import '../styles/CategoryDetail.css';
import '../styles/CategoryInfoBox.css';

const CategoryDetail = (props: CategoryDetailProps) => {
    const categoryId = props.categoryId;
    const queryClient = useQueryClient();
    const today = dayjs();
    const { data: categoryInfo, isLoading, isError } = useQuery(['categoryInfo-' + categoryId], ()=>getCategoryInfo(categoryId), {staleTime: 1000 * 60, retry: 0});

    const [state, setState] = useState(0); // 0 : create, 1 : detail, 2 : edit
    const [title, setTitle] = useState('');
    const [voteStart, setVoteStart] = useState<Dayjs | null>(dayjs());
    const [voteEnd, setVoteEnd] = useState<Dayjs | null>(dayjs());
    const [tagStart, setTagStart] = useState<Dayjs | null>(dayjs());
    const [tagEnd, setTagEnd] = useState<Dayjs | null>(dayjs());
    const [allow, setAllow] = useState(false);
    const [whiteList, setWhiteList] = useState<Array<string>>([]);
    const [goal, setGoal] = useState('');
    const [anony, setAnony] = useState(false);
    const [multiple, setMultiple] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const dateDisable = state === 1 ? true : false;
    const toggleDisable = state === 0 ? false : true;

    const reqBody = {
        title: title,
        voteStart: voteStart,
        voteEnd: voteEnd,
        tagStart: tagStart,
        tagEnd: tagEnd,
        allow: allow,
        whiteList: whiteList,
        goal: goal,
        anony: anony,
        multiple: multiple
    }

    useEffect(() => {
        if (categoryInfo) {
            setState(1);
            setTitle(categoryInfo.title);
            setVoteStart(dayjs(categoryInfo.voteStart));
            setVoteEnd(dayjs(categoryInfo.voteExpire));
            setTagStart(dayjs(categoryInfo.docStart));
            setTagEnd(dayjs(categoryInfo.docExpire));
            setAllow(categoryInfo.whitelistOnly);
            setGoal(categoryInfo.goal);
            setAnony(categoryInfo.anonymousVote);
            setMultiple(categoryInfo.multipleVote);
            setWhiteList(categoryInfo.whitelist);
        }
        return () => {
            setState(0);
            setTitle('');
            setVoteStart(dayjs());
            setVoteEnd(dayjs());
            setTagStart(dayjs());
            setTagEnd(dayjs());
            setAllow(false);
            setGoal('');
            setAnony(false);
            setMultiple(false);
            setWhiteList([]);
        }
    }, [categoryInfo]);

    if (isLoading)
        return (<img src="img/loading-spinner.gif" alt="loading"/>);
    if (isError)
        return (<div>Category does not exist.</div>);
    
    return (
        <div id="category-detail">
            {
                state === 1 ? <div id="title">{title}</div> :
                <textarea id="title" value={title} onChange={(e)=>setTitle(e.target.value)} spellCheck={false} placeholder="Category Name"/>
            }
            {state === 1 && <button id="modify-button" onClick={()=>setState(2)}>카테고리 수정</button>}
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
                            <DatePicker
                                label="시작" value={voteStart} format={"YYYY/MM/DD"} 
                                onChange={(v)=>setVoteStart(v)} disabled={dateDisable}/>
                            <DatePicker 
                                label="종료" value={voteEnd} format={"YYYY/MM/DD"}
                                onChange={(v)=>setVoteEnd(v)} disabled={dateDisable}
                            />
                        </div>
                    </div>
                    <div className="expire-date doc-expire">
                        <div className="title-tooltip">
                            <span>카테고리 유효 기간</span>
                            <Tooltip title="카테고리와 카테고리 내 글이 사용자에게 보여지는 기간입니다. 카테고리 생성 시 시작되며, 종료 날짜의 23시 59분 59초까지 진행됩니다. 카테고리 유효 기간은 투표 기간과 같거나 길어야 합니다." arrow>
                                <HelpOutlineOutlinedIcon sx={{ color: "#888888" }}/>
                            </Tooltip>
                        </div>
                        <div className="calander">
                            <DatePicker
                                label="시작" value={tagStart} format={"YYYY/MM/DD"} 
                                onChange={(v)=>setTagStart(v)} maxDate={voteStart} disabled={dateDisable}/>
                            <DatePicker
                                label="종료" value={tagEnd} format={"YYYY/MM/DD"}
                                onChange={(v)=>setTagEnd(v)} minDate={voteEnd} disabled={dateDisable}
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
                            <Switch onChange={(e)=>setAllow(e.target.checked)} checked={allow || false} disabled={dateDisable}/> {/*왜 false를 달아줘야하지*/}
                            <button disabled={!allow} onClick={()=>setIsOpen(true)}><GroupAddIcon color={allow === false ? "disabled" : "action"}/></button>
                            <WhiteListDialog isOpen={isOpen} setIsOpen={setIsOpen} whiteList={whiteList} setWhiteList={setWhiteList} state={state}/>
                        </div>
                    </div>
                    <div id="goal-set">
                        <div className="title-tooltip">
                            <span>목표치</span>
                            <Tooltip title="카테고리 내 글의 공통 목표 투표 수입니다. 1부터 1000까지 입력 가능합니다." arrow>
                                <HelpOutlineOutlinedIcon sx={{ color: "#888888" }}/>
                            </Tooltip>
                        </div>
                        <input type="number" min="1" max="1000" value={goal || ''} onChange={(e)=>handleGoalInput(e, setGoal)} disabled={dateDisable}/>
                    </div>
                    <div className="toggle-box anony">
                        <div className="title-tooltip">
                            <span>익명 투표</span>
                            <Tooltip title="스위치를 키면 투표를 익명으로 진행합니다. 글 작성자 및 관리자는 해당 글에 투표한 사용자의 목록을 볼 수 없습니다." arrow>
                                <HelpOutlineOutlinedIcon sx={{ color: "#888888" }}/>
                            </Tooltip>
                        </div>
                        <Switch onChange={(e)=>setAnony(e.target.checked)} checked={anony} disabled={toggleDisable}/>
                    </div>
                    <div className="toggle-box multiple">
                        <div className="title-tooltip">
                            <span>중복 투표 허용</span>
                            <Tooltip title="스위치를 키면 중복 투표가 가능해집니다. 카테고리 내 여러 글에 다중으로 투표 할 수 있습니다." arrow>
                                <HelpOutlineOutlinedIcon sx={{ color: "#888888" }}/>
                            </Tooltip>
                        </div>
                        <Switch onChange={(e)=>setMultiple(e.target.checked)} checked={multiple} disabled={toggleDisable}/>
                    </div>
                </div>
            </LocalizationProvider>
            <div id="buttons">
                {state === 0 && <button id="post-button" onClick={()=>createCategory(reqBody)}>카테고리 생성</button>}
                {state === 1 && today.isBefore(tagEnd) && (<button id="close-button" onClick={()=>closeCategory(categoryId)}>카테고리 즉시 종료</button>)}
                {state === 2 && (<button id="edit-button" onClick={()=>editCategory(reqBody, categoryId, setState, queryClient)}>카테고리 수정</button>)}
                {state !== 0 && <button id="delete-button" onClick={()=>deleteCategory(categoryId)}>카테고리 삭제</button>}
            </div>
        </div>
    )
}

export default CategoryDetail;