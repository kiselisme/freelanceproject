import React, { useState } from "react";
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import CategoryBox from "./CategoryBox";
import img_one from "../../assets/img_one.png";
import img_two from "../../assets/img_two.png";
import img_three from "../../assets/img_three.png";
import img_four from "../../assets/img_four.png";
import img_five from "../../assets/img_five.png";
import img_six from "../../assets/img_six.png";
import s from "./CategoryService.module.scss";

const CategoryService = () => {

  return (
    <div className={s.CategoryService}>
      <h2>Категории услуг</h2>
      <div className={s.for_btn}>
      <Button type="primary" >Дизайн</Button>
      <Button type="primary" icon={<CloseOutlined />}>Разработка IT</Button>
      <Button type="primary" icon={<CloseOutlined />}>Тексты и копирайтинг</Button>
      <Button type="primary" icon={<CloseOutlined />}>SEO</Button>
      <Button type="primary" icon={<CloseOutlined />}>Обучение и консалтинг</Button>
    </div>

<div className={s.whole}>
    <div className={s.content}>
      <CategoryBox image={img_one} title='Фирменный стиль'/>
      <CategoryBox image={img_two} title='Фирменный стиль'/>
      <CategoryBox image={img_three} title='Фирменный стиль'/>
    </div>
    <div className={s.content}>
      <CategoryBox image={img_four} title='Фирменный стиль'/>
      <CategoryBox image={img_five} title='Фирменный стиль'/>
      <CategoryBox image={img_six} title='Фирменный стиль'/>
    </div>
    </div>
    </div>
  );
};

export default CategoryService;
