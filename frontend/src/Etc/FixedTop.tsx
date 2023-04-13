import { useMediaQuery } from 'react-responsive';
import './FixedTop.css';

function FixedTop() {
    const isDesktop: boolean = useMediaQuery({query: '(min-width: 769px)'})
    const isMobile: boolean = useMediaQuery({query: '(max-width: 768px)'});
    
    //props로 admin 권한 확인 추가
    const Layout = (): JSX.Element => {
        return (
            <div id="fixed-top">
                <div id="logo">42 Vote</div>
                <div id="button-wrap">
                    <button id="new-post-button">
                        <span>New Post</span>
                    </button>
                    <button id="my-profile-button" className="img-button"></button>
                    <button id="admin-button" className="img-button"></button>
                </div>
            </div>
        )
    }

    return (
        <>
            {isMobile && <div id="mobile"><Layout/></div>}
            {isDesktop && <div id="desktop"><Layout/></div>}
        </>
    )
}

export default FixedTop;