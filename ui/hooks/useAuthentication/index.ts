import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import routes from '../../../routes';
import { RootState } from '../../../store'
import usePersistStorageAuth, { AuthPersist } from '../usePersistStorageAuth';

const useAuthentication = () => {
    const auth = useSelector<RootState,AuthPersist>(state => state.auth);
    const navigate = useNavigation();
    const {  getPersist } = usePersistStorageAuth();
    useEffect(() => {
        getPersist();
    },[])
    useEffect(()  => {
        if(auth.isAuth) navigate.navigate(routes.gaming.name);
    },[auth]);
    return auth;
}

export default useAuthentication
