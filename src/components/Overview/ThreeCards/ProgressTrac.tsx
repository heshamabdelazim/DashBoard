import ProgressComp from './ProgressComp';

function ProgressTrac() {
    const progressData = [
        { title: "Server Migration", percent: 20 },
        { title: "Sales Tracking", percent: 40 },
        { title: "Customer Database", percent: 60 },
        { title: "Payout Details", percent: 80 },
        { title: "Account Setup", percent: 100 },
    ];

  return (
    <div id='card-container' className='flex flex-col justify-between max-h-[20rem] gap-3 overflow-auto'>
      {progressData.map((item, index) => (
        <ProgressComp key={index} title={item.title} percent={item.percent} />
      ))}
    </div>
  )
}

export default ProgressTrac
