import React, { useState } from 'react'
import classes from './Counter.module.scss'

type Props = {}

export const Counter = (props: Props) => {
    const [count, setCount] = useState(0)

    return (
    <div>
        <span >Counter</span>
        <button className={classes.counter} onClick={() => setCount(count + 1)}>+</button>
        <span className=''>{count}</span>
        <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}