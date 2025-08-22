import {
  AudioWaveformIcon,
  Proportions,
  TriangleAlertIcon,
  UserIcon,
} from "lucide-react";
import React from "react";

interface notif {
  notifType: "info" | "progress" | "critical" | "request";
  id: number;
  Icon: React.FC;
  date: string;
  msg: string;
}

function Bell(): React.ReactElement {
  const STROKEWIDTH: number = 1.8;
  const SIZE: number = 20;
  const allNotifi: notif[] = [
    {
      notifType: "info",
      id: 1,
      Icon: () => <AudioWaveformIcon strokeWidth={STROKEWIDTH} size={SIZE} />,
      date: "December 29, 2021",
      msg: "This is an alert message. It's important to check it out.",
    },
    {
      notifType: "progress",
      id: 2,
      Icon: () => <Proportions strokeWidth={STROKEWIDTH} size={SIZE} />,
      date: "December 22, 2021",
      msg: "A new monthly progress report is ready for review.",
    },
    {
      notifType: "critical",
      id: 3,
      Icon: () => <TriangleAlertIcon strokeWidth={STROKEWIDTH} size={SIZE} />,
      date: "December 8, 2021",
      msg: "Critical system failure, system.",
    },
    {
      notifType: "request",
      id: 4,
      Icon: () => <UserIcon strokeWidth={STROKEWIDTH} size={SIZE} />,
      date: "December 2, 2021",
      msg: "New user request. Woody has requested access.",
    },
  ];

  return (
      <ul className="w-[15rem] md:w-[20rem] max-h-[15rem]">
        {allNotifi.map((item) => (
          <li
            key={item.id}
            className="flex gap-3 items-center p-2.5 hover:bg-gray-100 transition-all duration-300"
          >
            <span className={`${giveColor(item.notifType)} p-3 rounded-[50%] text-white`}>
              <item.Icon />
            </span>
            <div className="w-[75%] flex-1 ">
              <span className="text-[0.8rem]  text-gray-400">{item.date}</span>
              <p className="text-[0.9rem] whitespace-nowrap overflow-ellipsis overflow-hidden">{item.msg}</p>
            </div>
          </li>
        ))}
      </ul>

  );
}

function giveColor(notifType: "info" | "progress" | "critical" | "request"): string {
  switch (notifType) {
    case "info":
      return "bg-orange-400";
    case "progress":
      return "bg-blue-400";
    case "critical":
      return "bg-red-400";
    case "request":
      return "bg-green-400";
    default:
      return "bg-gray-400 ";
  }
}

export default Bell;
