import React from "react";

function RecentAct() {
  const circlePosition =
    "left-[-0.5rem] absolute top-0 translate-x-[-50%] rounded-full  ";
  const arr = [
    {
      id: 1,
      lastUpdate: "8",
      dateType: "hr",
      description: () => (
        <>
          New order placed!{" "}
          <a href="">
            <strong>Order #2912</strong>
          </a>{" "}
          has been successfully placed.
        </>
      ),
    },
    {
      id: 2,
      lastUpdate: "11",
      dateType: "hr",
      description: () => (
        <>
          New user{" "}
          <a href="">
            <strong>Valerie Luna</strong>
          </a>{" "}
          has registered
        </>
      ),
    },
    {
      id: 3,
      lastUpdate: "27",
      dateType: "hr",
      description: () => (
        <>
          Your{" "}
          <a href="">
            <strong>weekly report</strong>
          </a>{" "}
          has been generated and is ready to view.
        </>
      ),
    },
    {
      id: 4,
      lastUpdate: "35",
      dateType: "hr",
      description: () => <>Server activity monitor alert</>,
    },
    {
      id: 5,
      lastUpdate: "40",
      dateType: "hr",
      description: () => (
        <>
          Details for{" "}
          <a href="">
            <strong>Marketing and Planning Meeting</strong>
          </a>{" "}
          have been updated.
        </>
      ),
    },
  ];
  return (
    <div id="card-container" className="flex max-h-[20rem] overflow-y-auto">
      <ul className=" pl-10 sm:pl-15 ">
        {arr.map((item) => (
          <li key={item.id} className="relative pl-4 pb-6">
            <span className="absolute top-0 left-0 translate-x-[-170%] opacity-80 font-light">
              {`${item.lastUpdate}`} {item.dateType}
            </span>
            <span className={` w-0.5 h-full ${circlePosition} bg-gray-400 `} />
            <span
              className={` w-3 h-3 ${circlePosition} bg-red-500 translate-y-[8px]`}
            />
            <p className="text-gray-600">{item.description()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentAct;
