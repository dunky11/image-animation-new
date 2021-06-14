import React from "react";

function ChooseVideo(props) {
  const { videos, onVideoSelect } = props;
  return (
    <div style={{ width: "100%", boxSizing: "border-box", padding: 8 }}>
      {videos.map((video, index) => <video onClick={() => { onVideoSelect(video) }} key={index} src={video.url} autoPlay style={{ width: "100%", marginBottom: index !== videos.length - 1 ? 4 : 0 }} />)}
    </div>
  );
}

export default ChooseVideo;