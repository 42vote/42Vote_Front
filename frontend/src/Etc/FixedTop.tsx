import './FixedTop.css';

function FixedTop() {  
    //props로 admin 권한 확인 추가
    //로고 클릭시 main 이동
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

export default FixedTop;