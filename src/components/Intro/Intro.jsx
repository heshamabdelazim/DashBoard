import { ActivityIcon, Calendar1Icon } from "lucide-react";
import React from "react";

function Intro() {
  const flexCenter = "flex items-center";
  return (
    <div
      id="dashboard-intro"
      className={`p-section !pt-10 text-white flex-wrap gap-5 justify-between ${flexCenter}`}
    >
      <div className="basis-80">
        <div className={flexCenter}>
          <ActivityIcon opacity={0.8} />
          <h2 className="ml-2 text-4xl font-medium">DashBoard</h2>
        </div>
        <p className="mt-2 font-light text-xl opacity-80">
          Overview of your Dashboard
        </p>
      </div>
      <div
        className={`bg-white text-gray-900 rounded-xl ${flexCenter} p-3 gap-3 `}
      >
        <Calendar1Icon
          strokeWidth={2}
          size={17}
          className="text-[var(--primary)] "
        />
        <span>Aug 22, 2025 - Aug 22, 2025</span>
      </div>
    </div>
  );
}

export default Intro;
