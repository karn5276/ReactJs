import React, { useEffect, useState } from 'react';
// import './Home.js';
import './Home.css'

export default function Home() {

    const [font, setFont] = useState("");
    const [size, setSize] = useState(48);
    const [color, setColor] = useState("black");
    const [text, setText] = useState("New Text");
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [border,setborder]=useState(false);

    const handleDragStart = (e) => {
        // Record the initial position of the text
        const offsetX = e.clientX - position.x;
        const offsetY = e.clientY - position.y;
        e.dataTransfer.setData('text/plain', null);
    
        const handleDragMove = (e) => {
          // Update the position of the text as the user drags it
          const x = e.clientX - offsetX;
          const y = e.clientY - offsetY;
          setPosition({ x, y });
          setborder(true);
        };
    
        const handleDragEnd = () => {
          // Remove the event listeners when the drag ends
          window.removeEventListener('mousemove', handleDragMove);
          window.removeEventListener('mouseup', handleDragEnd);
          setborder(false);
          
        };
    
        // Attach event listeners for mousemove and mouseup
        window.addEventListener('mousemove', handleDragMove);
        window.addEventListener('mouseup', handleDragEnd);
      };

    
    const P_STYLE = {
        fontSize: `${size}px`,
        color: `${color}`,
        fontFamily: `${font}`,
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
        cursor: 'grab',
        border:border?"2px dashed black":""
        
    }

    return (
        <div className="wraper">
            <div className="Screen">
                <p style={P_STYLE} draggable="true"
                    onDragStart={handleDragStart}>
                    {text}
                </p>

            </div>

            <div className="container">
                <div>
                    <label htmlFor="" id='font-label'>Font</label><br></br>
                    <select name="" id="font" onChange={(e) => setFont(e.target.value)}>
                        <option>Verdana, Geneva, Tahoma, sans-serif</option>
                        <option>Arial, Helvetica, sans-serif</option>
                        <option>monospace</option>
                        <option>fantasy</option>
                        <option>cursive</option>
                        <option>'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif</option>
                        <option>'Courier New', Courier, monospace</option>
                    </select>
                    <br></br>

                    <label id='size-label'>Size</label><br></br>
                    <input type="number" placeholder={size} onChange={(e) => setSize(e.target.value)} id='size' step={2} max={60} />
                    <label id="color-label" htmlFor="">Color</label><br></br>
                    <input type="color" onChange={(e) => setColor(e.target.value)} name="" id="color" />
                </div>
                <div className='AddText'>
                    <input onChange={(e) => setText(e.target.value)} type='text' placeholder='ADD TEXT'></input>
                </div>
            </div>
        </div>
    )
}

