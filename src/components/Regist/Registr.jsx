import React from 'react';
import s from "./Registr.module.scss";
import { Button } from 'antd';

const Registr = () => {
    return (
        <div className={s.registr}>
            <h6>Регистрация</h6>
            <div className={s.forbutt}>
                <button>Я фрилансер</button>
                <button>Я заказчик</button>
            </div>
            
        </div>
    );
};

export default Registr;