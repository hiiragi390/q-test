import { setDoc, doc } from "firebase/firestore";
import db from './Firebase';
import { rect } from "./Test";
import key from "./Key";
import { Radio_A_list } from "./Radio";

let Q_id;

function Send(Q_list){
    console.log(rect,Q_list);
    try{  
        for(Q_id of Q_list){
            console.log(Q_id);
            setDoc(doc(db,"Q", "result", Q_id, key),{          
                radius:rect
            }
            );
            setDoc(doc(db,"documents_list",Q_id),{
                document: key
            })
            console.log("completed"); 
        }  
    }
    catch(e){
        console.log(e);
    } 

    try{
        for(var k of Radio_A_list){
            setDoc(doc(db,"Q", "Radio_result", Q_id, key),{          
                anser:Radio_A_list[k]
            }
            );
        } 
    }catch{

    }
}

export default Send;