import React from "react";
import YouTubeSearchBar from "./YouTubeSearchBar";

function Timestamp() {
  const handleGenerate = (url) => {
    // Placeholder: handle the valid YouTube URL here
    console.log("Valid YouTube URL:", url);
  };

  return (
    <div className="timestamp">
      <YouTubeSearchBar onGenerate={handleGenerate} />
    </div>
  );
}

export default Timestamp;
