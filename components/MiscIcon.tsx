import React from 'react';
import Image from "next/image";

type MiscIconProps = {
    icon: string;
    alt: string;
}
const MiscIcon = ({icon,alt}: MiscIconProps) => {
    return (
        <div className="w-[55px] h-[55px] rounded-full bg-[#007BFF] flex items-center justify-center p-3.5 hover:ring-2 hover:ring-blue-500">
            <Image src={icon} alt={alt} width={55} height={55}/>
        </div>
    );
};

export default MiscIcon;