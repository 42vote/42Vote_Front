import './DetailLoading.css';

function DetailLoading() {
    return (
        <div id="detail-loading">
            <div id="title" className="skeleton-item"></div>
            <div id="content-wrapper">
                <div id="img-section">
                    <div id="img-file" className="skeleton-item"></div>
                </div>
                <div id="txt-section">
                    <div id="info-wrapper" className="skeleton-item"></div>
                    <div id="descript" className="skeleton-item"></div>
                </div>
            </div>
            <div id="progress-bar" className="skeleton-item"></div>
            <div id="author-button" className="skeleton-item"></div>
        </div>
    )
}

export default DetailLoading;