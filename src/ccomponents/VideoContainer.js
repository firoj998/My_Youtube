import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utility/constants";
import ViedoCard from "./VideoCard";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const res = await fetch(YOUTUBE_VIDEOS_API);
    const json = await res.json();
    //console.log(json.items);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <ViedoCard info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
