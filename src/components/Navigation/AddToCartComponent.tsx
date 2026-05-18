"use client"
import React, { useState } from 'react'


export default function AddToCartComponent() {
    // creating state
    //      stat, functionUpdateState   initialize value
    //       |          |               |
    const [count, setCount] = useState(0);
    // update state value
    // setCount(count+1);

  return ( 
   <>

    <h1>Cart:{count} </h1>
    <button className ="border p-4 rounded" onClick={() => setCount(count+1)}>
        Add To Cart
    </button>

   </>
  )
}
