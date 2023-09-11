import { setDoc, doc } from "firebase/firestore";
import db from './Firebase';
import { X_data,Y_data } from "./TwoDim";
import key from "./Key";

let Q_id;

function Send(Q_list){
    //console.log(rect,Q_list);
    try{  
        for(Q_id of Q_list){
            //console.log(Q_id);
            setDoc(doc(db,"Q", "result", Q_id, key),{          
                x:X_data,
                Y:Y_data
            }
            );
            setDoc(doc(db,"documents_list",Q_id),{
                document: key
            })
            //console.log("completed"); 
        }  
    }
    catch(e){
        console.log(e);
    } 


}

export default Send;