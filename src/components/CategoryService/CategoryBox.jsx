import React from 'react';
import s from "./CategoryBox.module.scss";

const CategoryBox = (props) => {
    return (
        <div className={s.box}>
            <div className={s.img_box}>
                <img className={s.image} src={props.image} alt="" />
            </div>
            <div className={s.box_text}>
                <h4>{props.title}</h4>
                <p>от 500 руб.</p>
            </div>
        </div>
    );
};

export default CategoryBox;