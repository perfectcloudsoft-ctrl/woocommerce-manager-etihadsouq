'use client';

import { breadcrumps, pageTitlesConfig } from '@/configs/page-titles'
import { RiArrowRightSLine } from '@remixicon/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react/jsx-runtime';

const DashboardBreadcrumps = () => {

    const pathname = usePathname();

    return (
        <div
            className='mb-10 flex items-center gap-4'
        >
            <p
                className='min-w-max text-xl font-semibold'
            >{pageTitlesConfig[pathname]}</p>

            <div
                className='h-[15px] w-0.5 bg-foreground/30'
            />

            <div
                className='flex items-center gap-2'
            >
                {breadcrumps[pathname].map((item, index) => (
                    <Fragment
                        key={index}
                    >
                        {index !== 0 && (
                            <RiArrowRightSLine
                                size={15}
                            />
                        )}
                        <Link
                            href={item}
                            className='text-sm font-medium text-foreground-secondary hover:text-theme-primary'
                        >{pageTitlesConfig[item]}</Link>
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default DashboardBreadcrumps