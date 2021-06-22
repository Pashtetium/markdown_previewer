const marked = require("marked");

marked.setOptions({
    breaks: true
  });

const Preview = props => {
    return (
        <div id="preview" className="monitor">
            <div 
                id="innerHtml"
                className="textOnScreen" 
                dangerouslySetInnerHTML={{
                    __html: marked(props.markdown)
                }}
            /> 
        </div>          
    )
}

export default Preview;