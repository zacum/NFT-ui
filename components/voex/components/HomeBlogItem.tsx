import React from 'react'

interface Props{
  text: string
  imgUrl:string
}
export const HomeBlogItem = ({text,imgUrl}:Props) => {
  return (
    <div className='homeBlogItem col-12 d-flex align-items-center bg-white'>
    <img className='col-2 col-xl-1' src={imgUrl} />
    <p className='fs-4 ms-3 text-dark fw-bold'>{text}</p>
  </div>
  )
}
