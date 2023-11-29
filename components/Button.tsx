import React from 'react';
import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    variant: string;
    icon?: string;
    full?: string;
    textSize: string;
    fontWeight: string;
    w: string;
    h: string;
}

const Button = ({type, title, variant, icon, full, textSize, fontWeight,w,h}: ButtonProps) => {
    return (
        <button type={type} className={`flexCenter w-[${w}] h-[${h}] ${variant} ${full && `w-full`}`}>
            <label
                className={`text-[${textSize}px] flex items-center justify-center cursor-pointer ${fontWeight}`}>{title}</label>
        </button>
    );
};

export default Button;