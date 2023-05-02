import './Posting.css'

function Posting() {
    return (
        <div id="posting">
            <form id="post-form">
                <input id="title" type="text" defaultValue="New Post"/>
                <div id="category-wrapper">
                    <p>Category</p>
                    <div id="radio-list">
                        {/*category list map*/}
                        <label><input type="radio" name="category" value="apple"/>TagA</label>
                        <label><input type="radio" name="category" value="banana"/>TagB</label>
                        <label><input type="radio" name="category" value="banana"/>goods</label>
                    </div>
                </div>
                <label>Goal<input id="goal" type="number" min="1"/></label>
                <label>Description<textarea id="text-area"></textarea></label>
                <div id="image-wrapper">
                    <p>Images</p>
                    <div id="file-list">
                        <input type="file"/>
                        <input type="file"/>
                        <input type="file"/>
                    </div>
                </div>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default Posting;
