import React from 'react';
import s from "./Footer.module.scss";
import logo2 from "../../assets/logo2.png";
import classNames from "classnames";

const Footer = () => {
    return (
        <div className={s.principal}>
            <div className={s.container}>
                <div className={s.item}>
                    <img src={logo2} alt="footer-logo" />
                    <p>
                        © 2022 Netowork <br />
                        Все права защищены
                    </p>

                    <div className={s.itemClone}>
                        <p>Правила работы сервиса</p>
                        <p>Политика конфиденциальности</p>
                    </div>
                </div>

                <div className={classNames(s.cursor, s.item)}>
                    <p>О платформе</p>
                    <p>Как разместить заказ</p>
                    <p>Как получить заказ</p>
                    <p>Служба поддержки</p>
                </div>

                <div className={classNames(s.itemLast, s.item)}>
                    <p>Правила работы сервиса</p>
                    <p>Политика конфиденциальности</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;