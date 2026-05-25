import React from "react"
import s from "./Button.module.scss"

interface ButtonProps{
    children: React.ReactNode;
    bgColor?: "gray" | "orange";
    textColor?: "black" | "white";
    className?: string;
    onClick: () => void;
}

export const Button=({
    children,
    bgColor ="orange",
    textColor = "white", 
    onClick,
    className =""
}: ButtonProps) =>{

    const btnClass = `${s.btn} ${s[`btn--bg-${bgColor}`]} ${s[`btn--text-${textColor}`]} ${className}`.trim();

    return(
        <button onClick={onClick} className={btnClass}>
            {children}
        </button>
    )
}