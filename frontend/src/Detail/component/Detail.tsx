import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Document } from '../interface/DetailInterface';
import { SlideImage } from '../page/SlideImage';
import { getDocData } from '../service/GetData';
import TimeLine from '../page/TimeLine';
import DocDelete from '../page/DocDelete';
import Voting from '../page/Voting';
import DetailLoading from './DetailLoading';
import StatDialog from './StatDialog';
import NotFound from '../../Etc/NotFound';
import '../style/Detail.css';

function Detail() {
    const nav = useNavigate();
    const isDesktop = useMediaQuery({query: '(min-width: 769px)'});
    const docId = Number(window.location.pathname.split('/')[2]);
    const [isOpen, setIsOpen] = useState(false);
    const { data, isLoading, isError } = useQuery<Document>(['detail/' + docId], ()=>getDocData(docId), {retry: false, staleTime: 60 * 1000, refetchOnWindowFocus: false, refetchOnMount: 'always'});

    if (isLoading)
        return (<DetailLoading/>);

    if (isError)
        return (<NotFound/>);

    return (
        <div id={isDesktop ? "desktop" : "mobile"}>
            {
                data && (
                    <div id="detail">
                        <div id="title">{data.title}</div>
                        <div id="content-wrapper">
                            <div id="img-section">
                                {
                                    data.image.length > 1 &&
                                    <button id="img-left" onClick={event => SlideImage.ImgArrowClick(event, -1)}/>
                                }
                                <div id="img-file" className={data.isVoteExpired ? 'expire' : ''} style={{backgroundImage: 'url(' + data.image[0] + ')'}}>
                                    {
                                        data.image.map((img, idx) => (
                                            idx === 0 ? <img className="doc-img active" src={img} key={img} alt="img"/> :
                                            <img className="doc-img" src={img} key={img} alt="img"/>
                                        ))
                                    }
                                    <div id="img-nav">
                                        {
                                            data.image.length > 1 &&
                                            data.image.map((img, idx) => (
                                                idx === 0 ? <div className="nav active" onClick={SlideImage.ImgNavClick} key={img}></div>
                                                : <div className="nav" onClick={SlideImage.ImgNavClick} key={img}></div>
                                            ))
                                        }
                                    </div>
                                </div>
                                {
                                    data.image.length > 1 &&
                                    <button id="img-right" onClick={event => SlideImage.ImgArrowClick(event, 1)}/>
                                }
                            </div>
                            <div id="txt-section">
                                <div id="info-wrapper">
                                    <div id="author">{data.author}</div>
                                    <div id="date">{TimeLine(new Date(data.createAt), new Date(data.voteExpiredAt))}</div>
                                </div>
                                <div id="descript">{data.content}</div>
                            </div>
                        </div>
                        <div id="progress-bar">
                            <div id="progress-bar-out">
                                <div id="progress-bar-in" style={{width: (data.voteCnt / data.goal * 100) + '%'}}></div>
                            </div>
                            <div id="count">{data.voteCnt} / {data.goal}</div>
                        </div>
                        <div id="buttons">
                        {
                            !data.isAuthor &&
                            <div id="user-button">
                                {data.isVoteExpired ? <button id="vote-button" className={(data.isVote ? 'voted ' : '') + 'expire'} onClick={(e)=>Voting(e, docId, data)} disabled>Close</button> :
                                <button id="vote-button" className={(data.isVote ? 'voted ' : '') + 'open'} onClick={(e)=>Voting(e, docId, data)}>Support</button>}
                            </div>
                        }
                        {
                            (data.isAdmin || data.isAuthor) &&
                            <div id="author-button">
                                <button id="doc-delete" onClick={()=>DocDelete(docId, nav)}>Delete</button>
                                <button id="doc-stat" onClick={()=>setIsOpen(true)}>Stat</button>
                            </div>
                        }
                        </div>
                    </div>
                )
            }
            <StatDialog docId={docId} anony={data.anonymousVote} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    )
}

export default Detail;