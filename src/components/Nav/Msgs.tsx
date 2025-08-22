
function Msgs() {
    const allMsgs = [
        { sender: "Alice", content: "ipsum dolor sit amet consectetur adipisicing elit. Cumque test test test test test test test test test test test test " },
        { sender: "Bob", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque" },
        { sender: "Charlie", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque " },
        { sender: "Charlie", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque " },
        { sender: "Charlie", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque " },
    ]
  return (
      <ul className=' w-[15rem] md:w-[20rem] max-h-[15rem]'>
          { allMsgs.map((msg, id) => (
              <li key={id} className='flex gap-2.5 items-center p-2.5 hover:bg-gray-300 transition'>
                  <span><img src='/public/profile-1.png' className=' rounded-[50%]' /></span>
                  <div className='w-[80%] flex-1'>
                      <p className='whitespace-nowrap text-ellipsis overflow-hidden'>{msg.content}</p>
                      <span className='text-gray-500 text-[14px]'>{ msg.sender}</span>
                  </div>
               
              </li>
          ))}
      </ul>
  )
}

export default Msgs
