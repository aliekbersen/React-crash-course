import React, { useState, useEffect } from 'react'

function Clock() {
    const [time, setTime] = useState(new Date().toString())
    const [flag, setFlag] = useState(true)

    useEffect (() => {
        const interval =setInterval(showDate, 1000)

        return() => {
            clearInterval(interval);
        }
    }, [time]);

    function showDate() {
        setTime(new Date().toString());
    }
  return (
    <div>{time}</div>
  )
}

export default Clock;