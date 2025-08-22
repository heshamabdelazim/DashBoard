import React from 'react'

function Card({children, title, className}) {
  return (
    <div id='card' className={`overflow-hidden bg-white rounded-xl ${className}`} >
      {title && <h2 className='pl-5 p-2 text-[var(--primary)] text-lg font-medium bg-gray-100'>{title}</h2>}
      <div className='p-2'>{children}</div>
    </div>
  )
}

export default Card
