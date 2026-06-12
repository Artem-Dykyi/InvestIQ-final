import React from "react"
import s from "./Button.module.scss"


interface ButtonProps{
    text: string;
    icon?: React.ReactNode;
    bgColor?: "gray" | "orange";
    textColor?: "black" | "white";
    className?: string;
    onClick: () => void;
}

export const Button=({
    text,
    icon,
    bgColor ="orange",
    textColor = "white", 
    onClick,
    className =""
}: ButtonProps) =>{

    const btnClass = `${s.btn} ${s[`btn__bg_${bgColor}`]} ${s[`btn__text_${textColor}`]} ${className}`.trim();

    return(
        <button onClick={onClick} className={btnClass}>
            {icon && icon}        
            <span>{text}</span>
        </button>
    )
}