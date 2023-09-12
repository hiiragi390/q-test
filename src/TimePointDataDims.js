import { setDoc, doc } from "firebase/firestore";
import db from './Firebase';
import { X_data,Y_data } from "./TwoDim";
import key from "./Key";

function SendTimeData(time, Q_id){
    try{
    setDoc(doc(db, "dim_time", Q_id, key, time.toString()),{       
        x:X_data,
        y:Y_data,
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