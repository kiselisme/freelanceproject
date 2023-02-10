import React from 'react';
import s from "./Describe.module.scss";


const Describe = ({data}) => {
    return (
        <div className={s.card}>
            <h5 className={s.card_title}>{data?.title}</h5>
            <p className={s.card_description}>{data?.description}</p>
            <img className={s.card_image} src={data?.img} alt={`${data?.title} img`} />
        </div>
    );
};

export default Describe;