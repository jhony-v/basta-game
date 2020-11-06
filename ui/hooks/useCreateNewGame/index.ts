import { useDispatch } from "react-redux"
import { firebaseFirestore } from "../../../config/firebase";
import { gamingActions } from "../../../features/gaming";

const useCreateNewGame = () => {
    const dispatch = useDispatch();
    const createNewGame = () => {
        const id = (Math.random().toString(8)+Date.now()).replace("0.","").substring(0,10);
        firebaseFirestore.collection("games").doc(id).set({}).then(() => {
            dispatch(gamingActions.createNewGame({id}));
        })
    }
    return {
        createNewGame
    }
}

export default useCreateNewGame
