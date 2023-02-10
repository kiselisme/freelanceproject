import React, { useState } from 'react';
import SignIn from '../../components/AuthForms/SignIn/SignIn';
import s from './Auth.module.scss';

const Auth = () => {
    const [whichForm, setWhichForm] = useState('signIn');
    return (
        <div className={s.authPage}>
            {whichForm === "signIn" ? <SignIn setWhichForm={setWhichForm}/> : null}
        </div>
    )
}

export default Auth