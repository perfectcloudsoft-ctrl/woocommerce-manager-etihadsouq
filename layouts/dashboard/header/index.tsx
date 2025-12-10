import React from 'react'
import HeaderGlobalSearch from './search'
import { RiAccountCircleLine, RiNotification4Line } from '@remixicon/react'

const DashboardHeader = () => {
    return (
        <div
            className='bg-background border-b border-stroke-light py-3 px-6 absolute top-0 left-0 w-full min-h-[65px]'
        >
            <div
                className='flex items-center justify-between'
            >
                <h2
                    className='text-xl font-extrabold shrink-0'
                >Howdy, John &#128075;</h2>

                <div>
                    <HeaderGlobalSearch />
                </div>

                <div
                    className='flex items-center gap-5'
                >
                    <button
                        className='cursor-pointer'
                    >
                        <RiNotification4Line
                            size={23}
                        />
                    </button>
                    <button
                        className='cursor-pointer'
                    >
                        <RiAccountCircleLine
                            size={23}
                        />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default DashboardHeader