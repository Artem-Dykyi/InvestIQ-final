import s from "./Balance.module.scss" 
import c from "../../utilits/Container.module.scss"

interface BalanceProps{
    linkUrl?: string;  
    linkText?: string;
}

export const Balance = ({linkUrl, linkText }: BalanceProps)=>{
    return(<>
        <section className={s.balance}>
            <div className={c.container}>
                <div className={s.balance__wrapper}>

                <div className={s.balance__box}>
                    <p className={s.balance__txt}>Баланс:</p>
                    <p className={s.balance__balance}>55 000.00 UAH</p>
                    <button className={s.balance__btn}>підтвердити</button>

                    
                </div>
                {linkUrl && linkText && (
                        <div className={s.balance__box_link}>
                            <a className={s.balance__link} href={linkUrl}>{linkText}</a>
                            <img className={s.balance__img} src="" alt="grafa" />
                        </div>
                    )}
                </div>
                
            </div>
        </section>
    </>)
}