import s from "./Balance.module.scss" 

interface BalanceProps{
    linkUrl?: string;  
    linkText?: string;
}

export const Balance = ({linkUrl, linkText }: BalanceProps)=>{
    return(<>
        <section className={s.balance}>
            <div className={s.container}>
                <div className={s.balance__box}>
                    <p className={s.balance__txt}>Баланс:</p>
                    <p className={s.balance__balance}></p>
                    <button className={s.balance__btn}>підтвердити</button>
                    
                    {linkUrl && linkText && (
                        <a href={linkUrl}>{linkText}</a>
                    )}
                </div>
            </div>
        </section>
    </>)
}