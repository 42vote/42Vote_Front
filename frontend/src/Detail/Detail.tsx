import FixedTop from '../Etc/FixedTop';
import { useMediaQuery } from 'react-responsive';
import Swal from 'sweetalert2';
import './Detail.css';
import { NavigateFunction, useNavigate } from 'react-router-dom';

function Detail() {
    //url에서 도큐먼트 번호따와서 api 요청하고 없으면 (404) notfound로 연결
    const isDesktop: boolean = useMediaQuery({query: '(min-width: 769px)'})
    const isMobile: boolean = useMediaQuery({query: '(max-width: 768px)'});
    const nav: NavigateFunction = useNavigate();
    
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

    const data: document = {
        title: '✨ 최애의 아이 ✨',
        content: '일본의 만화. 카구야 님은 고백받고 싶어의 아카사카 아카가 스토리를, 쓰레기의 본망의 요코야리 멩고가 작화를 맡았다. \'카구야 님\'과 같은 주간 영 점프에 동시 연재 중이다. 원제는 \'오시(推し)의 아이\'이며 한국어판에선 오시를 최애라는 단어로 의역하였다. 최애와 오시가 완전히 같지는 않으나 만화를 이해하는 데에는 문제가 없다. 자세한 차이는 각각의 문서 참고. \n\n\n이상의 최애의 아이 1편을 모두 보고 왔으면 좋겠습니다.\n\n',
        author: 'sojoo',
        isAuthor: true,
        createAt: "2023-03-21T12:30:00.000Z",
        voteExpiredAt: "2023-05-21T09:22:00.000Z",
        goal: 4,
        voteCnt: 2,
        isVote: false,
        isVoteExpired: false,
        image: ['https://i1.ruliweb.com/thumb/23/04/07/1875af7eea934d9e5.jpg', 'https://ccdn.lezhin.com/v2/comics/5469317090312192/images/tall.jpg?updated=1634099797967&width=840', 'https://tvstore-phinf.pstatic.net/20230413_238/16813549589071Xlji_JPEG/00041.jpg']
    } // API 응답 받아놓는 부분 (useQuery 쓰려면 API 요청 함수 만들기)

    const now: Date = new Date();
    const expire: Date = new Date(data.voteExpiredAt);
    const imgFileEl: HTMLElement | null = document.getElementById('img-file');
    const voteButtonEl: HTMLButtonElement = document.getElementById('vote-button') as HTMLButtonElement;

    if (now >= expire) {
        imgFileEl?.classList.add('expire');
        voteButtonEl.classList.remove('open');
        voteButtonEl.classList.add('expire');
        voteButtonEl.innerText = 'close';
        voteButtonEl.disabled = true;
    } else if (data.isVote)
        voteButtonEl.classList.add('voted');

    //여기까지를 useEffect에 넣고 싶은데?

    const TimeLine = (): string => {
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
        })
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
                //뒤에 블러 할까? 말까? blur filter가 transition 때문에 살짝 느리게 뜸
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
        const target: HTMLElement = event.target as HTMLButtonElement;
        const progressBar: HTMLElement = document.getElementById('progress-bar-in') as HTMLDivElement;

        if (target.classList.contains('voted')) {
            target.classList.remove('voted');
            //투표 취소 api
            data.voteCnt--;
        }
        else {
            target.classList.add('voted');
            //투표 api
            data.voteCnt++
        }
        //너무 여러번 누를 수도 있으니까 페이지를 떠날때 cnt가 다르면 api를 보낼까?
        //근데 그건 어케 하지
        progressBar.style.width = (data.voteCnt / data.goal * 100) + '%';
        progressBar.textContent = data.voteCnt + ' / ' + data.goal;
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
                //삭제 api
                Swal.fire('삭제되었습니다.').then(() => {
                    nav('/main');
                });
            }
        });
    }

    const Layout = (): JSX.Element => {
        return (
            <div id="detail">
                <div id="title">{data.title}</div>
                <div id="content-wrapper">
                    <div id="img-section">
                        <button id="img-left" onClick={event => ImgArrowClick(event, -1)}></button>
                        <div id="img-file" style={{backgroundImage: 'url(' + data.image[0] + ')'}}>
                            {
                                data.image.map((img, idx) => (
                                    idx === 0 ? <img className="doc-img active" src={img} alt="img"/> :
                                    <img className="doc-img" src={img} alt="img"/>
                                ))
                            }
                            <div id="img-nav">
                                {
                                    data.image.map((img, idx) => (
                                        idx === 0 ? <div className="nav active" onClick={ImgNavClick}></div>
                                        : <div className="nav" onClick={ImgNavClick}></div>
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
                    <div id="progress-bar-in" style={{width: (data.voteCnt / data.goal * 100) + '%'}}>{data.voteCnt} / {data.goal}</div>
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

    return (
        <>
            {isMobile && <div id="mobile"><FixedTop/><Layout/></div>}
            {isDesktop && <div id="desktop"><FixedTop/><Layout/></div>}
        </>
    )
}

export default Detail;