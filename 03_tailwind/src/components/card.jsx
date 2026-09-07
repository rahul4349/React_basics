import React from 'react'

export default function card({username = " HC ", post = "Not asssigned"}) {
    //console.log(props)
  return (
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvuHCBcMubfd9ZPdbipyTFPI9fPx7NN08bzkVx3eqvQ&s=10   " alt="" />
        {/* <h1 className='text-2xl bg-green-500 p-3 rounded'>A card for photos</h1> */}
        <h3 className='text-2xl bg-red-500 p-3 rounded'>Name: {username} </h3>
        <h6 className='text-2xl bg-red-500 p-3 rounded'>Post: {post}</h6>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, accusamus?</p> */}
    </div>
  )
}
