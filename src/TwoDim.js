import React from 'react';
import { useRef } from 'react';
import SendTimeData from './TimePointDataDims';
import Send from './AddDataDims';

const ballRadius = 10;
const centerX = 125;
const centerY = 125;
const distanceFromCenter = 100;
let R;
let rect;
let R_con = [];
let classN = "";
let Q_id = ["test"];
let timer_id;
let X;
let Y;
let X_data;
let Y_data;
let x = centerX + distanceFromCenter*Math.cos(0);
let y = centerY + distanceFromCenter*Math.sin(0);

export const TwoDimMove = ({classNum, Q_id}) =>{
    let timer = 0;
    const canvasRef = useRef(null);
    
    const getContext = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.canvas.width = centerX*2;
        ctx.canvas.height =  centerY*2;
        //console.log(ctx.canvas.width);
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
        timer += 0.5;
        console.log("rwar");
    };

    function Settimer(){
        SendTimeData(timer, Q_id);
        Send(Q_id);
        console.log("test");
    };

    function shape(e){
        //console.log(e);
        document.body.style.overflow = "hidden";
        //console.log(document.body.style.overflow);
        let ctx = getContext();
        let canvas = canvasRef.current.getBoundingClientRect();

        X =  e.clientX-canvas.left; //windowDimensions.width //+ ballRadius;
        if(X < ballRadius){
            X = ballRadius;
        }
        else if(X > canvas.width-ballRadius){
            X = canvas.width-ballRadius;
        }

        Y=  e.clientY-canvas.top;//windowDimensions.height //+ ballRadius;
        if(Y < ballRadius){
            Y = ballRadius;
        }
        else if(Y > canvas.height-ballRadius){
            Y = canvas.height-ballRadius;
        }

        X_data = X-centerX;
        Y_data = -(Y-centerY);

        //console.log(X_data,Y_data);

        
        //console.log("x-",X," y-",Y);;;
        //console.log(rect);

        //console.log(centerY+body_margin_top - Y);

        //console.log("x",x,",y",y);

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        //console.log(ctx.canvas.height);
        //console.log(ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "#0095DD";
        ctx.beginPath();
        ctx.arc(X, Y, ballRadius, 0, Math.PI*2);        
        ctx.fill();
        ctx.closePath();

        //座標ここで記録してくれ
        //R_con.push(R);
        
        //console.log(x," & ",y);
        
    }

    function touchShape(e){
        e.preventDefault();
        console.log(e);
        document.body.style.overflow = "hidden";
        //console.log(document.body.style.overflow);
        let ctx = getContext();
        let canvas = canvasRef.current.getBoundingClientRect();

        X = e.changeTouches[0].clientX-canvas.left; //windowDimensions.width //+ ballRadius;
        Y=  e.changeTouches[0].clientY-canvas.top;//windowDimensions.height //+ ballRadius;
        //console.log(X,Y);

        
        //console.log("x-",X," y-",Y);
        R = -(Math.atan2(centerX/*+body_margin_left*/ - X,centerY/*+body_margin_top*/ - Y)+Math.PI*3/2);
        rect = -(R+Math.PI);
        //console.log(rect);
        if(rect<0){
            rect += Math.PI*2;
        }
        //console.log(centerY+body_margin_top - Y);
        x = - distanceFromCenter* Math.cos(R) + centerX;
        y = - distanceFromCenter* Math.sin(R) + centerY;
        //console.log("x",x,",y",y);

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

    function F_shape(){
        document.body.style.overflow = "hidden";
        //console.log(document.body.style.overflow);
        let ctx = getContext();
        let canvas = canvasRef.current.getBoundingClientRect();

        X = 0; //windowDimensions.width //+ ballRadius;
        Y= 0;//windowDimensions.height //+ ballRadius;
        //console.log(X,Y);

        
        //console.log("x-",X," y-",Y);
        R = -(Math.atan2(centerX/*+body_margin_left*/ - X,centerY/*+body_margin_top*/ - Y)+Math.PI*3/2);
        rect = -(R+Math.PI);
        //console.log(rect);
        if(rect<0){
            rect += Math.PI*2;
        }
        //console.log(centerY+body_margin_top - Y);
        x = - distanceFromCenter* Math.cos(R) + centerX;
        y = - distanceFromCenter* Math.sin(R) + centerY;
        //console.log("x",x,",y",y);

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        //console.log(ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "#0095DD";
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);        
        ctx.fill();
        ctx.closePath();

        R_con.push(R);
    }



    function Move(e){
        shape(e);
        //alert("tets");
        window.addEventListener("mousemove", shape);
        setInterval(timeCnt,500);
        timer_id = setInterval(Settimer,1000);
    }

    // function ScrollManage(e){
        
    // }
    
    // function TouchManage(e){
    //     window.addEventListener("touchstart",ScrollManage(e),{ passive:false })
    // }

    function MoveTouch(e){  
        e.preventDefault();    
        touchShape(e);
        setInterval(timeCnt,500);
        timer_id = setInterval(Settimer,500);
    }

    function Remove(){
        document.body.style.overflow = "auto";
        window.removeEventListener("mousemove",shape);
        clearInterval(timer_id);
        //console.log("test");
    }

    function RemoveTouch(){
        document.body.style.overflow = "auto";
        window.removeEventListener("touchmove",shape);
        clearInterval(timer_id);
        //console.log("test");
    }
    
    classN = "handle" + classNum.toString() + " handleLayer";
    return <canvas className={classN} ref={canvasRef} onLoad={F_shape} onMouseDown={Move} onMouseUp={Remove} onMouseLeave={Remove} onTouchMove={(e) => MoveTouch(e)} onTouchEnd={RemoveTouch} onTouchCancel={RemoveTouch}></canvas>    
}

export default TwoDimMove;
export {X_data, Y_data}