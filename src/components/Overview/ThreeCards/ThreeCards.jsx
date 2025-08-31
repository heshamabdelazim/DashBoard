import React from "react";
import Card from "../../Card";
import Welcome from "./Welcom";
import RecentAct from "./RecentAct";
import ProgressTrack from "./ProgressTrac";

function ThreeCards() {
  const cardBasis_desktop = "xl:basis-80";
  return (
    <div className="p-section flex justify-between gap-4 mt-[-5rem] flex-wrap">
      <Card className={`basis-200 ${cardBasis_desktop} flex-1 bg-amber-500`}>
        <Welcome />
      </Card>
      <Card
        title="Recently Active"
        className={`basis-100 ${cardBasis_desktop} flex-1`}
      >
        <RecentAct />
      </Card>
      <Card
        title="Total Progress Tracker"
        className={`basis-100 ${cardBasis_desktop} flex-1`}
      >
        <ProgressTrack />
      </Card>
    </div>
  );
}

export default ThreeCards;
