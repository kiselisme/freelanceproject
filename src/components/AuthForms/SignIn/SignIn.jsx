import React from 'react';
import s from './SignIn.module.scss';
import { Link } from "react-router-dom";

const SignIn = () => {

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
            <Link to='/resetPassword'>
            <span >Восстановить пароль</span>
            </Link>
            <button className={s.signInbtn}>Войти</button>
            <Link to="/registr">
            <button className={s.signUpbtn}>Зарегистрироваться</button>
            </Link>
        </div>
    );
};

export default SignIn;
