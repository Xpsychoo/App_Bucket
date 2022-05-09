import React, {useState} from 'react'


function Forms(props) {

    const [Text,setText] = useState('')
    const handleUpClick = () => {
        let newText= Text.toUpperCase();
        setText(newText)
        props.showAlert("text has been transformed to Uppercase", "success")
    }
    const handleDownClick = () => {
        let newText= Text.toLowerCase();
        setText(newText)
        props.showAlert("text has been transformed to Lowercase", "success")

    }
    const handleClearClick = () => {
        let newText= '';
        setText(newText);
        props.showAlert("textarea cleared successfully", "success")
    }

    const handleCopy = () => {
        console.log('text is copiedd');
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied Successfully", "success")
    }
    const handleExtraSpaces = () => {
      let newText = Text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed", "success")
    }
    const handleSpeak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.Text = Text;
      window.speechSynthesis.speak(msg);
      console.log(msg);
      props.showAlert("is she speaking?", "success")

  }


    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // settext("newtext");

  return (
    <>
    <div className="container">
    <h1 className='text-center my-3'>{props.Heading}</h1>
    <form className="row g-3">

    <textarea id='myBox' value={Text} style={{backgroundColor: props.mode === 'light'?'#fff':'#212529',color: props.mode === 'light'?'#212529':'#fff',border: props.mode === 'light'?'1px solid #212529':'1px solid #fff' }} onChange={handleOnChange} cols="30" rows="10"></textarea>
      </form>
      <div className="col-12 mt-3">
          <button onClick={handleUpClick} className="mx-2 btn btn-primary">To Uppercase</button>
          <button onClick={handleDownClick} className="mx-2 btn btn-primary">To Lowercase</button>
          <button onClick={handleClearClick} className="mx-2 btn btn-primary">Clear</button>
          <button onClick={handleCopy} className="mx-2 btn btn-primary">Copy</button>
          <button onClick={handleSpeak} className="mx-2 btn btn-primary">Speak</button>
          <button onClick={handleExtraSpaces} className="mx-2 btn btn-primary">Remove Spaces</button>
        </div>
      <p></p>
        </div>
        <div className="container my-3">
            <h3>Text summary</h3>
            <p>{Text.split(" ").filter((element) => {return element.length!== 0}).length} Words and {Text.length} Characters</p>
            <p>{0.008 * Text.split(" ").length} Minutes to read</p>
            <h3 className="my-3">Preview</h3>
            <p>{Text.length>0?Text:"Enter your text To preview"}</p>
        </div>
    </>
  )
}

export default Forms