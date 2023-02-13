import React, { useState } from 'react';
import SignIn from '../../components/AuthForms/SignIn/SignIn';
import s from './Auth.module.scss';

const Auth = () => {
    
    return (
        <div className={s.authPage}>
            <SignIn/>
        </div>
    )
}

export default Auth;