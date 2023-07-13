import key from "./Key";


export function AddKey(){
    let G_cookie = true;
    let cookies = document.cookie;
    let cookieItem = cookies.split(";");
    let cookieValue = "";

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
    console.log(document.cookie);
}

export default AddKey;