import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import useDraggable from "./useDraggable";
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import PopoverContent from 'react-bootstrap/PopoverContent'
import PopoverTitle from 'react-bootstrap/PopoverTitle'
import './TshirtTextDrag.css'




const TshirtTextDrag = ({ children }) => {

    let leftPx=155

 

const left= ()=>{
    const pic = document.getElementById("pic")
    leftPx=leftPx-10;
pic.style.left=`${leftPx}px`

}


const right=()=>{
    
    const pic = document.getElementById("pic")
    leftPx=leftPx+10;
    pic.style.left=`${leftPx}px`
 

}
    
    const cardRef = useRef(null);
    useDraggable(cardRef);

    const handleChange = (e) => {
        const tshirtText = document.getElementById("tshirt").value;
        document.getElementById("pic").innerText = tshirtText;
    }
    



    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Popover right</Popover.Title>
            <Popover.Content>
                <input id="tshirt" type="text" />
                <button onClick={handleChange} className="btn btn-success">Submit</button>
                
                <div class="d-flex justify-content-around">
             
                    <button onClick={left}>left</button>
                    <button onClick={right}>Right</button>
                </div>
            </Popover.Content>
        
        </Popover>
    );




    return (
        <div class="d-flex flex-column bd-highlight mb-3">
            <img style={{ width: '30%', height: '30%' }} src={'https://tse1.mm.bing.net/th?id=OIP.8Mo6M1kYCqDMFy7bxXLuegHaHa&pid=Api&P=0&w=300&h=300'} alt="" />
            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                <Button style={{ width: '30%', height: '15%' }} variant="success">Add Text</Button>
            </OverlayTrigger>
            <div id="pic" className="pict" ref={cardRef}>
                {children}
                
            </div>

        </div>
    );
};

export default TshirtTextDrag;