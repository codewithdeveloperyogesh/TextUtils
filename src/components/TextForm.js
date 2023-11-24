import React from 'react'

export default function TextForm(props){
    return(
        <div class="container">
            <h1></h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary">Change to uppercase</button>
        </div>
    )
}