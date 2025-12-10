'use client';

import { useRef, useState } from 'react';
import sidebarMenuItems, { DashboardSidebarMenuItemInterface } from './menu-items'
import Link from 'next/link'
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import { RiArrowRightSLine } from '@remixicon/react';

const SidebarMenu = () => {
    return (
        <div
            className='p-3 space-y-1'
        >
            {sidebarMenuItems.map((menu, index) => {
                if (menu.url) {
                    return (
                        <Link
                            href={menu.url}
                            key={index}
                            className='block'
                        >
                            <MenuItemTemplate
                                menu={menu}
                            />
                        </Link>
                    )
                } else if (menu.submenu) {
                    return (
                        <SubmenuItemTemplate
                            menu={menu}
                            key={index}
                        />
                    )
                }
            })}
        </div>
    )
}

function MenuItemTemplate({ menu, isOpen }: {
    menu: DashboardSidebarMenuItemInterface,
    isOpen?: boolean,
}) {

    const pathname = usePathname();

    return (
        <div
            className={'flex items-center justify-between gap-4 py-3 px-5 rounded-lg text-foreground/80' + ` ${pathname === menu.url ? "bg-background-secondary" : "hover:bg-theme-primary/10 hover:text-theme-primary"}`}
        >
            <div
                className='flex items-center gap-4'
            >
                <menu.icon
                    size={18}
                />
                <p
                    className='text-sm font-medium'
                >{menu.label}</p>
            </div>
            {menu.submenu && (
                <RiArrowRightSLine
                    size={15}
                    className={`transition-all ${isOpen ? "rotate-90" : ''}`}
                />
            )}
        </div>
    )
}

function SubmenuItemTemplate({ menu }: {
    menu: DashboardSidebarMenuItemInterface,
}) {

    const menuWrapperRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(prev => !prev)}
                className='cursor-pointer block w-full'
            >
                <MenuItemTemplate
                    menu={menu}
                    isOpen={isOpen}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key={"submenuPointer"}
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: 20,
                            opacity: 0,
                        }}
                        className='pl-4'
                    >
                        <div
                            className='min-h-max py-3 px-4 rounded-lg hover:bg-background-secondary'
                        >
                            {menu.submenu?.map((submenu, index) => (
                                <Link
                                    key={index}
                                    href={submenu.url}
                                    className='block text-sm'
                                >
                                    {submenu.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    )
}

export default SidebarMenu