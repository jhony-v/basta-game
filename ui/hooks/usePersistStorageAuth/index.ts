import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firebaseFirestore } from "../../../config/firebase";
import { authActions, authSelectors } from "../../../features/authentication";
import { firebaseService } from "../../../services/FirebaseService";

const KEY_STORAGE_AUTH = "auth";

export interface AuthPersist {
    isAuth?: boolean,
    user: {
        id?: string,
        username: string,
        fullName: string;
    },
    loading? : boolean;   
}

const setStorageAsync = async (payload : AuthPersist) => {
    return await AsyncStorage.setItem(KEY_STORAGE_AUTH,JSON.stringify(payload)).then(e=>true).catch(e=>false);
}

const getStorageAsync = async () : Promise<AuthPersist | null> => {
    const data = await AsyncStorage.getItem(KEY_STORAGE_AUTH);
    return data != null ? JSON.parse(data) as AuthPersist : null;
};

const deleteStorageAsync = async () => {
   return await AsyncStorage.removeItem(KEY_STORAGE_AUTH);
}

const usePersistStorageAuth = () => {
    const dispatch = useDispatch();  
    const { id } = useSelector(authSelectors.getUser);
    const setPersist = useCallback(async (payload : AuthPersist) => {
        const userCreated = await firebaseFirestore.collection("users").add(payload.user);
        if(userCreated) {
            const processPayload = {
                ...payload,
                user : {
                    ...payload.user,
                    id : userCreated.id
                }
            }
            setStorageAsync(processPayload).then(() => dispatch(authActions.addNewUser(processPayload)));
        }
    },[])

    const getPersist = useCallback(async () => {
        const request = await getStorageAsync();
        if(request != null) dispatch(authActions.getUser(request));
    },[])

    const destroySession = useCallback(async ()=> {
        await deleteStorageAsync();
        await firebaseService.deleteUser(id);
        dispatch(authActions.resetSession());
    },[])
    return {
        setPersist,
        getPersist,
        destroySession,
    }
}

export default usePersistStorageAuth;