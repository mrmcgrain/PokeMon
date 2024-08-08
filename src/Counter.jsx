import React, { useState, useEffect } from 'react'

const Counter = ({ item , inverseData}) => {

    const [count, setCount] = useState(0)


    useEffect(() => {

        if (localStorage.getItem(item.name)) {
            //    console.log(typeof (localStorage.getItem(item.name)))
            setCount(parseInt(localStorage.getItem(item.name)))

        }
    }, [])

    const handleCount = () => {
        setCount(count + 1)
        localStorage.setItem(item.name, count + 1)
        inverseData("Hello World")
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={handleCount}>Like</button>

        </>
    )
}

export default Counter