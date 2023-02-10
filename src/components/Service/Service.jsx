import React from "react";
import s from "./Service.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import main from "../../assets/mainimg.png";
import Hints from "../Hints/Hints";

const Service = () => {

  const dataHints = [
    {
      name: "Веб дизайн",
      id:1
    },
    {
      name: "Фирменный стиль",
      id:2
    },
    {
      name: "Дизайн лого",
      id:3
    }
    
  ];

  return (
    <div className={s.service}>
      <div className={s.first_service}>
        <h1>Сервис подбора фрилансеров</h1>

        <p>Быстрый поиск исполнителей для ваших задач</p>

        <div className={s.search}>
          <Input
            size="large"
            placeholder="large size"
            prefix={<SearchOutlined />}
          />

          <button>Найти</button>
        </div>

        <div className={s.hints}>
          {
            dataHints.map(hints => {
              return (
                <Hints key={hints.id}>
                  { hints.name }
                </Hints>
              )
            })
          }
        </div>
      </div>

      <div className={s.second_service}>
        <div className={s.second_service_img}>
          <img src={main} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Service;
