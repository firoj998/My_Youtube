import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utility/appSlice";
import { useSearchParams } from "react-router-dom";

function WatchPage() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  // console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      WatchPage
    </div>
  );
}

export default WatchPage;
