import React from 'react';
import s from './SignIn.module.scss';

const SignIn = ({ setWhichForm }) => {

    return (
        <div className={s.signIn}>
            <h2>Авторизация</h2>
            <label htmlFor="email">
                Email
                <input type="email" id='email' className={s.inputs} />
            </label>
            <label htmlFor="email">
                Пароль
                <input type="password" id="email" className={s.inputs} />
            </label>
            <span onClick={() => setWhichForm('resetPassword')}>Восстановить пароль</span>
            <button className={s.signInbtn}>Войти</button>
            <button onClick={() => setWhichForm('signUp')} className={s.signUpbtn}>Зарегистрироваться</button>
        </div>
    );
};

export default SignIn;
