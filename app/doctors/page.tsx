"use client"
import React from 'react';
import HeadingText from "@/components/HeadingText";
import Input from "@/components/Input";

const Page = () => {
    return (
        <section className="max-container">
            <HeadingText title="Докторы"/>
            <div className=" mt-[47px]">
                <Input placeholder="Поиск услуги" w="834px" h="50px"/>
            </div>
        </section>
    );
};

export default Page;