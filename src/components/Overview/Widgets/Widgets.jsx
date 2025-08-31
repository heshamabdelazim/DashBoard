import {
  Calendar1Icon,
  CheckSquareIcon,
  DollarSignIcon,
  GitCommit,
  TimerIcon,
} from "lucide-react";
import WidgComp from "./WidgComp";

function Widgets() {
  const allWidg = [
    {
      title: "Earnings (Monthly)",
      amount: "1250$",
      iconJSX: <Calendar1Icon size={40} strokeWidth={1} />,
      reportLink: "/",
    },
    {
      title: "Earnings (Anually)",
      amount: "40000$",
      iconJSX: <DollarSignIcon size={40} strokeWidth={1} />,
      reportLink: "/",
    },
    {
      title: "Tasks Completion",
      amount: 6,
      iconJSX: <CheckSquareIcon size={40} strokeWidth={1} />,
      reportLink: "/",
    },
    {
      title: "Pending Request",
      amount: 26,
      iconJSX: <TimerIcon size={40} strokeWidth={1} />,
      reportLink: "/",
    },
  ];
  return (
    <div className="p-section text-white !pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-4">
      {allWidg.map((widg, index) => (
        <WidgComp key={index} {...widg} />
      ))}
    </div>
  );
}

export default Widgets;
