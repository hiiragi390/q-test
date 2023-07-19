import { setDoc, doc } from "firebase/firestore";
import db from './Firebase';
import { rect } from "./Circle";
import key from "./Key";

function SendTimeData(time, Q_id){
    try{
    setDoc(doc(db, "time", Q_id, key, time.toString()),{       
        radius:rect,
        t:time
        }
    );
    console.log(Q_id);
    }
    catch(e){
        console.log(e);
    } 
}

export default SendTimeData;