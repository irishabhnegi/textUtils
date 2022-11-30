import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }
    const handleLoClick = () => {
        // console.log("uppercase was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }
    const handleOnChange = (event) => {
        // console.log("on chnage")
        setText(event.target.value)
    }
    const handleClear = () => {
        setText('')
        props.showAlert("Text cleared", "success")

    }
    const handleCopy = () => {
        console.log("I am copy");
        let text = document.getElementById("myBox")
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy to clipboard", "success")

    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success")

    }
    // const delete1 = () => {
    //     let del = text.
    //         setText(del)
    // }
    const [text, setText] = useState("");
    // text = "new text"; // wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="form-floating my-3 ">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} placeholder="Leave a comment here" id="myBox" rows="8" ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove extra space</button>
            </div >

            <div className="conatiner my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} Words, {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox to preview it here"}</p>
            </div>
        </>

    )
}

