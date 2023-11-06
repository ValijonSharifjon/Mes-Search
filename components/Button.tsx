import React from 'react';
import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    variant: string;
    icon?: string;
    full?: string;
}

const Button = ({type, title, variant, icon, full}: ButtonProps) => {
    return (
        <button type={type} className={`flexCenter gap-3 rounded-full  ${variant} ${full && `w-full`}`}>
            {icon && <Image src={icon} alt={title} width={24} height={24} />}
            <label className="black cursor-pointer">{title}</label>
        </button>
    );
};

export default Button;