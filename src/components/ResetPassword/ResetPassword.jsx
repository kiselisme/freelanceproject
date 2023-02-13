import React from 'react';
import s from './ResetPassword.module.scss';
import Button


const ResetPassword = () => {
    return (
        <div className={s.reset}>
            <h6>Восстановление пароля</h6>
            <p>Введите email, который вы использовали при <br/> регистрации</p>
            <label htmlFor="mail">
                Email
                <input type="mail" id='mail' className={s.forinput} />
            </label>
            <Button/>
            <button className={s.reset_in}>Войти</button>
        </div>
    );
};

export default ResetPassword;