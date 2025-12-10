import React, { PropsWithChildren } from 'react'
import DashboardHeader from './header'
import DashboardSidebar from './sidebar'

const DashboardLayout = ({
    children,
}: PropsWithChildren) => {
    return (
        <div
            className='min-h-dvh w-full bg-background-secondary flex flex-col'
        >
            <DashboardHeader/>
            <div
                className='h-dvh pt-[65px] flex items-stretch'
            >
                <DashboardSidebar/>
                <div
                    className='w-full'
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout