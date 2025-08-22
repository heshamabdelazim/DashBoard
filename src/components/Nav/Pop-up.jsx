import React from "react";

function Popup({ children, popupTitle }) {
  const isSearch = popupTitle === "Search";
  return (
    <div className=" openComp rounded-2xl shadow-2xl z-99 absolute right-0 top-[150%]  overflow-hidden">
      {popupTitle && !isSearch && (
        <div
          id="popup-title"
          className="p-2.5 bg-blue-500 text-white font-bold"
        >
          <h4>{popupTitle}</h4>
        </div>
      )}
      <div className="  bg-white w-full overflow-auto">{children}</div>
      {!isSearch && (
        <div className="p-2.5 bg-gray-100 text-gray-700 text-center">
          view all
        </div>
      )}
    </div>
  );
}

export default Popup;
