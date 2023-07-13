import key from "./Key";


export const AddKey = () =>{
    let G_cookie = true;
    let cookies = document.cookie;
    let cookieItem = cookies.split(";");

    for(let i=0;i<cookieItem.length;i++){
        let el = cookieItem[i].split("=");
        if(el[0].trim() == "key"){
            G_cookie = false;
            key = el[1];
        }
    }

    if(G_cookie){
        document.cookie = "key=" + key;
    }
}

export default AddKey;