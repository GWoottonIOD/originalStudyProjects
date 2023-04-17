function Comment(props) {

    return (
        <div className="Comment componentBox"> {/* using class names that match the component name is a handy convention for tracking components in the front end */}  
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {props.date.toLocaleString()}
            </div>
        </div>
    );

}

export default Comment