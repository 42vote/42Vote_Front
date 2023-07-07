import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import './FixedTop.css';
import Cookies from 'js-cookie';

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
                    <button id="new-post-button" onClick={()=>navi("/posting")}>
                        <span>New Post</span>
                    </button>
                    <button id="my-profile-button" className="img-button" onClick={()=>navi("/mypage")}/>
                    {props.isAdmin && <button id="admin-button" className="img-button" onClick={()=>navi("/admin")}/>}
                    <button id="logout-button" className="img-button" onClick={()=>{
                        Cookies.remove("token");
                        Cookies.remove("rtoken");
                        Cookies.remove("access_token");
                        Cookies.remove("refresh_token");
                        navi("/");
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default FixedTop;