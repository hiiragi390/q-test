import React from 'react';
import { useRef } from 'react';
import SendTimeData from './TimePointData';

const centerX = 150;
const centerY = 150;
const distanceFromCenter = 125;
const ballRadius = 15;
let R;
let rect;
let R_con = [];
let classN = "";
let Q_id;
let time = 0;
let timer_id;

let x = centerX + distanceFromCenter*Math.cos(0);
let y = centerY + distanceFromCenter*Math.sin(0);

export const HandleMove = ({body_margin_left, body_margin_top, classNum, Q_id}) =>{
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

    function timeCnt(){
        time += 0.5;
    }

    function timer(){
        //SendTimeData(time, Q_id);
    };

    function shape(e){
        let ctx = getContext();
        let X =  e.clientX //windowDimensions.width //+ ballRadius;
        let Y=  e.clientY//windowDimensions.height //+ ballRadius;
        //console.log(X,Y);
        
        //console.log("x-",X," y-",Y);
        R = -(Math.atan2(centerX+body_margin_left - X,centerY+body_margin_top - Y)+Math.PI*3/2);
        rect = -(R+Math.PI);
        if(rect<0){
            rect += Math.PI*2;
        }
        //console.log(centerY+body_margin_top - Y);
        x = - distanceFromCenter* Math.cos(R) + centerX;
        y = - distanceFromCenter* Math.sin(R) + centerY;

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        //console.log(ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "#0095DD";
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);        
        ctx.fill();
        ctx.closePath();

        R_con.push(R);
        
        //console.log(x," & ",y);
        
    }

    function Move(){
        window.addEventListener("mousemove", shape);
        setInterval(timeCnt,500)
        timer_id = setInterval(timer,500);
    }


    function Remove(){
        window.removeEventListener("mousemove",shape);
        clearInterval(timer_id);
        console.log("test");
    }
    
    classN = "handle" + classNum.toString() + " handleLayer";
    console.log(classN);
    return <canvas className={classN} ref={canvasRef} onMouseDown={Move} onMouseUp={Remove} onMouseLeave={Remove}></canvas>    
}

export default HandleMove;
export {rect}