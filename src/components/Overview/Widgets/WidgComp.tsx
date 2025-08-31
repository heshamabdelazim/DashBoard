import React from 'react'

function WidgComp({ title, amount, iconJSX, reportLink }: {
  title: string, amount: string | number, iconJSX: React.ReactNode, reportLink: string
}) {
  function giveColor() {
    if(title.includes("Monthly)")) {
      return "bg-[var(--success)]";
    } else if(title.includes("Anually")) {
      return "bg-[var(--primary)]";
    } else if(title.includes("Pending")) {
      return "bg-[var(--danger)]";
    } else if(title.includes("Tasks")) {
      return "bg-[var(--warning)]";
    } else {
      return "bg-gray-500";
    }
  }
  return (
    <div className={`basis-[25%] rounded-xl ${giveColor()}`}>
        <div className='flex p-4 justify-between items-center'>
            <div className='basis-[80%]'>
              <p className='text-1xl text-gray-300 whitespace-nowrap overflow-ellipsis'>{title}</p>
              <h4 className='text-bold text-3xl'>{amount}</h4>
            </div>
          <span className=''>{iconJSX}</span>
      </div>
      <a href={reportLink} className='block px-4 py-2 hover:underline duration-200 border-t-[0.001px] border-black'>View Report</a>
    </div>
  )
}

export default WidgComp
