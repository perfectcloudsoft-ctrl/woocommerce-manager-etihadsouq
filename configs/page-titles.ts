
const pageTitlesConfig: {
    [key: string]: string,
} = {
    "/app": "Dashboard",
    "#/app/woocommerce": "WooCommerce",
    "/app/woocommerce/orders": "View Orders",
}

const breadcrumps: {
    [pageUrl: string]: string[],
} = {
    "/app": ["/app"],
    "/app/woocommerce/orders": ["/app", "#/app/woocommerce", "/app/woocommerce/orders"],
}

export { breadcrumps, pageTitlesConfig }