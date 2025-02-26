"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { HISTORY } from '../history/page';

function UsageTrack() {

    const { user } = useUser();
    const [totalUsage, setTotalUsage] = useState<number>(0);

    useEffect(() => {
        user && GetData();
    }, [user])


    const GetData = async () => {
        // @ts-ignore
        const result: HISTORY[] = await db.select().from(AIOutput)
            .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress || ""))

        GetTotalUsage(result)
    }

    const GetTotalUsage = (result: HISTORY[]) => {
        let total: number = 0;
        result.forEach(element => {
            total = total + Number(element.aiResponse?.length)
        });
        setTotalUsage(total)
        console.log(total)
    }
    return (
        <div className='m-5'>
            <div className='bg-primary text-white rounded-lg p-5'>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-[#ad5b5b] w-full rounded-full mt-3 my-4'>
                    <div className='h-2 bg-white rounded-full'
                        style={{
                            width: (totalUsage / 10000) * 100 + "%"
                        }}
                    >
                    </div>
                </div>
                <h2 className='text-sm my-2'>{totalUsage}/Unlimited Credits</h2>
            </div>
            <Button variant={"secondary"} className='w-full my-3 text-primary'>Upgrade🚀</Button>
        </div>
    )
}

export default UsageTrack