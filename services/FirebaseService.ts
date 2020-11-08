import { firebaseFirestore } from "../config/firebase"
import { WordGame } from "../features/gaming/gaming";

interface StatusGaming {
    gaming : boolean;
    letter : string;
}

export const firebaseService = {
    
    deleteUser : (id : string) => {
        return firebaseFirestore.collection("users").doc(id).delete();
    },

    sendWordsToGame: ({id,words,user} : WordGame) => {
        return firebaseFirestore.collection("games").doc(id).collection("words").add({
            words,
            user
        });
    },
    
    getDataFromGame: (id : string,callback: (data : any) => void) => {
        const unsubscribe = firebaseFirestore.collection("games").doc(id).collection("words").onSnapshot(request => {
            const requestData = request.docs.map(item=>item.data());
            callback(requestData); 
        })
        return unsubscribe;
    },
    
    createNewRoom : ({id,...rest} : {id:string,gaming:boolean,letter:string}) => {
        return firebaseFirestore.collection("games").doc(id).set(rest);
    },
    
    startGame : (id:string) => {
        return firebaseFirestore.collection("games").doc(id).update({
            gaming : true
        });
    },
    
    statusGame: (id : string, callback : (status:StatusGaming) => void ) => {
        const unsubscribe = firebaseFirestore.collection("games").doc(id).onSnapshot(request => {
            const gaming = request.get("gaming");
            const letter = request.get("letter");
            callback({gaming,letter});
        });
        return unsubscribe;
    } 

}