import React from 'react';
import { useRef,useState } from 'react';
import SendTimeData from './TimePointData';

const centerX = 150;
const centerY = 150;
const distanceFromCenter = 100;
const ballRadius = 15;
let R;
let rect;
let R_con = [];
let classN = "";
let Q_id;
let timer_id;
let X;
let Y;
let x = centerX + distanceFromCenter*Math.cos(0);
let y = centerY + distanceFromCenter*Math.sin(0);
const supportTouch = "ontouched" in document;
const EVENT_TouchStart = supportTouch? "touchstart":"mousedown";
const EVENT_TouchMove = supportTouch? "touchmove":"mousemove";
const EVENT_TouchEnd = supportTouch? "touchend":"mouseup";



export const HandleMove = ({classNum, Q_id}) =>{
    classN = "handle" + classNum.toString() + " handleLayer";
    const [EventLister, setEventListener] = React.useState(0);
    const EventRef = useRef();
    const [test, setTest] = useState(0);
    let timer = 0;
    const canvasRef = useRef(null);
    let TouchFlag = false;
    
    const getContext = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.canvas.height =  ctx.canvas.width;
        return canvas.getContext('2d');
    };

    alert(EVENT_TouchMove);
    React.useEffect(()=>{
        canvasRef.current.addEventListener(EVENT_TouchStart,e =>{
            alert("test");
            e.preventDefault();
            TouchFlag = true;
        })
        canvasRef.current.addEventListener(EVENT_TouchEnd,e => {
            TouchFlag = false;
        })
        canvasRef.current.addEventListener(EVENT_TouchMove,e =>{
            
            e.preventDefault();
            console.log(EVENT_TouchMove);
            if(TouchFlag){

                // e.preventDefault();
                // if(supportTouch){
                //     const ctx = getContext();
                //let test = e.changeTouches[0].clientX-canvasRef.current.getBoundingClientRect().left;
                //console.log(test);
                //     shape(e);
                // }
                shape(e);
            }
        })
    },[])
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
    };

    function Settimer(){
        SendTimeData(timer, Q_id);
    };

    function shape(e){
        //console.log(e);
        document.body.style.overflow = "hidden";
        //console.log(document.body.style.overflow);
        let ctx = getContext();
        let canvas = canvasRef.current.getBoundingClientRect();

        X =  e.clientX-canvas.left; //windowDimensions.width //+ ballRadius;
        Y=  e.clientY-canvas.top;//windowDimensions.height //+ ballRadius;
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

    document.addEventListener("load",function(){
        
    })

    //console.log("tet");

    
    {/*onTouchMove={(e) => MoveTouch(e)} onTouchEnd={RemoveTouch} onTouchCancel={RemoveTouch}*/}
    
    {/* onMouseDown={Move} onMouseUp={Remove} onMouseLeave={Remove}*/}
    return (<div><canvas className={classN} ref={canvasRef}></canvas><p className='test'>{test}</p> </div> 
    )  
}

export default HandleMove;
export {rect}