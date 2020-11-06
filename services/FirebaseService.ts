import { firebaseFirestore } from "../config/firebase"
import { WordGame } from "../features/gaming/gaming";

interface StatusGaming {
    gaming : boolean;
    letter : string;
}
export const firebaseServiceGetStatusGame = (id : string, callback : (status:StatusGaming) => void ) => {
    const unsubscribe = firebaseFirestore.collection("games").doc(id).onSnapshot(request => {
        const gaming = request.get("gaming");
        const letter = request.get("letter");
        callback({gaming,letter});
    });
    return unsubscribe;
} 

export const firebaseServiceCreateNewRoom = ({id,...rest} : {id:string,gaming:boolean,letter:string}) => {
    return firebaseFirestore.collection("games").doc(id).set(rest);
}

export const firebaseServiceGetDataFromGame = (id : string,callback: (data : any) => void) => {
    const unsubscribe = firebaseFirestore.collection("games").doc(id).onSnapshot(request => {
        const requestData = request.data;
        callback(requestData); 
    })
    return unsubscribe;
}

export const firebaseServiceSendWordsToGame = ({id,words,user} : WordGame) => {
    return firebaseFirestore.collection("games").doc(id).collection("words").add({
        words,
        user
    });
}