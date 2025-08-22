import React from "react";
import Card from "../Card";

function ThreeCards() {
  return (
    <div className="p-section flex justify-between gap-4 mt-[-5rem] flex-wrap">
      <Card
        title="Card 1"
        className=" basis-50 lg:basis-100 flex-1 bg-amber-500"
      >
        <p>Content for card 1</p>
        <p>Content for card 1</p>
        <p>Content for card 1</p>
        <p>Content for card 1</p>
        <p>Content for card 1</p>
        <p>Content for card 1</p>
        <p>Content for card 1</p>
      </Card>
      <Card title="Card 2" className="basis-100 lg:basis-90 flex-1">
        <p>Content for card 2</p>
      </Card>
      <Card title="Card 3" className="basis-100 lg:basis-90 flex-1">
        <p>Content for card 3</p>
      </Card>
    </div>
  );
}

export default ThreeCards;
