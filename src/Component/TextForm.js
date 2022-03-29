import React, {useState} from 'react'

export default function TextForm(props) {
    
    const [text, setText] = useState('');

    const handleUpClick = ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick = ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleClrClick = ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared","success");
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard","success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed","success");
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea 
                    className="form-control" 
                    id="myBox" 
                    value={text}
                    // style={{background: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}}
                    onChange={handleOnChange}
                    rows="8">
                </textarea>
            </div>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.btnColor} mx-2 my-2`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.btnColor} mx-2 my-2`} onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.btnColor} mx-2 my-2`} onClick={handleClrClick}>Clear Text</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.btnColor} mx-2 my-2`} onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.btnColor} mx-2 my-2`} onClick={handleExtraSpaces}>Remove Extra Space</button>


        </div>
        <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>Total Characters = {text.length}</p>
            <p>Total Words = {text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}
