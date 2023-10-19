import { setDoc, doc } from "firebase/firestore";
import db from './Firebase';
import { rect } from "./Circle_copy";
import key from "./Key";
import { Radio_A_list } from "./Radio";

let Q_id;

function Send(Q_id){
    //console.log(rect,Q_list);
    try{  
            setDoc(doc(db,"Q", "result", Q_id, key),{          
                radius:rect
            }
            );
            setDoc(doc(db,"documents_list",Q_id,key),{
                document: key
            })
            console.log("completed"); 
        }  
    catch(e){
        console.log(e);
    } 
}

export default Send;