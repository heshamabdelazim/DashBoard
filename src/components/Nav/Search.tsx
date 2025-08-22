import { SearchIcon } from "lucide-react"
import { useState } from "react"

function Search({ mobileHidden }: { mobileHidden: boolean }): React.ReactElement {
  let [isFocused, setIsFocused] = useState(false);
  const ui_desktop_mobile = mobileHidden ? "ml-3 mobile-none bg-gray-200 pr-2" : "desktop-none p-2 bg-white";
  // const ui_desktop_mobile = mobileHidden ? "ml-3 mobile-none" : "desktop-none absolute top-[100%] left-[50%] translate-x-[-50%] openComp z-60";
  const element_focused = isFocused ? "w-[15rem] outline-2 outline-blue-400" : "w-[13rem]";
  return (
    <div className={` flex gap-2 items-center justify-between  rounded transition-all ${element_focused} ${ui_desktop_mobile}`}>
      <input type="search" placeholder="Search" className="outline-0 w-[100%] bg-gray-200 p-3 pr-0 rounded-3xl" onFocus={()=>setIsFocused(true)} onBlur={()=>setIsFocused(false)}/>
      <SearchIcon />
    </div>
  )
}

export default Search
