import React from 'react'
import { useSelector } from 'react-redux';
import { authSelectors } from '../../../../features/authentication'
import HeaderUserNavigator from '../../../components/organisms/HeaderUserNavigation'

const HeaderAccount = () => {
    const { fullName, username } = useSelector(authSelectors.getUser);
    return (    
        <HeaderUserNavigator 
        user={{
            fullName,
            username
        }}/>
    )
}

export default HeaderAccount
