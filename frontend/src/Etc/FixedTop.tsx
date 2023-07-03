import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import './FixedTop.css';

interface FixedTopProps {
    isAdmin: boolean
}

function FixedTop(props: FixedTopProps) {
    const isDesktop = useMediaQuery({query: '(min-width: 769px)'})
    const navi = useNavigate();
    
    return (
        <div id={isDesktop ? "desktop-top" : "mobile-top"}>
            <div id="fixed-top">
                <div id="logo" onClick={()=>navi("/main")}>42 Vote</div>
                <div id="button-wrap">
                    <button id="new-post-button" onClick={()=>{navi("/posting"); window.location.reload()}}>
                        <span>New Post</span>
                    </button>
                    <button id="my-profile-button" className="img-button" onClick={()=>navi("/mypage")}/>
                    {props.isAdmin && <button id="admin-button" className="img-button" onClick={()=>navi("/admin")}/>}
                </div>
            </div>
        </div>
    )
}

export default FixedTop;