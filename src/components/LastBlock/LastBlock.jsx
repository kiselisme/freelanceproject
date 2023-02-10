import React from 'react';
import s from './LastBlock.module.scss';
import person1 from '../../assets/person1.png';
import person2 from '../../assets/person2.png';
import person3 from '../../assets/person3.png';
import Describe from './../Describe/Describe';


const cards = [
    {
        title: "Опишите услугу",
        description: "Опишите свою задачу и условия. Это бесплатно и займёт 3‑4 минуты",
        img: person1,
        id: 1
    },
    {
        title: "Получите отклики",
        description: "Отклики с ценами от исполнителей. Обычно они приходят в течение 30 минут",
        img: person2,
        id: 2
    },
    {
        title: "Выберите исполнителя",
        description: "Выберите подходящего исполнителя и обсудите сроки выполнения",
        img: person3,
        id: 3
    }
]

const LastBlock = () => {
    return (
        <div className={s.last_block}>
            <h2 className={s.heading}>Как работает сервис?</h2>
            <div className={s.cards_container}>
                {cards.map((item)=>(
                    <Describe key={item.id} data={item}/>
                ))}
            </div>
        </div>
    );
};

export default LastBlock;