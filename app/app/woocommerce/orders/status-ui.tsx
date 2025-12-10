import { WcOrdersInterface } from '@/types/woocommerce-types/order'
import React from 'react'

const OrderStatusUi = ({ text }: {
    text: WcOrdersInterface["status"],
}) => {

    let className = 'py-1 px-2 rounded-md max-w-max';

    if (text === "processing") {
        className = className + ' bg-yellow-600/20 text-yellow-600';
    } else if (text === "cancelled") {
        className = className + ' bg-red-600/20 text-red-600';
    } else if (text === "completed") {
        className = className + ' bg-green-600/20 text-green-600';
    } else if (text === "pending") {
        className = className + ' bg-orange-600/20 text-orange-600';
    }

    return (
        <p
            className={className}
        >{text}</p>
    )
}

export default OrderStatusUi