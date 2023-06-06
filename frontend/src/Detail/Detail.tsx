import FixedTop from '../Etc/FixedTop';
import { useMediaQuery } from 'react-responsive';
import Swal from 'sweetalert2';
import './Detail.css';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { customAxios } from '../Lib/customAxios';
import { useQuery } from '@tanstack/react-query';
import { SlideImage } from './SlideImage';
import DetailLoading from './DetailLoading';
import NotFound from '../Etc/NotFound';
import { useState } from 'react';
import StatDialog from './StatDialog';

interface document {
    title: string,
    content: string,
    author: string,
    isAuthor: boolean,
    createAt: string,
    voteExpiredAt: string,
    goal: number,
    voteCnt: number,
    isVote: boolean,
    isVoteExpired: boolean,
    image: string[]
}

function Detail() {
    const isDesktop: boolean = useMediaQuery({query: '(min-width: 769px)'});
    const isMobile: boolean = useMediaQuery({query: '(max-width: 768px)'});
    const nav: NavigateFunction = useNavigate();
    const docId: number = Number(window.location.pathname.split('/')[2]);
    const [isOpen, setIsOpen] = useState(false);

    const getData = async () => {
        const res = await customAxios().get('/document/' + docId);
        return res.data;
    }
    
    const { data, isLoading, isError } = useQuery<document>(['detail/' + docId], getData, {retry: false, staleTime: 60 * 1000, refetchOnWindowFocus: false, refetchOnMount: 'always'});

    if (isLoading)
        return (<DetailLoading/>);

    if (isError)
        return (<NotFound/>);


    const TimeLine = (): string => {
        if (data) {
            let result: string = '';
            const create: Date = new Date(data.createAt);
            const expire: Date = new Date(data.voteExpiredAt);
    
            result += String(create.getFullYear()).slice(-2) + '-' +
                String(create.getMonth() + 1).padStart(2, '0') + '-' +
                String(create.getDate()).padStart(2, '0') + ' ~ ' +
                String(expire.getFullYear()).slice(-2) + '-' +
                String(expire.getMonth() + 1).padStart(2, '0') + '-' +
                String(expire.getDate()).padStart(2, '0');
            
            return result;
        }
        return '';
    }


    const Vote = (event: React.MouseEvent<HTMLButtonElement>): void => {
        if (data) {
            const target: HTMLElement = event.target as HTMLButtonElement;
            const progressBar: HTMLElement = document.getElementById('progress-bar-in') as HTMLDivElement;
            const count: HTMLDivElement = document.getElementById('count') as HTMLDivElement;
    
            if (target.classList.contains('voted')) {
                target.classList.remove('voted');
                target.setAttribute('disabled', '');
                customAxios().delete('/vote/me', {data: {documentId: docId}}).then(() => {
                    target.removeAttribute('disabled');
                });
                data.voteCnt--;
            }
            else {
                target.classList.add('voted');
                target.setAttribute('disabled', '');
                customAxios().post('/vote/me', {documentId: docId}).then(() => {
                    target.removeAttribute('disabled');
                });
                data.voteCnt++
            }
            progressBar.style.width = (data.voteCnt / data.goal * 100) + '%';
            count.textContent = data.voteCnt + ' / ' + data.goal;
        }
    }

    const DocDelete = (): void => {
        Swal.fire({
            text: '글을 삭제하시겠습니까?',
            showCancelButton: true,
            confirmButtonColor: 'white',
            cancelButtonColor: '#383838',
            confirmButtonText: 'Delete'
        }).then((res) => {
            if (res.isConfirmed) {
                customAxios().delete('/document/' + docId).then(() => {
                    Swal.fire('삭제되었습니다.').then(() => {
                        nav('/main');
                    });
                }).catch((err) => {
                    if (err.response.status === 404)
                        return (<NotFound/>)
                });
            }
        });
    }

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
                                    <div id="date">{TimeLine()}</div>
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
                        {
                            data.isAuthor ?
                            (
                                <div id="author-button">
                                    <button id="doc-delete" onClick={DocDelete}>Delete</button>
                                    <button id="doc-stat" onClick={()=>setIsOpen(true)}>Stat</button>
                                </div>
                            ) : (
                                data.isVoteExpired ? <button id="vote-button" className={(data.isVote ? 'voted ' : '') + 'expire'} onClick={Vote} disabled>close</button> :
                                <button id="vote-button" className={(data.isVote ? 'voted ' : '') + 'open'} onClick={Vote}>support</button>
                            )
                        }
                    </div>
                )
            }
            <StatDialog isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    )
}

export default Detail;