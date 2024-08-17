import { useEffect, useState } from "react";

function useWindowResize (){

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
       return() => {
        window.removeEventListener('resize', window)
       }
    },[])
    return width
}
export default useWindowResize