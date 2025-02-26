import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
            <div className='bg-slate-100 min-h-screen'>
                <div className='md:w-64 hidden md:block fixed'>
                    <SideNav />
                </div>
                <div className='md:ml-64'>
                    <Header />
                    {children}
                </div>
            </div>
    )
}

export const metadata: Metadata = {
    title: "AI Content Generator || Dashboard",
    description: "It's a dashboard page of the AI Content Generator",
    icons: "/dash.svg"
};

export default layout