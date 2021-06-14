import React from "react";

function ChooseVideo(props) {
  const { videos, onVideoSelect } = props;
  return (
    <>
      <div style={{ width: "100%", padding: 8 }}>
        {videos.map((video, index) => <video onClick={() => { onVideoSelect(video) }} key={index} src={video.url} autoPlay style={{ width: "calc(100% - 16px)", marginBottom: index !== videos.length - 1 ? 4 : 0 }} />)}
      </div>
    </>
  );
}

export default ChooseVideo;