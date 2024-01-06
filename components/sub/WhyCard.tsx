import Image from "next/image";
import React from "react";

interface Props {
    title: string;
    description: string;
}

const WhyCard = ({ title, description }: Props) => {
    return (
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] mb-4">
            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-400">{description}</p>
            </div>
        </div>
    );
};

export default WhyCard;
