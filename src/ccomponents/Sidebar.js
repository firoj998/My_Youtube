import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>
          <Link to={"/"}>Home </Link>
        </li>

        <li>Shorts</li>
        <li>Video</li>
        <li>live</li>
      </ul>
      <h1 className="pt-5 font-bold">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className=" pt-5 font-bold">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
}

export default Sidebar;
