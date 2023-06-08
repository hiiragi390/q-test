import React from 'react';
import { useRef } from 'react';

const centerX = 150;
const centerY = 150;
const distanceFromCenter = 125;
const ballRadius = 15;
const body_margin = 100;
let R;
let rect;


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
        // const getWindowDimensions = () => {
        //                 const { innerWidth: width, innerHeight: height } = window;
        //                 return {
        //                 width,
        //                 height
        //                 };
        //             } 
        //             const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
        //             useEffect(() => {
        //                 const onResize = () => {
        //                 setWindowDimensions(getWindowDimensions());
        //                 }
        //             }
        //             )

        function shape(e){


                let ctx = getContext();
                let X =  e.clientX //windowDimensions.width //+ ballRadius;
                let Y=  e.clientY//windowDimensions.height //+ ballRadius;
                
                //console.log("x-",X," y-",Y);
                R = -(Math.atan2(centerX+body_margin - X,centerY+body_margin - Y)+Math.PI*3/2);
                rect = -(R+Math.PI);
                //console.log(R);
                x = - distanceFromCenter* Math.cos(R) + centerX;
                y = - distanceFromCenter* Math.sin(R) + centerY;

                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    //console.log(ctx.canvas.width, ctx.canvas.height);
                    ctx.fillStyle = "#0095DD";
                    ctx.beginPath();
                    ctx.arc(x, y, ballRadius, 0, Math.PI*2);        
                    ctx.fill();
                    ctx.closePath();
                
                //console.log(x," & ",y);
                
        }

        function Move(){
            window.addEventListener("mousemove", shape);
        }


        function Remove(){
            window.removeEventListener("mousemove",shape);
        }
        

            return <canvas className="handleLayer" ref={canvasRef} onMouseDown={Move} onMouseUp={Remove} onMouseLeave={Remove}></canvas>    
        }

export default HandleMove;
export {rect}