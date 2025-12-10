import { RiLoaderLine } from '@remixicon/react'

const AnimationLoader = ({ text }: {
    text: string,
}) => {
    return (
        <div
            className="py-[60px] min-h-[400px] px-4 flex items-center justify-center bg-background gap-3 rounded-lg"
        >
            <RiLoaderLine
                size={20}
                className='animate-spin text-theme-primary'
            />
            <p
                className='text-sm font-semibold'
            >{text}</p>
        </div>
    )
}

export default AnimationLoader