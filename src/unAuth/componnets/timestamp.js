import React from "react";
import YouTubeSearchBar from "./YouTubeSearchBar";

function Timestamp() {
  const handleGenerate = (videoInfo) => {
    // Handle the video information here
    console.log("Generating timestamps for:", videoInfo);
    
    // You can add your timestamp generation logic here
    // For now, we'll show an alert to confirm it's working
    alert(`Generating timestamps for: ${videoInfo.title}`);
  };

  return (
    <div className="timestamp">
      <YouTubeSearchBar onGenerate={handleGenerate} />
    </div>
  );
}

export default Timestamp;
