import { firebaseFirestore } from "../config/firebase"
import { gamingActions } from "../features/gaming";
import store from "../store"

export const firebaseServiceGetStatusGame = (gameId : string ) => {
    const unsubscribe = firebaseFirestore.collection("games").doc(gameId).onSnapshot(request => {
        const status = request.get("gaming");
        store.dispatch(gamingActions.getStatusGaming({
            status
        }));
    });
    return unsubscribe;
} 

export const firebaseServiceCreateNewRoom = ({id,...rest} : {id:string,gaming:boolean,letter:string}) => {
    return firebaseFirestore.collection("games").doc(id).set(rest);
}