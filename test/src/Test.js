import React from 'react';
import { useRef,useEffect,useState } from 'react';

const centerX = 150;
const centerY = 150;
const distanceFromCenter = 125;
const ballRadius = 15;
const body_margin = 0;


let x = centerX + distanceFromCenter*Math.cos(0);
let y = centerY + distanceFromCenter*Math.sin(0);

export function HandleMove(){
      const canvasRef = useRef(null)

    const getContext = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.canvas.height =  ctx.canvas.width;
        return canvas.getContext('2d');
    };

//   useEffect(() => {
//     const ctx = this.getContext();
//     ctx.save();
//   })
        const getWindowDimensions = () => {
                        const { innerWidth: width, innerHeight: height } = window;
                        return {
                        width,
                        height
                        };
                    } 
                    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
                    useEffect(() => {
                        const onResize = () => {
                        setWindowDimensions(getWindowDimensions());
                        }
                    }
                    )

        const shape =(e)=>{

                let ctx = getContext();
                let X =  e.clientX //windowDimensions.width //+ ballRadius;
                let Y=  e.clientY//windowDimensions.height //+ ballRadius;
                
                //console.log("x-",X," y-",Y);
                let radius = Math.atan2(centerX - X,centerY - Y)+Math.PI;
                console.log(radius);
                x = - distanceFromCenter* Math.cos(radius) + centerX + body_margin;
                y = - distanceFromCenter* Math.sin(radius) + centerY + body_margin;

                
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                console.log(ctx.canvas.width, ctx.canvas.height);
                ctx.fillStyle = "#0095DD";
                ctx.beginPath();
                ctx.arc(x, y, ballRadius, 0, Math.PI*2);        
                ctx.fill();
                ctx.closePath();
                //console.log(x," & ",y);
        }

            

            return <canvas className="handleLayer" ref={canvasRef} onMouseDown={shape}></canvas>    
        }

export default HandleMove;