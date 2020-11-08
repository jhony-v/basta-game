import React from 'react'
import { useSelector } from 'react-redux';
import { authSelectors } from '../../../../features/authentication'
import HeaderUserNavigator from '../../../components/organisms/HeaderUserNavigation'
import MicroButton from '../../../components/atoms/Buttons/MicroButton';
import usePersistStorageAuth from '../../../hooks/usePersistStorageAuth';

const HeaderAccount = () => {
    const { fullName, username } = useSelector(authSelectors.getUser);
    const { destroySession } = usePersistStorageAuth();
    const onPressLeave = () => {
        destroySession()
    }
    return (    
        <HeaderUserNavigator 
        user={{
            fullName,
            username
        }}
        icon={
            <>
            <MicroButton onPress={onPressLeave}>Salir</MicroButton>
            </>
        }
        />
    )
}

export default HeaderAccount
