import React, { useState } from "react";
import YouTubeSearchBar from "./YouTubeSearchBar";

function Timestamp() {
  const [videoInfo, setVideoInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = (info) => {
    setVideoInfo(info);
  };

  const handleGenerateTimestamps = async () => {
    if (!videoInfo) return;
    setLoading(true);
    try {
      // Call the Firebase callable function
      const response = await fetch("/bumpups_timestamps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: videoInfo.url })
      });
      const data = await response.json();
      console.log("Timestamps API response:", data);
    } catch (err) {
      console.log("Error calling timestamps function:", err);
    }
    setLoading(false);
  };

  return (
    <div className="timestamp">
      {!videoInfo && <YouTubeSearchBar onGenerate={handleGenerate} />}
      {videoInfo && (
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <img src={videoInfo.thumbnail} alt={videoInfo.title} style={{ maxWidth: 300, height: "auto" }} />
          <h3>{videoInfo.title}</h3>
          <button onClick={handleGenerateTimestamps} disabled={loading} style={{ marginTop: 16 }}>
            {loading ? "Generating..." : "Generate Timestamps"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Timestamp;
