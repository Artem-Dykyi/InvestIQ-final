import s from "./CostPage.module.scss"

export const CostPage = ()=>{
    return(<>
        <section className={s.cost}>
            <div className={s.container}>
                <div className={s.cost__cost_income_box}>
                    <p className={s.cost__cost}>витрати</p>
                    <p className={s.cost__income}>дохід</p>
                </div>
                <div className={s.cost__main}>
                    <div className={s.cost__input_box}>
                        <p className={s.cost__calendar_text}>24.05.2026</p>
                        <input type="text" name="" id="" />
                        <div className={s.cost__group}>
                            <h3 className={s.cost__subtitle}>Категорія товару</h3>
                            <ul className={s.cost__list}>
                                <li className={s.cost__item}></li>
                                <li className={s.cost__item}></li>
                                <li className={s.cost__item}></li>
                                <li className={s.cost__item}></li>
                                <li className={s.cost__item}></li>
                                <li className={s.cost__item}></li>
                                <li className={s.cost__item}></li>
                                <li className={s.cost__item}></li>
                                <li className={s.cost__item}></li>
                                <li className={s.cost__item}></li>
                                <li className={s.cost__item}></li>
                            </ul>
                        </div>
                        <div className={s.cost__svg_box}>
                            <input type="number" name="" id="" />
                        </div>
                        <button className={s.cost__btn_in}>ввести</button>
                        <button className={s.cost__btn_clean}>очистити</button>
                    </div>
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
                                {categories.map((index, cat, data, descript, sum) =>(
                                    <li key={index} className={s.cost__item}>
                                        <p className={s.cost__disk_data}>{data}</p>
                                        <p className={s.cost__disk_descript}>{descript}</p>
                                        <p className={s.cost__disk_cat}>{cat}</p>
                                        <p className={s.cost__disk_sum}>{sum}</p>
                                    </li>
                                ))}
                            </ul>
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