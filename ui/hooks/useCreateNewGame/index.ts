import { useDispatch } from "react-redux"
import { gamingActions } from "../../../features/gaming";
import { firebaseServiceCreateNewRoom } from "../../../services/FirebaseService";

const randomLetterFromAlphabet = () => {
    const codeA = "a".charCodeAt(0);
    const codeZ = "z".charCodeAt(0);
    const len = (codeZ+1) - codeA;
    const createLetters = Array(len).fill("").map((_,index) => {
        return String.fromCharCode(codeA+index);
    })
    return () => {
        const randomIndexBetweenAZ = Math.floor(Math.random() * len);
        return createLetters[randomIndexBetweenAZ];
    }
}

const getRandomId = () => {
    return (Math.random().toString(8)+Date.now()).replace("0.","").substring(0,10);
}

const getRandomLetter = randomLetterFromAlphabet();

const useCreateNewGame = () => {
    const dispatch = useDispatch();
    const createNewGame = () => {
        const id = getRandomId();
        const randomLetter = getRandomLetter();
        const data = {
            id,
            gaming:false,
            letter : randomLetter
        };
        firebaseServiceCreateNewRoom(data).then(() => { 
            dispatch(gamingActions.setNewGameCode({id}));
        })
    }
    return {
        createNewGame
    }
}

export default useCreateNewGame

