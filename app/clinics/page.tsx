"use client"
import React, {useEffect, useState} from 'react';
import HeadingText from "@/components/HeadingText";
import Input from "@/components/Input";

const Page = () => {
    const [data,setData] = useState<any>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/clinics')
                const jsonData = await response.json()
                setData(jsonData)
            }catch (error) {
                throw new Error('Failed to fetch data')
            }
        }
        fetchData()
    },[])
    console.log(data)

    return (
        <section className="max-container">
            <HeadingText title="Клиники" />
            <div className="mt-[47px]">
                <Input placeholder="Поиск клиники" w="834px" h="50px"/>
            </div>
            <div className="flex flex-col gap-[50px]">

            </div>
        </section>
    );
};

export default Page;