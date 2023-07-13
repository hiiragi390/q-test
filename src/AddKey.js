import key from "./Key";

export function AddKey(){
    if(document.cookie==null){
        document.cookie = "key=" + key;
    }
    console.log(document.cookie);
}

export default AddKey;