const Editor = props => {
    return (
        <div id="editor" className="monitor">
            <textarea 
                value={props.markdown} 
                id="textarea"
                type="text"
                onChange={props.onChange}
            />
        </div>   
    )
}

export default Editor;
