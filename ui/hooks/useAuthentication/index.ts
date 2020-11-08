import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../../features/authentication';
import { RootState } from '../../../store'
import usePersistStorageAuth, { AuthPersist } from '../usePersistStorageAuth';

const useAuthentication = () => {
    const auth = useSelector<RootState,AuthPersist>(state => state.auth);
    const {  getPersist } = usePersistStorageAuth();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(authActions.setAuthLoading())
        getPersist().then(() => dispatch(authActions.endAuthLoading()));
    },[])
    return auth;
}

export default useAuthentication
