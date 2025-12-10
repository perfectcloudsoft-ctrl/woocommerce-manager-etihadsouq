import { RemixiconComponentType, RiDashboardLine, RiStore2Line } from "@remixicon/react";

export interface DashboardSidebarMenuItemInterface {
    label: string,
    url?: string,
    icon: RemixiconComponentType,
    submenu?: {
        label: string,
        url: string,
    }[]
}

const sidebarMenuItems: DashboardSidebarMenuItemInterface[] = [
    {
        label: "Dashboard",
        icon: RiDashboardLine,
        url: "/app",
    },
    {
        label: "WooCommerce",
        icon: RiStore2Line,
        submenu: [
            {
                label: "Orders",
                url: "/app/woocommerce/orders",
            },
        ]
    }
]

export default sidebarMenuItems;