import React from "react";
import Button from "./Button";

function ButtonList() {
  const buttonLists = [
    "All",
    "Movies",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "Valentines",
    "News",
    "Watched",
    "Recent",
    "New",
    "Mixes",
    "Thoughts",
  ];
  return (
    <div className="flex">
      {buttonLists.map((ele, i) => (
        <div key={i}>
          <Button name={ele} />
        </div>
      ))}
    </div>
  );
}

export default ButtonList;
