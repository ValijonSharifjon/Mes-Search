import React from 'react';

type HeadingTextProps = {
    title: string;
}
const HeadingText = ({title}: HeadingTextProps) => {
    return (
        <h1 className="flex justify-center text-[#007BFF] text-6xl font-extrabold py-[10px]">{title}</h1>
    );
};

export default HeadingText;