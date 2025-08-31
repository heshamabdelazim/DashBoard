import React from 'react'

function ProgressComp({ title, percent }:{title:String,percent:number}) {
  function giveColor() {
    // bg-[var(--primary)]
    if (percent === 100) return "bg-[var(--success)]";
    if (percent >= 80) return "bg-[var(--info)]";
    if (percent >= 60) return "bg-[var(--primary)]";
    if (percent >= 40) return "bg-[var(--warning)]";
    if (percent >= 20) return "bg-[var(--danger)]";
    return "bg-[var(--secondary)]";
  }
  return (
    <div className='flex flex-col '>
      <div className='flex justify-between items-center'>
        <p className='text-[14px] md:text-md font-semibold'>{title}</p>
        <span className='text-[14px]'>{percent===100? "Complete!":percent+"%" }</span>
      </div>
      <div className='relative pt-1'>
        <div className='h-4.5 bg-gray-200 rounded'>
          <div
            className={`${giveColor()} h-full rounded`}
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  )
}


export default ProgressComp
