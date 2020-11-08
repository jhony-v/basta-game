import React from 'react'
import ScreenLoading from '../../ui/components/organisms/ScreenLoading';
import useAuthentication from '../../ui/hooks/useAuthentication'
import AuthGameRouter from './AuthGameRouter';
import NoAuthGameRouter from './NoAuthGameRouter';

const MainRouter = () => {
    const { loading, isAuth } = useAuthentication();
    if(loading) return <ScreenLoading/> 
    else if(isAuth) return <AuthGameRouter/> 
    return <NoAuthGameRouter/>
}

export default MainRouter
