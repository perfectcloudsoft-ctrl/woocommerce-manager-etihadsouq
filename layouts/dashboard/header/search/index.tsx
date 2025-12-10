'use client';

import { RiSearchLine } from "@remixicon/react";
import { KeyboardEvent, useEffect, useRef } from "react";

const HeaderGlobalSearch = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {

        const handleKeyPress = (event: globalThis.KeyboardEvent) => {
            if (inputRef.current) {
                if (event.key === "k" && event.ctrlKey) {
                    event.preventDefault()
                    inputRef.current.focus();
                } else if (event.key === "Escape") {
                    event.preventDefault();
                    inputRef.current.blur();
                }
            }
        }

        window.addEventListener("keydown", handleKeyPress)

        return () => window.removeEventListener("keydown", handleKeyPress)

    }, [])

    return (
        <div>
            <div
                className="flex items-center gap-2 border border-stroke-light min-w-[400px] text-sm w-full py-2 px-4 rounded-lg focus-within:border-theme-primary focus-within:shadow-md shadow-theme-primary/10 group"
                onClick={() => {
                    if (inputRef.current) {
                        inputRef.current.focus();
                    }
                }}
            >
                <RiSearchLine
                    size={20}
                />
                <input
                    placeholder='Search'
                    className="w-full outline-none"
                    ref={inputRef}
                />
                <div
                    className="flex items-center gap-1"
                >
                    {["Ctrl", "K"].map((key) => (
                        <p
                            key={key}
                            className='py-1 px-2 bg-background-secondary text-[10px] rounded-md group-focus-within:bg-theme-primary group-focus-within:text-white'
                        >{key}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeaderGlobalSearch