import { Children } from "react"

export const Container = ({background , children }) => {
    return (
        <div className={`${background} w-screen`} >
            <div className="max-w-[1917px] h-full m-auto">{children}</div>
        </div>
    )
}