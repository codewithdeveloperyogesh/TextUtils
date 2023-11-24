import React, { useState } from 'react'

export default function ChangeCase(props){

    const handleUpClick = () =>{
        let upText = text.toUpperCase();
        setText(upText);
    }
    
    const handleLowClick = () =>{
        let lowText = text.toLowerCase();
        setText(lowText);
    }
    
    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        let copiedText = text.length;
        if(copiedText >= '1'){
            props.showAlert("Text has been copied", "success")
        }
        else{
            props.showAlert("Please write something in the box to copy", "warning")
        }
        
    }

    const handlCapitalize = () =>{
        let titleCase = text.toLowerCase()
                        .split(' ')
                        .map(word => {
                        return word
                        .charAt(0)
                        .toUpperCase() + word.slice(1);
        }).join(' ');    
       setText(titleCase);
    }

    const readTxt = (event) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = function(event){
            setText(event.target.result);
        };
        reader.readAsText(file);
    }

    const handleClrClick = () =>{
        setText('');
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");


    return(
        <>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
                <input type="file" className="form-control btn btn-primary my-3" accept="text/plain" onChange = {readTxt}/>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handlCapitalize}>Capitalize</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleClrClick}>Clear</button>
        </div>

        <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
            <p>{text.split(/\s+/).filter((word) => word !== "").length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}