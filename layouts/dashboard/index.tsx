import { PropsWithChildren } from 'react'
import DashboardHeader from './header'
import DashboardSidebar from './sidebar'
import DashboardBreadcrumps from './breadcrumps'

const DashboardLayout = ({
    children,
}: PropsWithChildren) => {
    return (
        <div
            className='min-h-dvh w-full bg-background-secondary flex flex-col'
        >
            <DashboardHeader />
            <div
                className='h-dvh pt-[65px] flex items-stretch'
            >
                <DashboardSidebar />
                <div
                    className='w-full max-h-full overflow-x-hidden overflow-y-auto py-8 px-5'
                >
                    <div
                        className='max-w-[1110px] mx-auto min-h-max'
                    >
                        <DashboardBreadcrumps/>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout