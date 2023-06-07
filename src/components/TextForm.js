import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
  }
  const handleClearText = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text is cleared", "success")

  }
  const handleOnChange = (event) => {
    console.log("On Change")
    setText(event.target.value)
  }
  const handleLoClick = () => {
    console.log("LowerCase was clicked")
    let newText = text.toLocaleLowerCase()
    setText(newText)
    props.showAlert("Converted to lowercase", "success")

  }
  const handleCopy = () => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied", "success")

  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces", "success")

  }
  const [text, setText] = useState('');
  // text = "new Text" ; // Wrong way to change the state
  // setText = ("new Text") ; // Correct way to change the state
  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h4>{props.heading} </h4>
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label">Enter Your Text Below:-</label>
          <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'light', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Place</button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
      </div>
      <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h4>Your Text Summary</h4>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} Minutes Read </p>
        <h5>Preview</h5>
        <p>{text.length > 0 ? text : "Enter Something into text box to preview it"}</p>
      </div>
    </>
  )
}
