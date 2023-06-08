import { setDoc, doc } from "firebase/firestore";
import db from './Firebase';
import { rect } from "./Test";
import key from "./Key";

function Send(){
    try{
        console.log(rect);
        setDoc(doc(db, "test", key),{
            
            radius:rect
        }
        );

        setDoc(doc(db,"documents_list"),{
            document: key
        })
        console.log("completed");
    }
    catch(e){
        console.log(e);
    }   
}

export default Send;