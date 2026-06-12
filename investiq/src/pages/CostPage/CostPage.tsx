import s from "./CostPage.module.scss"
import c from "../../utilits/Container.module.scss"
import {categories, zveddata, itemCategories} from "../../utilits/probData"
import { Button } from "../../components/Button/Button"
import React, { useState } from "react";
import { Balance } from "../../components/Balance/Balance";

export const CostPage = ()=>{

    const [isOpen, setIsOpen] = useState(false);
    // Стан для збереження вибраної категорії (спочатку пустий плейсхолдер)
    const [selectedCategory, setSelectedCategory] = useState("Категорія товару");

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category); // міняємо текст на вибраний
        setIsOpen(false); // закриваємо список після кліку
    };
    return(<>
        <Balance
            linkUrl="http" 
            linkText ="Перейти до розрахунків"
        />
        <section className={s.cost}>
            <div className={c.container}>
                <div className={s.cost__cost_income_box}>
                    <p className={s.cost__cost}>витрати</p>
                    <p className={s.cost__income}>дохід</p>
                </div>
                <div className={s.cost__main}>
                    <div className={s.cost__input_box}>
                        <p className={s.cost__calendar_text}>24.05.2026</p>
                        <input type="text" name="" id="" placeholder="Опис товару" className={s.cost__input_opus}/>
                        <div className={s.cost__group}>
                            <h3 className={s.cost__subtitle}>Категорія товару</h3>
                            <ul className={s.cost__list}>
                                <li className={s.cost__item}>Транспотр</li>
                                <li className={s.cost__item}>Продукти</li>
                                <li className={s.cost__item}>Здоров’я</li>
                                <li className={s.cost__item}>Алкоголь</li>
                                <li className={s.cost__item}>Розваги</li>
                                <li className={s.cost__item}>Все для дому</li>
                                <li className={s.cost__item}>Техніка</li>
                                <li className={s.cost__item}>Комуналка, зв’язок</li>
                                <li className={s.cost__item}>Спорт, хобі</li>
                                <li className={s.cost__item}>Навчання</li>
                                <li className={s.cost__item}>Інше</li>
                            </ul>
                        </div>
                        {/* //// */}


                        {/* ////// */}
                        <div className={s.cost__svg_box_input}>
                            <input type="number" name="" id="" className={s.cost__input_calculator}
                            placeholder="0.00"/>
                        </div>
                        <Button
                                    text="ввести"
                                    onClick={()=>{}}
                                    className={s.cost__btn_in}
                                />
                        <Button
                                    text="очистити"
                                    bgColor="gray"
                                    textColor="black"
                                    onClick={()=>{}}
                                    className={s.cost__btn_clean}
                                />

                    </div>
                    <div className={s.cost__main_list_categories}>
                    <div className={s.cost__main_list_categ}>
                        <div className={s.cost__data_box}>
                            <ul className={s.cost__data_list}>
                                <li className={s.cost__data_item}>дата</li>
                                <li className={s.cost__data_item}>опис</li>
                                <li className={s.cost__data_item}>категорія</li>
                                <li className={s.cost__data_item}>сума</li>
                            </ul>
                        </div>
                        <div className={s.cost__disk_box}>
                            <ul className={s.cost__disk_list}>
                                {categories.map(({id, cat, data, descript, sum}) =>(
                                    <li key={id} className={s.cost__item_data}>
                                        <p className={s.cost__disk_data}>{data}</p>
                                        <p className={s.cost__disk_descript}>{descript}</p>
                                        <p className={s.cost__disk_cat}>{cat}</p>
                                        <p className={s.cost__disk_sum}>-{sum}</p>
                                    </li>
                                ))}

                                {categories.length < 6 && 
            Array.from({ length: 8 - categories.length }).map((_, index) => (
                <li key={`empty-${index}`} className={`${s.cost__item_data} ${s.empty_row}`}>
                    {/* Пусті нерозривні пробіли, щоб утримати висоту text-align */}
                    <p className={s.cost__disk_data}>&nbsp;</p>
                    <p className={s.cost__disk_descript}>&nbsp;</p>
                    <p className={s.cost__disk_cat}>&nbsp;</p>
                    <p className={s.cost__disk_sum}>&nbsp;</p>
                </li>
            ))
        }

                            </ul>
                        </div>
                        </div>
                        <div className={s.cost__zved_box}>
                            <h2 className={s.cost__zved_title}>зведення</h2>
                            <ul className={s.cost__zved_list}>
                                {zveddata.map(({ id, mounth, monsum }) => (
                                    <li key={id} className={s.cost__zved_item}>
                                        <p className={s.cost__zved_month}>{mounth}</p>
                                        <p className={s.cost__zved_sum}>{monsum}</p> 
                                    </li>
                                ))}
                            </ul>
                    </div>
                </div>
            </div>
            </div>
        </section>
    </>)
}