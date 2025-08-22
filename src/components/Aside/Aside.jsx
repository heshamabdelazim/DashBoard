import React from "react";

function Aside({ openSidebar }) {
  return (
    <aside
      className={`bg-[#ffffff] transition-all duration-300 sticky top-[4rem] h-[calc(100vh - 4rem)] overflow-hidden ${
        openSidebar ? "basis-[8%] md:basis-[12%]" : "basis-0"
      }`}
    >
      aside{" "}
    </aside>
  );
}

export default Aside;
