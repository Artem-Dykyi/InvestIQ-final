import s from "./Input.module.scss"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string;
    className?: string;
}

export const Input = ({
    label,
    className = "",
    id,
    ...props
}:InputProps)=>{
    return(
        <div className={`${s.field} ${className}`.trim()}>
            <label htmlFor={id} className={s.field__label}>
                {label}
            </label>
            <input 
                id={id}
                className={s.field__input} 
            {...props} 
            />
        </div>
    )
}