import React from 'react'

const Button = (props:any) => {
  return <button className='hover:bg-tomato bg-black px-[34px] py-[12px] text-btn text-white'>{props.children}</button>
}
export default Button
