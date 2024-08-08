import React, {useState} from 'react'

const Counter2 = () => {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count+1)
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={handleClick}>like</button>
        </>
    )
}

export default Counter2