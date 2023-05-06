import FixedTop from '../Etc/FixedTop';
import { useMediaQuery } from 'react-responsive';
import Swal from 'sweetalert2';
import './Detail.css';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { customAxios } from '../lib/customAxios';
import { useQuery } from '@tanstack/react-query';
import DetailLoading from './DetailLoading';
import NotFound from '../Etc/NotFound';

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

    const getData = async () => {
        const res = await customAxios().get('/document/' + docId);
        return res.data;
    }
    
    const { data, isLoading, isError } = useQuery<document>(['detail'], getData, {retry: 0});

    if (isLoading)
        return (<div id={isMobile ? "mobile" : "desktop"}><FixedTop/><DetailLoading/></div>);

    if (isError)
        return (<div><FixedTop/><NotFound/></div>);
    
    /*--------이부분 useEffect에 안들어가면 사이즈 조절시 리셋됨--------*/
    
    const imgFileEl: HTMLElement | null = document.getElementById('img-file');
    const voteButtonEl: HTMLButtonElement = document.getElementById('vote-button') as HTMLButtonElement;

    if (data.isVoteExpired) {
        imgFileEl?.classList.add('expire');
        if (voteButtonEl) {
            voteButtonEl.classList.remove('open');
            voteButtonEl.classList.add('expire');
            voteButtonEl.innerText = 'close';
            voteButtonEl.disabled = true;
        }
    } else if (data.isVote) {
        if (voteButtonEl)
            voteButtonEl.classList.add('voted');
    }

    /*--------------------------------------------------------*/


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

    const ImgNavClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        const target: HTMLElement = event.target as HTMLDivElement;
        const targetSibling: Element[] = Array.from(target.parentElement?.children || []);
        const idx: number = targetSibling.indexOf(target);
        const images: NodeListOf<Element> | undefined = target.parentElement?.parentElement?.querySelectorAll('.doc-img');
        const background: HTMLElement = document.getElementById('img-file') as HTMLDivElement;

        targetSibling.forEach(sibling => {
            if (sibling !== target)
                sibling.classList.remove('active');
            else
                sibling.classList.add('active');
        });

        images?.forEach((img, index) => {
            if (index !== idx)
                img.classList.remove('active');
            else {
                img.classList.add('active');
                background.style.backgroundImage = 'url(' + img.getAttribute('src') + ')';
            }
        });
    }

    const ImgArrowClick = (event: React.MouseEvent<HTMLButtonElement>, direction: number): void => {
        const target: HTMLElement = event.target as HTMLButtonElement;
        const images: NodeListOf<Element> | undefined = target.parentElement?.querySelectorAll('.doc-img');
        const nav: NodeListOf<Element> | undefined = target.parentElement?.querySelectorAll('.nav');
        const background: HTMLElement = document.getElementById('img-file') as HTMLDivElement;
        let idx: number = 0;
        
        images?.forEach((img, index) => {
            if (img.classList.contains('active'))
                idx = index;
        });

        idx += direction;
        if (idx === -1) {
            idx = images ? images.length - 1 : 0;
        } else if (idx === images?.length) {
            idx = 0;
        }

        images?.forEach((img, index) => {
            if (index !== idx)
                img.classList.remove('active');
            else {
                img.classList.add('active');
                background.style.backgroundImage = 'url(' + img.getAttribute('src') + ')';
            }
        });

        nav?.forEach((nav, index) => {
            if (index !== idx)
                nav.classList.remove('active');
            else
                nav.classList.add('active');
        });
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
            confirmButtonText: 'delete'
        }).then((res) => {
            if (res.isConfirmed) {
                customAxios().delete('/document/' + docId).then(() => {
                    Swal.fire('삭제되었습니다.').then(() => {
                        nav('/main');
                    });
                }).catch((err) => {
                    if (err.response.status === 404)
                        nav('/notfound') //notfound 컴포넌트
                });
            }
        });
    }

    const Layout = (): JSX.Element => {
        return (
            <>
            {
                data && (
                    <div id="detail">
                        <div id="title">{data.title}</div>
                        <div id="content-wrapper">
                            <div id="img-section">
                                <button id="img-left" onClick={event => ImgArrowClick(event, -1)}></button>
                                <div id="img-file" style={{backgroundImage: 'url(' + data.image[0] + ')'}}>
                                    {
                                        data.image.map((img, idx) => (
                                            idx === 0 ? <img className="doc-img active" src={img} key={img} alt="img"/> :
                                            <img className="doc-img" src={img} key={img} alt="img"/>
                                        ))
                                    }
                                    <div id="img-nav">
                                        {
                                            data.image.map((img, idx) => (
                                                idx === 0 ? <div className="nav active" onClick={ImgNavClick} key={img}></div>
                                                : <div className="nav" onClick={ImgNavClick} key={img}></div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <button id="img-right" onClick={event => ImgArrowClick(event, 1)}></button>
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
                            data.isAuthor === false &&
                            <button id="vote-button" className="open" onClick={Vote}>support</button>
                        }
                        {
                            data.isAuthor && 
                            <div id="author-button">
                                <button id="doc-delete" onClick={DocDelete}>Delete</button>
                                <button id="doc-stat">Stat</button>
                            </div>
                        }
                    </div>
                )
            }
            </>
        );
    }

    return (
        <>
            {isMobile && <div id="mobile"><FixedTop/><Layout/></div>}
            {isDesktop && <div id="desktop"><FixedTop/><Layout/></div>}
        </>
    )
}

export default Detail;