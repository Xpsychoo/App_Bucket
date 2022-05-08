import React, {useState} from 'react'


function Forms(props) {

    const [Text,setText] = useState('')
    const handleUpClick = () => {
        let newText= Text.toUpperCase();
        setText(newText)
    }
    const handleDownClick = () => {
        let newText= Text.toLowerCase();
        setText(newText)
    }
    const handleReverse = () => {
        let newText= Text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.Text = Text;
        window.speechSynthesis.speak(msg);
        console.log(msg);
    }
    // settext("newtext");

  return (
    <>
    <div className="container">
    <h1 className='text-center my-3'>{props.Heading}</h1>
    <form className="row g-3">

    <textarea value={Text} style={{backgroundColor: props.mode === 'light'?'#fff':'#212529',color: props.mode === 'light'?'#212529':'#fff',border: props.mode === 'light'?'1px solid #212529':'1px solid #fff' }} onChange={handleOnChange} cols="30" rows="10"></textarea>
        <div className="col-12">
          <button type="submit" onClick={handleUpClick} className="mx-2 btn btn-primary">To Uppercase</button>
          <button type="submit" onClick={handleDownClick} className="mx-2 btn btn-primary">To Lowercase</button>
          <button type="submit" onClick={handleReverse} className="mx-2 btn btn-primary">speak</button>
        </div>
      </form>
      <p></p>
        </div>
        <div className="container my-3">
            <h3>Text summary</h3>
            <p>{Text.split(" ").length} Words and {Text.length} Characters</p>
            <p>{0.008 * Text.split(" ").length} Minutes to read</p>
            <h3 className="my-3">Preview</h3>
            <p>{Text}</p>
        </div>
    </>
  )
}

export default Forms