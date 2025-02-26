"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import UsageTrack from './UsageTrack'

function SideNav() {
    const router = useRouter();
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(true);


    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history'
        },
        // {
        //     name: 'Billing',
        //     icon: WalletCards,
        //     path: '/dashboard/billing'
        // },
        {
            name: 'Settings',
            icon: Settings,
            path: '/dashboard/settings'
        },
    ];

    return (
        <div className={`h-screen relative p-5 shadow-sm border bg-white transition-all duration-500 ${isOpen ? 'w-64' : 'w-20'}`}>
            <div className='flex justify-center items-center'>
                <Image src={'/logo.svg'} alt='Logo' width={isOpen ? 150 : 150} height={isOpen ? 150 : 150} />
            </div>
            <hr className='my-7 border' />
            <div className='mt-3'>
                {MenuList.map((menu, index) => (
                    <div
                        key={index}
                        onClick={() => router.push(menu.path)}
                        className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center transition-all duration-300 ease-in-out
                        ${path === menu.path ? 'bg-primary text-white' : ''}`}
                    >
                        <menu.icon className='h-6 w-6' />
                        {isOpen && <h2 className='text-lg'>{menu.name}</h2>}
                    </div>
                ))}
            </div>
            <div className='absolute bottom-10 left-0 w-full'>
                <UsageTrack />
            </div>
        </div>
    );
}

export default SideNav;
