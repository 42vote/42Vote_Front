import { useMediaQuery } from 'react-responsive';
import './FixedTop.css';
import { useNavigate } from 'react-router-dom';

function FixedTop() {
    const isDesktop: boolean = useMediaQuery({query: '(min-width: 769px)'})
    const isMobile: boolean = useMediaQuery({query: '(max-width: 768px)'});
    const navi = useNavigate();

    //props로 admin 권한 확인 추가
    //로고 클릭시 main 이동

    const Layout = (): JSX.Element => {
        return (
            <div id="fixed-top">
                <div id="logo" onClick={()=>navi("/main")}>42 Vote</div>
                <div id="button-wrap">
                    <button id="new-post-button" onClick={()=>navi("/posting")}>
                        <span>New Post</span>
                    </button>
                    <button onClick={()=>navi("/mypage")} id="my-profile-button" className="img-button"></button>
                    <button id="admin-button" className="img-button"></button>
                </div>
            </div>
        )
    }
    
    return (
        <>
            {isMobile && <div id="mobile-top"><Layout/></div>}
            {isDesktop && <div id="desktop-top"><Layout/></div>}
        </>
    )
}

export default FixedTop;