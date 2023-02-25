import React from 'react'
import { Login } from './Login'
import NavBarComponent from "../navBar";
import FooterComponent from '../footer';
export const LoginComponent = () => {
    return (
        <>
            <NavBarComponent></NavBarComponent>
            <Login />
            <FooterComponent />
        </>
    )
}
export default LoginComponent;
